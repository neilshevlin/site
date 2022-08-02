---
title: SQL Notes
description: Notes on SQL
---

{% section .hero %}
# SQL Notes
## SQL and Big Query

Big Query is a web service that lets you apply SQL to big datasets

### Getting started with Big Query

```python
from google.cloud import bigquery
```

First we set up a client from big query

```python
client = bigquery.Client()
```

Then we can get access to the data sets that we want. For this example we'll use hacker news

We start  by

1. construct a reference to the data set
2. use the get_dataset() method, with the reference to get access to the data

```python
dataset_ref = client.dataset('hacker_news', project='bigquery-public-data')

dataset = client.get_dataset(dataset_ref)
```

The data set is now filled with a bunch of tables

```python
tables = list(client.list_tables(dataset))

for table in tables:
	print(table.table_id)
```

### Table schema


```python
dataset_ref = client.dataset('chicago_crime', project='bigquery-public-data')

table_ref = dataset_ref.table("crime")#grab the individual table that you're looking for
table = client.get_table(table_ref)#turn in to a table obj
print(table.schema)
```

The schema field gives us info about specific columns

- name
- field type
- mode - (NULLABLE - means you can input NULL values
- description

We can then grab the first 5 entries of that table to make sure that the data makes sense in relation to the schema that we have

```python
client.list_rows(table, max_results=5).to_dataframe()
```

- We can get however many rows that we want, using the list rows feature.
- BigQuery returns a 'RowIterator' object
- We can quickly convert the Rowiterator object to a pandas object by using to_dataframe() method

We can also use list rows to look at a specific column

```python
client.list_rows(table, selected_fields=table.schema[:1], max_results=5).to_dataframe()
```

This will just grab the individual value that we want. 

selected_fields=table

![Return object](./image.png)

Return object

If we want to access a specific field you need to figure out the names

```python
table_ref = dataset_ref.table("crime")
table = client.get_table(table_ref)

fields_for_plotting = ["latitude", "longitude"]
```
## SELECT, FROM & WHERE with python

After we use python to get a good understanding of the dataset we can the make some query on the data. 

```python
query = 
"""
SELECT city
FROM `bigquery-public-data.openaq.global_air_quality`
WHERE country = 'US'
"""

client = bigquery.Client()

query_job = client.query(query)

us_cities = query_job.to_dataframe()#get in to panda dataframe
```

Submitting your query to the data set

The output is a pandas dataframe with the query that we were looking for

![SELECT,%20FROM%20&%20WHERE%20with%20python%20c3b80dc2250a43b79c83b55d28a953c2/Screenshot_2021-01-14_at_11.16.35.png](SELECT,%20FROM%20&%20WHERE%20with%20python%20c3b80dc2250a43b79c83b55d28a953c2/Screenshot_2021-01-14_at_11.16.35.png)

Multiple queries

### Checking the size of a query before querying

Some datasets can be very large, and a query might be gigantic so you have to be careful.  You can run a preliminary check on the data. 

```python
query = """
        SELECT score, title
        FROM `bigquery-public-data.hacker_news.full`
        WHERE type = "job" 
        """

dry_run_config = bigquery.QueryJobConfig(dry_run = True)

dry_run_query_job = client.query(query, job_config = dry_run_config)

print("process {} bytes in ".format(dry_run_query_job.total_bytes_processed))
```

This will get you back the rough amount of data that will be processed in the query. 

This will bring back a result in bytes

You can then configurate your query to only run on certain criteria of data size

```python
ONE_MB = 1000*1000
#ONE_GB = 1000*1000*1000

safe_config = bigquery.QueryJobConfig(maximum_bytes_billed=ONE_MB)

safe_query_job = client.query(query, job_config=safe_config)
safe_query_job.to_dataframe()
#returns an error because the return is over the allowed size
```

Getting a distinct country in a query

```python
query = """
SELECT DISTINCT country
FROM `bigquery-public-data.openaq.global_air_quality`
WHERE units = 'ppm'
"""
```
## Group By, Having & Count with Python and BigQuery

### **COUNT**

→ aggregate function → takes many values and return 1

Other aggregate funtions that do the same are → 

```sql
SUM()
AVG()
MIN()
MAX()
```

### GROUP BY & HAVING

The two are used together

```python
query = """
SELECT Animal, COUNT(ID)
FROM `bigquery-public-data.pet_records.pets`
GROUP BY Animal
HAVING COUNT(ID) > 1
"""

```

Hacker news example

From the table, get the number of comments that had sub comments greater than 10. 

```python
query = """
SELECT parent, COUNT(ID) AS numPosts
FROM `bigquery-public-data.hacker_news.comments`
GROUP BY parent
HAVING COUNT(id) > 10
"""
```
## Order By

When we have a table we may want to order by some value so that we can better understand the data

You may want to order data by the ID

```sql
SELECT ID, Animal
FROM table
ORDER BY ID
```

SQL is also very good at ordering by differrent values

Like Alphabetica

```sql
SELECT ID, Animal
FROM table
ORDER BY Animal
```

You can also order in descending order

```sql
SELECT ID, Animal
FROM table
ORDER BY Animal DESC
```

Dates are also a common ordering tool

We might have a data object or a Datetime object

### Extract

We can then extract some info about the information  using extract before we order it

For example we can order by the week in the year from 1-53

```sql
SELECT name, EXTRACT(WEEK from Date) as Week
FROM table
ORDER BY Week
```

With this we can use a group by to further order the data. 

```sql
SELECT COUNT(ID) AS numEvents, EXTRACT(DAYOFWEEK from date) AS day
FROM table
GROUP BY day
ORDER BY numEvents
```

You can then create complex queries to be able to get the info you want. 

```sql
SELECT i_code, i_name, COUNT(1) AS num_rows
FROM table
WHERE y = 2016
GROUP BY i_code, i_name
HAVING COUNT(1) > 175
ORDER BY COUNT(1) DESC
```

The ordering process of above is as follows

1. create a meta table that is i_code, i_name and count some groups elements and call that num_rows
2. Get all the rows with 2016 year
3. Group all the rows with 2016 according to nique occurences of i_code, i_name 
4. Then count elements in the groups
5. Exclude less than 175
6. Order by the count of elements in the non excluded groups
## AS & With

As can be used to rename some selection in your table selection

```sql
SELECT name_id_etet AS name
FROM myTable
```

This can be used even more powerfully when you need to reduce the complexity of your selection

```sql
WITH overEighties As
(
	SELECT name, age, ID
	FROM nursing_home_residents
	WHERE age > 80
)
SELECT name, ID
FROM overEighties
```

This creates a meta table, that we preform some operation from, to then produce a new final table

This is known as a **common table expression (CTE)**

We might want to get the date of some transaction, and we dont want to complicate our code by having to do the conversion from a date timestamp to Date conversion

```sql
WITH time AS
(
	SELECT DATE(timestamp) AS transaction_time
	FROM mainTable
)
SELECT COUNT(1) AS transaction, transaction_time
FROM time
GROUP BY transaction_time
ORDER BY transaction_time

```

Another example of a more complex query

```sql
WITH RelevantRides AS
               (
		                   SELECT EXTRACT(HOUR FROM trip_start_timestamp) AS hour_of_day, 
															trip_seconds,
															trip_miles
		                   FROM `bigquery-public-data.chicago_taxi_trips.taxi_trips`
		                   WHERE 
			                        trip_start_timestamp > '2017-01-01' AND
			                        trip_start_timestamp <'2017-07-01' AND
			                        trip_seconds > 0 AND 
			                        trip_miles > 0
               )

   SELECT COUNT(1)AS num_trips, hour_of_day, 3600*SUM(trip_miles)/SUM(trip_seconds)AS avg_mph
   FROM RelevantRides
   GROUP BY hour_of_day
   ORDER BY avg_mph DESC
```

This is first refining the data that we need in order to get meta table RelevantRides

Then it performs calculations in the meta table to output the real table
## Joins

Joining is just taking data from two differnt tables, which have some reference to each other. 

You start by defining the two tables that you want to pull data from

```sql
SELECT a.id, a.body, a.owner_user_id
FROM `bigquery-public-data.stackoverflow.posts_questions` AS q
INNER JOIN `bigquery-public-data.stackoverflow.posts_answers` AS a
ON q.id = a.parent_id
WHERE q.tags LIKE '%bigquery%'
```

The INNER JOIN of the two data sets is the important part

We rename them as something and then select the pieces of data that we need. 

ON is just telling SQL where to make the Join

LIKE is a tool to be able to search for the exact word, or words containing letters 

Here is another example of how this could work

```sql
WITH experts AS
               (
               SELECT a.id, a.body, a.owner_user_id
               FROM `bigquery-public-data.stackoverflow.posts_questions` AS q
               INNER JOIN `bigquery-public-data.stackoverflow.posts_answers` AS a
               ON q.id = a.parent_id
               WHERE q.tags LIKE '%bigquery%'
                    )
  SELECT COUNT(1) AS number_of_answers, owner_user_id AS user_id
  FROM experts
  GROUP BY user_id
  ORDER By number_of_answers DESC
```

Above we are doing much the same, joing the data that we want but we are placing it in to a meta layer with the WITH statement

Then we do some more transforations on it

IF we wanted to get a python script to get the data, then our full operational function would look something like this

```sql
def expert_finder(topic, client):
    '''
    Returns a DataFrame with the user IDs who have written Stack Overflow answers on a topic.

    Inputs:
        topic: A string with the topic of interest
        client: A Client object that specifies the connection to the Stack Overflow dataset

    Outputs:
        results: A DataFrame with columns for user_id and number_of_answers. Follows similar logic to bigquery_experts_results shown above.
    '''
    my_query = """
               SELECT a.owner_user_id AS user_id, COUNT(1) AS number_of_answers
               FROM `bigquery-public-data.stackoverflow.posts_questions` AS q
               INNER JOIN `bigquery-public-data.stackoverflow.posts_answers` AS a
                   ON q.id = a.parent_Id
               WHERE q.tags like '%{topic}%'
               GROUP BY a.owner_user_id
               """

    # Set up the query (a real service would have good error handling for 
    # queries that scan too much data)
    safe_config = bigquery.QueryJobConfig(maximum_bytes_billed=10**10)      
    my_query_job = client.query(my_query, job_config=safe_config)

    # API request - run the query, and return a pandas DataFrame
    results = my_query_job.to_dataframe()

    return results
```
{% /section %}
