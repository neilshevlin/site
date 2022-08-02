---
title: Decision Trees
description: Some notes on decision trees
---

{% section .hero %}
# Decision Trees
We do two things

1. Select a prediction target → What we're trying to predict
2. Select the features that are being used to get to the prediction target

We might also drop any rows missing values

```python
data = my_date.dropna(axis = 0)
```

### Prediction target

We store the prediction targets of the dataframe in to a data series

```python
y = data.price
```

### Feature selection

We then select some columns that we're going to use as our feeatures to predict

We can pick columns used to determine the target. But these might not always give the same results and we can compare our features. 

```python
features = ['rooms','bathrooom', 'acres', 'lattitude', 'longitude']
```

By convention we then store the features we're using in a var X 

```python
X = data[features]
```

### Building the model

scikit-learn is a typical model used for creating models

It has several different types of models

Building a model, typically has the following steps

- Define → the model type → Decision tree model?
- Fit → capture patterns from the data
- Predict
- Evaluate → look at how acurate the model is.

**Basic model** 

```python
from sklearn.tree import DecisionTreeRegressor

data = DecisionTreeRegressor(random_state=1)

data.fit(X, y)
```

Above we make the import in to python

We use the decision tree regressor

random_state is an int value given so that we always select the same training data. 

We then plug in our features and prediction target

We can then get a value for what our prediction target may be

```python
data.predict(X.head())
```

Will be in the form of a series

eg [1035000. 1465000. 1600000. 1876000. 1636000.]
{% /section %}