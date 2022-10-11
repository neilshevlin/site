---
title: Simple classifiers with fast ai
description: some notes on Simple classifiers with fast ai
---

{% section .hero %}
# Simple classifiers with fast ai
this is from the intro the book Deep learning for coders with fastai and pytorch

```python
from fastai.vision.all import * 
path = untar_data(URLs.PETS)/'images'

def is_cat(x): return x[0].isupper()
dls = ImageDataLoaders.from_name_func(
    path, get_image_files(path), valid_pct=0.2, seed=42,
    label_func=is_cat, item_tfms=Resize(224))

learn = vision_learner(dls, resnet34, metrics=error_rate)
learn.fine_tune(1)
```

This is doing several things here and will get your your trained model to run on an image. 

This specific model will be able to tell you whether you are looking at a cat or a dog in an image.

To run the model you start by picking some image

```python
uploader = widgets.FileUpload()
uploader
```

Run the model on an image.

```python
img = PILImage.create(uploader.data[0])
is_cat,_,probs = learn.predict(img)
print(f"Is this a cat?: {is_cat}.")
print(f"Probability it's a cat: {probs[1].item():.6f}")
```

The explanation of this in the books chapter is that there is a difference between a trained model and a training a model. The trained model can just be treated as a sequence of steps that have some known path, that must be executed to get the result. But training is the process of re-assigning the weights of the model so that you can get better results.

### Terminology

- the functional part of a model is often called it’s **architecture**
- Weights are also called **parameters**
- **Independent variables** are data forming predcitions that are not labelled.
- Results of the model are the **predictions**
- Measure of perfoamance is called the **loss**
- loss depends on predictions but also on the **labels**
- Labelled data are called the **targets** or the **dependent variables.**

### Explanation of the above code

```python
from fastai.vision.all import *
```

```python
path = untar_data(URLs.PETS)/'images'
```

```python
def is_cat(x): return x[0].isupper()
```

```python
dls = ImageDataLoaders.from_name_func(
    path, get_image_files(path), valid_pct=0.2, seed=42,
    label_func=is_cat, item_tfms=Resize(224))
```

The Above code is more detailed and so requires more explanation

- ImageDataLoaders is a class from fastai typically for vision datasets
- We specify that we are classifying the data from a named function which in this case is teh functin that we had just set, `is_cat(x)`
- pass in the path for the data sets and get the images
- We pass in an item transformation on teh image to resize the image to 224 px square img
- We use 80% of the data for training set and the other 20% for the validation set
- The seed is 42 which means for the validation set is always the same when we pick this seed.

The above code was, in essence a fine tuning of what we are looking for. Wehn using deep learning, we are going to use a process called transfer learning.

```python
learn = vision_learner(dls, resnet34, metrics=error_rate)
```

Here we do a process of transfer learning using a CNN where we specify the architecture to use.

`vision_learner` Will use a pretrained model resnet34 and the dls fine tuning for transfer learning

```python
learn.fine_tune(1)
```

This will use one epoch to get a random head layer to work with your data.

### Transfer learning

- We use an already trained model for some other purpose.
- We strip of the final layer of the model

{% /section %}
