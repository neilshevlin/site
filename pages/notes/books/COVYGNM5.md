---
title: Numerical methods for engineers and scientists - Amos Gilat
description: Notes on the book Numerical methods for engineers and scientists by Amos Gilat
---

{% section .hero %}
# Numerical methods for engineers and scientists
## Introduction
Numbers can be represented in different power systems.

Binary numbers are often used in computers.

This is when numbers are expressed in terms of powers of twos.

You can also represent numbers in a base 2 floating point system.
```jsx
1. divide the number by the largest base 2 power
	45/2^5 = 45/32
2. That number is multiplied by the number of the power
	45/32 = 1.40625 * 2^5
```

When numbers are bing stored in computers there is a different standard for their storage.
The number is stored in memory as single precision or double precision 32 bit vs 64 bit

Both types of precision use a sign, an exponent and a mantissa

There is a bias in the exponent

The mantissa uses the floating point representation

There are then a maximum size to certain types of numbers because of the limits of the size of numbers. Because the exponent and the mantissa can only be so big or small 

Because numbers can be infinite and the storage of numbers is finte there are errors in our representation of the numbers

Round off errors occur when we have to cut off a very long number in order to compensate for size. 

We can either chop off or round the number

You have to be careful when you're doing operations on numbers that are very close to each other or very far apart from each other. 

Truncation errors can occur when we have infinites and we have to shorten everything down to fit it and get an accurate idea understanding of the number

The total error is the true solution - the numerical solution

{% latex %}$TrueErr = TrueSolution - NumSolution${% /latex %}

The true relative error is the ratio between the true error and the true solution

{% latex %}$TrueRel = TrueErr/TrueSolution${% /latex %}
## Mathematical background

The book includes a summary of concepts that are needed as a mathematical background for the numerical methods. 

An **independent variable** of a function is the {% latex %}x in $f(x)${% /latex %}

The **dependent variable** in a function is y in a {% latex %}$y = f(x)${% /latex %}

The **domain** is set of values the independent can belong to

The **range** is the set of values that the dependent variable can belong to

A **closed interval** is of the type {% latex %}$a < x < b${% /latex %} and denoted with **[square brackets]**

A **open interval** is of the type {% latex %}$a≤x≤b${% /latex %} and denoted with **(parentheses)**

If the limit of a function exists, then it’s limit is **unique**

Continuous functions in some domain, are the ones where there are **no jumps** 

A continuous function to infinity in the domain is called **everywhere continuous**
{% /section %}