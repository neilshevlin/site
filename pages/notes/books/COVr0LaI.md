---
title: Designing Data-Intensive Applications
description: Notes on the book Designing Data-Intensive Applications by Martin Kleppmann
---

{% section .hero %}
# Designing Data-Intensive Applications by Martin Kleppmann

## Some General notes

### Reliability

---

The system should continue to work correctly even in the face of adversity. 

When we design some application we define it as being reliable when it can stand up to the user not using it correctly.  

No system can be truly fault tolerant, so it is usually understood to be *resilent*

There are many ways that faults can introduce themselves and the more faults that a system accounts for, the more resilent and thus better built it is. 

**Hardware faults**

---

These are faults in the hardware that runs the software and the application

The Mean time to Failure(MTTF) of a hardrive might be 10-50 years. So in a server with 10,000 hardrives you can expect one to fail very often.

The way that hardware fails is often more predictable than other forms of hardware. 

This is when we start to add redudancy to a system. Setting disks up in RAID, adding diesel generators to the server room. 

These approaches can't really ever prevent proper hardware failure, but they can prevent a large amount of failure by building systems around them.

Multi Machine redundancy is now becoming more and more neccesary

You may need to avoid any and all down time

Some data systems now need to be able to handle whole machine failure. 

Companies such as AWS have now started to move toward software fault tolerance on top of all the other hardware redudancy allowed. 

**Software**

---

Faults in software can be much more damaging than faults in hardware. 

Software faults are much more unpredicatble, we dont know when, where or how they might come. 

One bug, might cause a whole heap of servers to hang over some minor inpit that it wasnt expecting. It's effect can be much more damaging than even many hardware failures. 

A service that the system depends on may break

Cascading failures may bring a whole system downm triggering more and more faults. 

Bugs like this can lie dormant for a long time. 

There are no quick solutions but some things can include

- Thourough testing
- process isolation
- allowing crashes and restarts
- meausuring
- monitoring

**Human error**

---

Humans can often make really bad mistakes when doing something

One study had shown that 75-90% of faults in a system are human caused. 

We must design our system to work with humans in unreliable circumstances. 

This means 

- developing API's that encourage doing the right thing and discourage doing the wrong thing
- Not restricting the use of API's so much that users find ways around using it correctly to suit their own needs.
- DEcoupling the places where people make most amount of mistakes, from the rest of the system
- Thorough testing throughout all the areas of the sytem
- Manual testing, unit testing and automated testing.
- Quick and easy recovery from human errors.
- Gradual code updates
- Detailed and clear monitoring
- Telemetry for the entire system

### Scalability

---

**Describing load**

Load can be described with a few number that are called load parameters. 

What you define as load parameters depends on the system. 

Twitter had two ways that it delivered tweets

1. Deliver the updated tweets in to a cache in the users local machine → Adding a new tweet was less costly
2. They fan out their tweets to different users. So that you balance the number of rights with the number of reads to the local system

The key load param for twitter is something like the distribution of followers per user weighted for how often the user tweets. 

Twitter now has a hybrid model for twitter tweet distribution. They do a fanning out of the tweets from you usual followers, but for famous people, their tweets are addes first in to your local cache

**Describing performance**

You can look at the load params in two ways

1. Looking at the system when all resources are kept constant
2. Looking at the load params and judging how much you need to scale the resources to cope with the increase in load so that performance is unchanged. 

We could look at processing in terms of throughput → how many records can we process in a second or we  can look at it in terms of response time → how quickly can we get the right response back to the client. 

Latency vs response time

Response time is the amount of time that the user is waiting for a response which includes queuing, network delays etc. 

Latency is just the amount of time that request is waiting idle and waiting to be handled

There are usually outliers in the repsonses. Responses that take far longer than the mean response time. These may have numerous different causes. 

Mean is not usually used in the context of responses. 

Percentiles, like 50%, 95% and 99.9% are used. 

You might have a performance which states that 99.9% of users will have a response in 1.5 seconds. 

The greater your percentage, the more difficult it is to get a consistant response time. Some time it's just never worth it. 

Amazon would lose 1% in sales for every 100ms in downtime

Customers who experienced a 1 second slowdown, had a 16% worse expereince of the site. 

These are usually included in Service License Agreements(SLA) and Service License Obejectives(SLO)0> state that the service must be in some threshhold of percentiles. Or they get their money back

You can develp some types of testing in order to be able simulate the response to load, but you have to keeep it as acurate as possible. 

**Percentiles in practice**

Even when called in parallel, the slowest request is your bottleneck

Even if just a small percentage of req are slow, if the use is making multiple calls you can have this slow req handling compound on itself which is known as **tail latency amplification**

Response time percentiles can be calculated on your dashboards on an ongoing basis. You calculate the median and percentiles every minute or so. 

You can implement a naive solution, which is just  a list of all res times and sort. But you can also use other algorithms such as 

forward decay

t-digest

HdrHistogram

Best way to aggregat respinse time is to add the histograms

**Approaches for Coping with load**

Architecture may be apropriate on one level and not on another. 

Shared nothing architecture is the distribution of load across multiple machines

You can use a few big expensive machines, or lots of little inexpensive ones. 

The pragmatic solution is to use a combo of both. 

You can have a system that is elastic, in that it will assign extra computing power automatically when need. This is often used when a load is often very unpredictable. 

There once was a dichotomy between stateless and stateful systems. 

Now the range of tools for distributed data systems are getting better and better

There is no generic, one size fits all system. 

Scalable architectures are usually built from general-purpose building blocks, arranged in familiarpatterns.

### Maintainability

The majority of coding that is done my software engineers, is maintenance. Things such as

- Fixing other peoples errors
- keeping things operational
- Modifying the code for new use cases

We deal with this in three ways

1. Operability→ teams can work together
2. Simplicity → Easy few new people to understand
3. Evolvability → Easy for engineers to make changes 

**Operatibility**

Some operation can and should be automated → Still up to humans to automate

This is generaly things that ensure the smooth running of the software. Looking at bugs, tracking down problems, preserving knowledge of the system as people come and go, having good documentation etc

**Simplicity**

Software is often very simple and elegant in its early days, but that can grow unmanageable in larger companies. 

complex software is more difficult to use, more expensive and more likely to produce bugs

Good levels of abstraction can be a great tool for dealing with complexity

Python is a good example of abstraction of machine code

**Evolvability**

Being able to make change easy

System requirments will change very often

Things such as AGILE and test driven development are all useful tools for prodcuing software in uncertain circumstances
