---
title: Book Notes
description: Notes on books
---

{% section .hero %}
# Book Notes
There seems to be varying ability across the population in their ability to utilise books as a tool for learning or enjoyment. Some people can read books especially fast and retain massive amounts of information. So in this mentioned case, the amounts of books a person has read and the legitimacy of their claim to understanding is high. The trait of reading fast does not always mean that a person will have *completed* the books that they read. Nor does a person who reads fast retain lots of information. There may also be slow readers, who retain large amounts of information, and lastly, the less interesting concept of a person reading slow and understanding little. 

Some notes on books that I've read. I've these books with varying degrees of speed, information retention and enjoyment. The notes on books will be marked with some information about my interaction with the book.

## Book notes tags
{% code %}Incomplete{% /code %} - I haven't finished the book.

{% code %}Complete{% /code %} - I have finished the book.

{% code %}Quick read{% /code %} - I read this quickly.

{% code %}Focused read{% /code %} - I read the book with a decent degree of focus. Might have been taking notes as I read.

{% code %}High Retention{% /code %} - I remember a lot of this book. It's content has permeated some of my thinking.

{% code %}Low Retention{% /code %} - I don't remember much of this book. It doesnt really have an effect on the way I think.

{% code %}Reviewed{% /code %} - I have commited to reviewing the book in a deeper way. I have tried to understand, and then write my understanding of the book.

{% code %}Audio version{% /code %} - I listened to the book in it's audio version.

## Book List

[How to write a thesis - Umberto Eco](/notes/books/COUlEuCc){% .h2 %}

{% code %}Complete{% /code %} {% code %}Focused Read{% /code %} {% code %}High Retention{% /code %}

[Designing Data-Intensive Applications - Martin Kleppmann](/notes/books/COVr0LaI){% .h2 %}

{% code %}Complete{% /code %} {% code %}Focused Read{% /code %} {% code %}High Retention{% /code %}

[Pattern Classification - Richard O.Duda](/notes/books/COUxgMky){% .h2 %}

{% code %}Incomplete{% /code %} {% code %}Focused Read{% /code %} {% code %}Low Retention{% /code %}

[Thinking fast and slow - Daniel Kahneman](/notes/books/COUrvAYv){% .h2 %}

{% code %}Incomplete{% /code %} {% code %}Focused Read{% /code %} {% code %}High Retention{% /code %}

[Introduction to mineral exploration - Charles J Moon](/notes/books/COVpLVtX){% .h2 %}

{% code %}Incomplete{% /code %} {% code %}Focused Read{% /code %} {% code %}High Retention{% /code %}

[Crime and Punishment - Fyodor Dostoyevsky](/notes/books/COWMBzBJ){% .h2 %}

{% code %}Incomplete{% /code %} {% code %}Audio Version{% /code %} {% code %}Low Retention{% /code %}

[The Way - Jose Maria Escriva](/notes/books/COVNF7YE){% .h2 %}

{% code %}Complete{% /code %} {% code %}Focused Read{% /code %} {% code %}High Retention{% /code %}

[The remains of the day - Kazuo Ishiguro](/notes/books/COWDMYSW){% .h2 %}

{% code %}Complete{% /code %} {% code %}Focused Read{% /code %} {% code %}Medium Retention{% /code %}

[A commonwealth of thieves - Thomas Keneally](/notes/books/COUsZ4Re){% .h2 %}

{% code %}Incomplete{% /code %} {% code %}Audio Version{% /code %} {% code %}High Retention{% /code %}

[Surely You're Joking, Mr. Feynman! - Richard Feynman](/notes/books/COUs2gdQ){% .h2 %}

{% code %}Complete{% /code %} {% code %}Focused Read{% /code %} {% code %}Audio Version{% /code %} {% code %}High Retention{% /code %}

[Carrying the Fire: An Astronaut's Journeys - Michael Collins](/notes/books/COUrwAYg){% .h2 %}

{% code %}Complete{% /code %} {% code %}Focused Read{% /code %} {% code %}Audio Version{% /code %} {% code %}High Retention{% /code %}

## A note on book note URL's
The URL for each book note contained here is a base64 encoded url. They are a smaller, base64 representation of the integer(base 10) ISBN 13 number that all books have. As URL's should try their best to be constant and unchanging, and because using the ISBN or the book title was unapealling, I transfered the ISBN to the base 64 numerical system. This gives shorter a slighlty more pleasant url's compared to a ISBN in base 10 or just the title of the book. 

The encoding was done as follows.
```python
import base64

def b64_isbn(isbn):
    num_bytes = isbn.to_bytes(6, byteorder = 'big')
    b64_bytes = base64.b64encode(num_bytes)
    b64_isbn = b64_bytes.decode('ascii')
    return b64_isbn
b64_isbn(9780385514590)
```
{% /section %}

