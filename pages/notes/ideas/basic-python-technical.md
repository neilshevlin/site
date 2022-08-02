---
title: Technical Notes
description: A list of technical notes on Python
---
    
{% section .hero %}
# Python Technical Notes

## Intro

```python
help(print)
#This will give you information about the function, if its from a standard library
```

**Non standard functions**

When you define a function you can include some infromation about what it does. 

```python
def someFunction(a, b, c):
"""Here is where you give the information about the function"""
var1 = abs(a-b)
var2 = abs(b-c)
return (var1*var2)
```

Functions are defined and must return something if you want a value back. 

**Optional arguments**

```python
print(a, b, c, sep='<')
#This will print the values separated by a < 
```

You can set up a default argument to be passed to a value

```python
def hello(who = "Neil"):
	print("Hello", who)

hello() #prints Hello Neil
hello(who="John") #prints Hello John etc
hello(who="Bill")
```

**Functions applied to functions**

```python
def funOne(x): 
	return 5*x

def funTwo(fn, arg):
	return fn(arg)

funTwo(funOne, 50)#This just calls funOne
```

Higher order functions

```python
def mod_5(x): 
	return x%5

print(
"Which number was biggest", 
max(100, 300, 201)
"Which is the biggest now"
max(100, 300, 201, key=mod_5)

#This will print 300 first
#Then it will print 201 as the modulus is higher

```
## Booleans & conditionals

```python
x= true
print(x)#prints true
print(type(x)) #prints <class 'bool'>
```

comparison operators

```python
a == b

a < b

a > b
```

Examples of conditionals in use

```python
def presAge(age)
	"""What it does"""
	return age >=35

print("Can a 19 be preZ",  presAge(19)) #prints False

print("Can a 40 be preZ",  presAge(40)) #prints True
```

**Else if**

```python
def eval(z): 
	if z==0: 
		print("0")
	elif z > 1:
		print("Yeet")
	else: 
		print("No")

eval(300)
```

Indentation is very important in python

All subsequent indented lines in python are have the effect of ebing in the semi colon of a language like JS or Java

**Conversions**

```python
print(Bool(20))#prints all values above 0 as True
print(Bool(0))#prints False

print(Bool("")) #prints False -> This is a falsey or truthy value
```

You can also use non boolean values in a expressin

```python
if 0: 
	print("False")
if 1: 
	print ("True")

```
## Loops and lists

You can make simple lists, which are like arrays

```python
planets = ['mercury', 'venus', 'earth', 'mars']

for key in planets: 
	print(key)#you can easily loop over the lists

```

You can also loop through the chars in a string

```python
s = "Thisisasetofstrings"

for char in s:
	if char.isupper():
		print(char, end ="")
```

You can use ranges

```python
for i in range(6): 
	print (i)
```

While loops can also be a good way to loop

```python
n= 10
i= 0
while i<n: 
	print(i)

```

### **List comprehensions**

```python
#get the length of some list
length = len(my_list)
#some int value of the length
```

```python
myList = [n**2 for i in range(n)]
#this applies the n*2 operator to each looped value and adds to a list
```

can also have while

```python
planets  = [planet for planet in planets if len(planet) > 6]
#This adds to a list where values are greater than 6
```

You could then combine that with some transformation

```python
planets = [planet.toupper() + " : 0" for planet in planets if len(planet) > 6]
#['VENUS : 0', 'EARTH : 0', 'MARS : 0']
```

Left hand expression doesnt have to be related

```python
num = [32 for i in range(3)]
#[32, 32, 32, 32]
```

You can get impressive and short ways to get a line of code done

```python
def count_negs(nums): 
	return len([num for n in nums if num > 0])
```

or even better in terms of succinctness

```python
def count_negs(nums): 
	return sum([num < 0 for num in nums])
# every value evaluetes to true or false
#true + true+true = 3
```

You can also decompose things and have multiple for

```python
out = [[a,b,c] for a in range(x) for b in range(x) for c in range(x) if a+b+c != 0]
```
## Strings and dictionaries

You can evaluate strings

```python
s1 = "Hello"
s2 = "Hello"

if s1 == s2: 
	etc 
```

quotes can be used in a string by double quotes or by the use of a backslash 

You can also  use \n for new lines

Print autonmatically adds a new line at the end of each string unless we specify it not to. 

```python
print("hello" end=" ")
#this will just put a space there
```

You can grab the char index of a steing as normal

You can also do something called slicin

```python
string = "Hello"
string[-3:]
#grabs llo
```

We can loop over the char in an array

```python
output = [ char+"!" for i in string]
# A list comprehension of chars

```

**Strings a immutable and we cant redefine them.** 

There are several sstring methods

```python
string = "Hello World"

string.upper() #to upper
string.lower()#to lower
string.index('yeet')#gets the index of substring
string.startswith('a')#checks start returns true or false
string.endswith('b')
string.split()
string.join()

string+string #concacts
string.format()# get your string back in to its format

```

### Dictionaries

A special data type in python to match strings with some key value pair

```python
numbers = { 'one':1, 'two': 2}

#we can the get access to it
numbers['one']
#return 1

```

We can also add to the dictionary with this same syntax

```python
numbers['eleven'] = 11
#or change a key value pair
numbers['one'] = 27273

```

There are also some nice ways to evaluate things in a dictionary

```python
out = {planet: planet[0] for i in planets}
```

create a dictionary from some type of list

```python
'Saturn' in planets
#evaluates to some true or false statement
```

```python
for k in planets: 
	print("{}={}".format(k, numbers[k])
#one = Pluto
#two = 2
#three = 3
#eleven = 11
```
## External libraries

There are lots of different functions etc in vanilla Python

However imports are a nice way to access other external libraries 

```python
import math
print(type(math))
```

You can get access to all the different  functions in the module by using dir

```python
print(dir(math))
```

```python
out = math.log(45, 32)

```

You can call help on a module to find the docs

```python
help(math)
```

import as

```python
impot math as mt
mt.log(23,4)
```

We can just refer to the values inside the module by themselves

```python
import math as *
print(pi)
```

however you should avoid this as their may be conflicts between different modules

To get around some of these conflicts we can only import some of the functions from the modules

```python
from numpy import log
```

### submodules

when we're importing from a module, it may have more and more submodules

We have to access this like its an object of sorts

```python
import numpy as num

print(dir(numpy.random.randint))
```

### **Working with types**

You get some info on the modules you're using 

```python
type(numpy)

dir(numpy)

help(numpy.random.randint)
```
{% /section %}
    