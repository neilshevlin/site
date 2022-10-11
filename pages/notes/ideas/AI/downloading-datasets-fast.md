---
title: Downsloading datasets with fast ai
description: some notes on downloading datasets with fast ai
---

{% section .hero %}
# Downloading datasets with fast ai
Creation of a Dataloaders object

```python
bears = DataBlock(
    blocks=(ImageBlock, CategoryBlock), 
    get_items=get_image_files, 
    splitter=RandomSplitter(valid_pct=0.2, seed=42),
    get_y=parent_label,
    item_tfms=Resize(128))
```

```python
blocks=(ImageBlock, CategoryBlock)
```

```python
get_items=get_image_files
```

```python
splitter=RandomSplitter(valid_pct=0.2, seed=42),
```

```python
get_y=parent_label
```

```python
item_tfms=Resize(128))
```

The above is a simple item transformation on the images to resize them to 128x122 pixels. 

The model is not fed a singular image at a time, but tehy are batched together in an array(knowns as a **tensor**) 

```python
dls = bears.dataloaders(path)
```

```python
dls.valid.show_batch(max_n=4, nrows=1)
```

### Methods for resizing

```python
bears = bears.new(item_tfms=Resize(128, ResizeMethod.Squish))
```

```python
bears = bears.new(item_tfms=Resize(128, ResizeMethod.Pad, pad_mode='zeros'))
```

### Dealing with images of different sizes

Instead of squishing images down or creating wasted space for computation you can instead randomly select an area of the image and crop to that part. 

Different features will be highlighted because of this. 

```python
bears = bears.new(item_tfms=RandomResizedCrop(128, min_scale=0.3))
dls.train.show_batch(max_n=4, nrows=1, unique=True)
```

### Data augmenentation

Data augmentation is almost like creating a more robust model by stressing it. You augment your images in order to improve their ability to pick out the correct features and not find workarounds.

Some examples include

- Rotation
- Flipping
- Perspective warping
- Brightness changes
- Contrast Changes

```python
bears = bears.new(item_tfms=Resize(128), batch_tfms=aug_transforms(mult=2))
dls.train.show_batch(max_n=4, nrows=1, unique=True)
```

### Fuller code example

```python
bears = bears.new(
    item_tfms=RandomResizedCrop(224, min_scale=0.5),
    batch_tfms=aug_transforms())
dls = bears.dataloaders(path)

learn = vision_learner(dls, resnet18, metrics=error_rate)
learn.fine_tune(4)
```

This will now train the model to attempt to categorize grizzly bears, black bears and teddy bears.

### Interpretation

After you have trained the model and gotten it to clasify the images you can have a look at how it is doing. We can get a look at what it is doing when predicting and then infer something about hwo it works from the results. 

```python
interp = ClassificationInterpretation.from_learner(learn)
interp.plot_confusion_matrix()
```

You can look at where the greatest amount of loss is occuring.

```python
interp.plot_top_losses(5, nrows=1)
```

### Cleaning up your data set

After looking at the data with highest loss, you might then realise that some of the images are corrupt or need to be re-labelled. Fastai has additional tools to help in this process. 

```python
cleaner = ImageClassifierCleaner(learn)
cleaner
```


When we ‘delete’ these images we are just apssing them to anothe array. So we have to actually delete them. 

```python
for idx in cleaner.delete(): cleaner.fns[idx].unlink()
```

Or move them to a different category or label.

```python
for idx,cat in cleaner.change(): shutil.move(str(cleaner.fns[idx]), path/cat)
```

{% /section %}