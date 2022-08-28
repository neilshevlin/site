---
title: Technical Notes
description: A list of technical notes on Postgres and it's databases.
---

{% section .hero %}
# Technical Notes
## Basics
### Creating tables

```sql
CREATE TABLE cities(
	name VARCHAR(50),
	country VARCHAR(50), 
	population INTEGER, 
	area INTEGER
);
```

Key word is the - CREATE TABLE 

Identifier is - cities

### Inserting values in to a table

```sql
INSERT INTO cities (name, country, population, area)
VALUES
('Dehli', 'India', 34000000, 4000),
('Shanghai', 'China', 32000000, 3000);
```

Use of single quotes

Watch for integer sizes. 

### Retrieving values

```sql
SELECT * FROM cities; 
--or

SELECT name, population FROM cities
--or

SELECT name, name, name FROM cities
```

### Retrieving calculated columns

```sql
SELECT name, population/area AS population_density FROM cities

```

Operators are generally the same as standard programing languages. 

### String operators

```sql
SELECT name || ', ' || country AS concatenated_string FROM cities;
```

Double piping concatenates two string together

```sql
SELECT CONCAT(name, ', ', country) AS concatenated_string FROM cities;
```

You can do the same thing with a function. 

### Basic functions

```sql
SELECT 
	UPPER(CONCAT(name, country)) AS concatenated_string 
FROM 
	cities;
```
## Record Filtering
```sql
SELECT 
	name, area   --Then narrows with this
FROM 
	cities  --Gets this first
WHERE 
	area > 4000;  --then narrows with this
```

There a group of comparison operators you can use for SQL operations

### Operators

- Operators
    - = equal to
    - >  greater than
    - < less than
    - > = Greater equal
    - IN    Is value present
    - < =   Less than equal
    - <>    Are values not equal
    - ! =   Are values not equal
    - BETWEEN    Is value between two values
    - NOT IN     Is the value not present
    

```sql
SELECT 
	name, 
	area
FROM 
	cities
WHERE
	area BETWEEN (30,3000);
```

### Compounded WHERE

```sql
SELECT 
	name, 
	area
FROM 
	cities
WHERE
	area BETWEEN (30,3000) 
	AND 
	NOT (2000);
```

You can add additional clauses to the where statement to further refine the information you're looking for. 

Example

```sql
SELECT
	phone,
	manufacturer
FROM 
	phones
WHERE
manufacturer = 'Apple' OR manufacturer = 'Samsung';
```

### **Mathematical WHERE**

```sql
SELECT 
	name,
	country
FROM 
	cities
WHERE
population /area > 6000;
```

This will do a mathematical evaluation first

### Updating Rows

```sql
UPDATE
	cities
SET
	population = 3000000
WHERE
	name = 'Dublin';
```

You can specify to the degree with which you want to avoid repetition in updates

### Deleting rows

```sql
DELETE FROM
	cities
WHERE 
	population < 100000;

```
## Tables

Tables are rows and colums

There a some key relationships

One to One

One to Many 

Many to Many

Many to One

Each table has its **primary key** and a **foreign key**

**Primary Key**

the id of the row entry with its correspinding values

**Foreign key**

An outbound key which relates one row in a table to another row in a table. 

Foreign keys are usually only involved in sub components

**Example**

Profile ←foreign key —post ← foreign key—- comment

Foreign keys are used when there is many of something in a table relating to one instance of some row

---

**Auto generating ID's**

```sql
CREATE TABLE users(
id SERIAL PRIMARY KEY, 
username VARCHAR(50)
);--Creates a table with the asisgned id's and the username column

INSERT INTO users(username)
VALUES
('Neil'),
('John'),
('Mary'),
('Bill');--This will now make the entries in to the table with out the id assignment

```

**Foreign key columns**

```sql
CREATE TABLE photos(
id SERIAL PRIMARY KEY, 
url VARCHAR(200), 
user_id INTEGER REFERENCES users(id)
);

```

**Foreign Key constraints**

On adding a post with a foerign key of user that is valid everything works ok

However, on adding a post where the user id does not exist and the foreign key points to something that isnt there you get an error

However, you can reference a null value which will be counted as valid. 

**Deletion constraints**

There are different ways in which you can try delete a record with foreign key references

- ON DELETE RESTRICT → Throws and error does nothing
- ON DELETE NO ACTION → Also throws and error
- ON DELETE CASCADE → Deletes the key and all the refences to that key
- ON DELETE SET NULL → Deletes and sets the references to Null
- ON DELETE SET DEFAULT → Sets the foreign key to a default value

