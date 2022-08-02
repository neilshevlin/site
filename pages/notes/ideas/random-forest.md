---
title: Random Forest
description: Notes on Random Forests
---

{% section .hero %}

# Random Forest
This is like a layered system of decison trees.

We take the average of many different predictions of decision trees. 

So we might make a decision tree, and repeat over the decision tree several times

In order to make the model worthwhile the sample training data in each repitition of the decision tree must be uncorrelated

We achieve uncorrelation by 

- Bootstrap aggregating → selecting completely random sets from the overall sample
- Random feature selection → allowing for greater feature selection by allowing the model to only choose some features

The Output which all the uncorrelated decision trees point to, is the output of the random forest

{% /section %}