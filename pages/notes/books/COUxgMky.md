---
title: Pattern Classification
description: Notes on the book Pattern Classification by Richard O.Duda
---

{% section .hero %}
# Pattern Classification by Richard O.Duda
## Pattern recognition systems
### Feature extraction
**What are invariant features?** These are features that we can select that are not subject to change in many ways. No matter how we look at them they are the same. Where an object is in an image shouldn't matter to much. 

**How ought we to treat translation and rotation?** This is the idea that we can still get the same features regardless of whether or not they image or object is rotated or moved in some direction. eg it shouldn't matter how a cup is rotated around an axis.

**How ought we to treat scale?** Whether or not something is big or small might not have any effect on what it is. Whether the fish is big or small doesn't change the fact that it's a fish

**What is occlusion?** Occlusion is when some element of an object can be hidden by how you look at it. The handle of a mug can be hidden depending on your viewpoint. Something can be in the way.

**What is projective distortion?** Depending on how close or far you are from the object it may distort what we think something is. If you take a really up close picture how do you know what it is?

**What is rate in the context of feature extraction?**This is where the speed with an object moves or some system is moving can distort how we understand it. Speaking is a great example where you can speak very quickly between words and slowly on others, so are the elements different when spoken quickly etc. 

**What is deformation?** Some object, while still being the same object might move and bend in some way that deforms itself. So it becomes difficult to know what it is. A hand may take many shapes depending on what it is holding. 

**What is feature selection?** This is generally a domain specific problem. You need to look at the features of music or of art and then make informed decisions on what the most appropriate features.

### Classification
- You can have noise in the system which makes classify what the image is difficult.
- Essentially noise is any thing that disturbs our model due to some randomness in the world.
- The job of a good clasifier is to make the best guess at what something likley is.
- It must be able to cope with randomness.
- Occlusion might mean that we don't get a value on some pre-selected feature. We still need to be able to get a look at what it thinks the object is.
- The naive thing is to assume zero or average values.

### Pre-processing
- What is the goal of a pre-processor? The system generally doesn't exist by itself and the p.p takes some action. It makes a decision on the information give to classify or make some action.
- What is the error rate? The error rate is the % of decisions that the pre-processor gets wrong. How many times it put's it in to the wrong basket or makes the wrong call.
- What is pre processing risk? Risk is about weighing up certain errors in the decision making process. A wrong call may be more costly in some contexts and not in others. So the pre-processor may have to weigh all of that up before making a decision
- How can context be important in pre-processing. Depending on where something happens or how it happened, it may change the context of the meaning. the words 'jeetyet' may have no meaning, but when said it has the meaning of 'did you eat yet'
- How can we use multiple pre-processors. You can use multiple processors to make decisions on many different features or issues. Each of which might use many classifiers. You might have a super processor which might have to weigh up a minority opinion more strongly than a majority opposite opinion.

## The design cycle
**What is the rough progression of the design cycle?** It is to move from data collection → feature selection → model selection → clasifier training → evaluation of classifier

**What is data collection?** This is getting the actual information to operate on. It can be a small example set n which to get some information or it can be some larger data set that is more robust. 

**What is feature selection?** We look for the features that will help our classifier distinguish. This can be an iterative process. As we don't yet know whether our classifier will be able to do a good job with the features selected. When selecting feature we want to select ones that are as robust as possible. Invariant to change, transformation noise etc. 

**What is model choice?** Again we don't know what model will work best. It may be tedious if we have to keep changing the model every-time we want to try and examine the system. Would make more sense to be able to have the model selection change under evaluation. So we can jettison a model if needed. 

**What is the role of training?** Training is where we feed the data in to the classifier with selected features. The most effective ways of doing this is giving the classifier some way of learning from some pattern.

**What is evaluation?** This is where we make a choice to either accept the model of go back to where the problem is occurring and try to fix it . We want to make sue that our model is simple enough to deal with robust types of data, but complex enough to reduce the error in what were doing. This means that we have to avoid overfitting the model. 

What is computational complexity? If given some image, we could make sure that all the possible combinations are covered. However even for a 20x20 binary pixel image we owould be dealing with 10^120 different combinations. It becomes impractical to be able to classify these manually.