### **Deleting**

```sql
CREATE TABLE photos(
id SERIAL PRIMARY KEY, 
url VARCHAR(200), 
user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
```

```sql
DELETE FROM users
WHERE id = 1;
```

Other delete options

```sql
CREATE TABLE photos(
id SERIAL PRIMARY KEY, 
url VARCHAR(200), 
user_id INTEGER REFERENCES users(id) ON DELETE SET NULL
);
```
## Record Joins

You can join some records together with a custom selection. 

```sql
SELECT contents, url
FROM comments
JOIN photos ON photos.id = comments.photo_id
```

Above is doing the following

1. Creating two seperate elements from the tables to add to a new table
2. you designate that the majority of the infor your taking is from comments table
3. Join the table photos and its column id to comments.photo_id
4. comments.photo_id is related directly to the table photo 

When selecting from a join table that has two col that are the same you have to specify what you mean or it will bring back an ambigious error

```xml
SELECT comments.id, photos.id
FROM photos
JOIN comments ON photos.id = comments.photo_id
```

**Renaming Tables**

```xml
SELECT comments.id AS com.id
FROM photos AS p
JOIN p ON p.id = comments.photo_id
```

### Inner Joins

default is going to be a inner join

Looks for the matching join between two different tables. 

If a row from one table doesnt match up with the other it drops it from the selction.

### Left Joins

Takes the left set and the intersection

ie All from the left table and all the matching rows from another table .

Right table to go along with the non matched rows will be give the value NULL

### Right Joins

Opposite of Left Join

Takes all the table entries on the right table and matches them with the left table

If there are no matches on the left table to be found it assigns a row null values. 

### Full Join

Makes a full join for all the intersections and the left and right tables 

Assigns a null value to all the missed joins

### **Join with Where**

```sql
SELECT comment, photo_id
FROM comments AS c
JOIN photos ON photos.id = c.photo_id
WHERE comments.user_id = photos.user_id
```

### **Three way Joins**

```sql
SELECT comment, photo_id, username
FROM comments AS c
JOIN photos ON photos.id = c.photo_id
JOIN users ON users.id = c.photo_id AND users.id = photos.id
```
## Record Aggregation

You may have a table with some values by which you wish to group by

eg. A list of comments which there are more comments than the user ID's listed. ie one person has commented more than once

We can then group the comments by the use id and get the comments attributed to each individual user

```sql
SELECT contents
FROM comments
GROUP BY user_id
```

Now you have this new pseudo table of grouped elements. 

However you cant access the values of the groupings directly and have to use what is known as aggregate functions

### Aggregate functions

There are several types 

```sql
COUNT()--number of values in the table of type
SUM()--the sum
AVG()--the average
MIN()--min
MAX()--max
```

eg

```sql
SELECT MAX(id)
FROM comments
```

### Combining aggregates and Groups

```sql
SELECT user_id, COUNT(id) AS total_comments
FROM comments
GROUP BY user_id;
```

Edge cases with count

if asked to count the number of photos in a db, count might ignore all the null associated images

To get around this we just count all the rows for example

```sql
SELECT COUNT(id) FROM photos; --this will get all the photos with an id

--TO get all rows

SELECT COUNT(*) FROM photos;--gets all the rows
```

### Having

We use this to select the individual groups in a query

This will usually be placed after a GROUP BY query

```sql
SELECT users, COUNT(id)
FROM comments
GROUP BY user_id
HAVING COUNT(*) > 2;
```
## Sorting

```sql
SELECT * 
FROM products
ORDER BY price;
```

```sql
SELECT * 
FROM products
ORDER BY price DESC;
```

```sql
SELECT *
FROM products
ORDER BY name;
--ORDER BY name DESC;
```

C**ompounded sorts**

```sql
SELECT *
FROM products
ORDER BY name, weight;
```

```sql
SELECT *
FROM products
ORDER BY name, weight DESC;
--ORDER BY name DESC, weight DESC;
```

**Offsets and Limits**

Offsets are grabbing the values after some point

Limits grab up to a specific point

```sql
SELECT * 
FROM products
ORDER BY weight
OFFSET 40
LIMIT 5;
```
## Unions and intersections

If you have two list queries and you want to see them united you can use Union

