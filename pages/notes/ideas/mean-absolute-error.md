---
title: Mean Absolute Error
description: Some notes on mean absolute error
---

{% section .hero %}

# Mean Absolute Error
We need to check that the model that we have actuallu works on new data

We get a metric to describe this called Mean Absolute Error (MAE) which just the actual value  - predicted. 

This is a module in sklearn

```python
from sklearn.metrics import mean_absolute_error

predicted_home_prices = model.predict(X)
mean_absolute_error(y, predicted_home_prices)
```

However This method above is completely wrong as it uses the training data in the prediction. 

This is known as a **'in-sample' score]**

This is when you use a sample for training and evaluating

We can better evaluate our data by splitting it between test and validation data. 

We do this by excluding data from the model build

```python
from sklearn.model_selection import train_test_split

train_X, val_X, train_y, val_y = train_test_split(X, y, random_state=0)

model= DecisionTreeRegressor()

model.fit(train_X, train_y)

val_predict = model.predict(val_X)

print(mean_absolute_error(val_y, val_predict))
```

At this point the model would be fully ready for the data. 

```python
final_model = DecisionTreeRegressor(max_leaf_nodes = best_tree_size, random_state = 0)

final_model.fit(X, y)
```

{% /section %}
