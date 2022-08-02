---
title: Model Fitness
description: Notes on model fitness
---

{% section .hero %}

# Model Fitness
When you make a model with a decision tree regressor you're specifying the depth that you want to go in the tree.

The layer of depth will reduce the size of each leaf node in the tree. 

You can get to the point that you're just fitting the data more closely to what you already have in each leaf. 

If you make so many branches you'll eventually get to the point that each leaf has just 1 value and then it fits the data perfectly, but isnt going to work for data that's outside

This causes either underfitting or overfitting

We measure underfitting and overfitting with the mean absolute error.

The max_leaf_nodes is a good way to measure overfitting in a model. 

```python
from sklearn.metrics import mean_absolute_error
from sklearn.tree import DecisionTreeRegressor

def get_mae(max_leaf_nodes, train_X, val_X, train_y, val_y):

		    model = DecisionTreeRegressor(max_leaf_nodes=max_leaf_nodes,random_state=0)
		    model.fit(train_X, train_y)
		    preds_val = model.predict(val_X)
		    mae = mean_absolute_error(val_y, preds_val)

	 return(mae)
```

```python

for max_leaf_nodes in [5, 50, 500, 5000]:

    my_mae = get_mae(max_leaf_nodes, train_X, val_X, train_y, val_y)

    print("Max leaf nodes: %d  \t\t Mean Absolute Error:  %d" %(max_leaf_nodes, my_mae))
```

Example of how to get the minimum Mean absolute error

```python
leaflist = [1,2,3,4]

scores = {leaf_size: get_mae(leaf_size, train_X, val_X train_y, val_y) for leaf_size in leaflist}

best_tree_size = min(scores, key=scores.get)
```

{% /section %}