```sql
(
SELECT * 
FROM products
ORDER BY price DESC 
LIMIT 4
)
UNION
--UNION ALL
(
SELECT * 
FROM products
ORDER BY price/weight 
LIMIT 4
)
```

Union only works on tables that have the same data and the same columns → You have to have the same table. 

### Other set operators

**Intersect**

```sql
(
SELECT * 
FROM products
ORDER BY price DESC 
LIMIT 4
)
INTERSECT
(
SELECT * 
FROM products
ORDER BY price/weight 
LIMIT 4
)
```

Except

```sql
(
SELECT * 
FROM products
ORDER BY price DESC 
LIMIT 4
)
EXCEPT
(
SELECT * 
FROM products
ORDER BY price/weight 
LIMIT 4
)
```
## Sub-Queries

We're combining one queries result to the query of another

```sql
SELECT name, price
FROM products
WHERE price > (
		SELECT MAX(price)
		FROM products
		WHERE department = 'toys'
);
```

Different queries have different data structures

Some queries return vectors, 2D and 3D and some will return scalars like a single value 

### **Select sub queries**

These must only be single scalar values. We can have any type of sub query as long as it returns some single value.

```sql
SELECT name, price (
	SELECT MAX(price) FROM products WHERE id = 3
)AS id_price
FROM products
WHERE price > 555
```

### FROM sub queries

When you're using sub queries in FROM they must satisfy a couple of cases

1. It must be compatible with the rest of the query
    - You can ask for * all, of a single value return
    - You can ask for a col in a table so long as it exists
2. It must have some alias; AS x

```sql
SELECT name, price_weight_r
FROM (
	SELECT name, weight/price AS price_weight_r --This is the new table transform
	FROM products
)AS p --This is needed
WHERE price_weight_ratio > 4;
```

Example

```sql
SELECT AVG(p.order_count)
FROM (
	SELECT user_id, COUNT(*) AS order_count
	FROM orders
	GROUP BY user_id
)AS p
```

### **Join Sub Queries**

```sql
SELECT firstname 
FROM users
JOIN (
	SELECT user_id FROM orders WHERE product_id = 3
) AS o
ON o.users_id = users.id
```

### WHERE Sub Queries

```sql
SELECT id
FROM orders
WHERE product_id IN (
	SELECT id FROM products WHERE price/weight > 20
)
```

### WHERE Sub Query returns

- Single value returns
    
    >
    
    <
    
    ≥
    
    ≤
    
    =
    
    <> or ≠
    
- Single column returns
    - IN
    - NOT IN
    - > ALL/SOME/ANY
    - < ALL/SOME/ANY
    - ≥ ALL/SOME/ANY
    - ≤ ALL/SOME/ANY
    - <> ALL/SOME/ANY
    - = ALL/SOME/ANY

## Data types

### Numeric types

**Non decimal**

smallint: -32768 → 32767

integer: -2147483648→ 2147483648

bigint: 9223372036854775808 → 9223372036854775807

**iterate-able**

smallserial: 1→ 32767

serial: 1 → 2147483648

bigserial: 1 → 9223372036854775807

**Decimal**

decimal

numeric

real

doubleprecision

float

```sql
SELECT (2.0); --number is selected as numeric
SELECT (2); --selected as a int
SELECT (2.0::INTEGER) --what looks like a float converts to an int
```

### Character types.

CHAR(5) → some chars length will always be 5

VARCHAR → store any length of string

VARCHAR(40) → Store string of length 40

TEXT → store any length of string

### Boolean types

```sql
SELECT ('true':: BOOLEAN); -- converts to TRUE 
SELECT ('y':: BOOLEAN);
SELECT ('n':: BOOLEAN);--as false

SELECT ('null':: BOOLEAN); --as Null
```

### Times dates and timestamps

```sql
SELECT ('JUNE-4-2017'::DATE) --transform to date

```

**There is also time with or without time zone.** 

```sql
SELECT ('04:22'::TIME);--converts to a time. 
SELECT ('04:22.33 PM'::TIME);

--with timezone
SELECT ('04:22.33 PM GMT'::TIME WITH TIME ZONE);

--time stamp
SELECT (' NOV-11-2019 04:22.33 PM GMT'::TIMESTAMP WITH TIME ZONE);
```

### Intervals

```sql
SELECT ('1 Day 1 Hour' :: INTERVAL); --adds interval of one day one hour
--you can also do arithmetic with it

SELECT ('3 days'::INTERVAL) - ('1 days'::INTERVAL); --interval is now 2 days

```
{% /section %}