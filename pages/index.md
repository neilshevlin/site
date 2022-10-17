---
title: Index Page
description: The entry page for the site
---

{% section .hero %}

# Welcome to another assortment of symbols
*This site serves the purpose of marking my personal place on the internet. There are a few reasons for this site existing which can be [found here](/drafts/site-philosophy). The site should be a reflection of how I spend my time. Working with software, building applications, some science research, some philosophy research and other things I find interesting. My site in particular is an attempt at a public showcase of a notetaking system formalised by Umberto Eco in his book how to write a thesis. But it is a blog, research notes, book reviewing and other comments. It is an explicit point of this site to showcase some of the things I'm interested in. If other people are interested in these things, they are welcomed to reach out. So if you come across something you'd like to talk about, [contact me](/contact)*

{% side-by-side %}
{% item %}
[Book Notes](/notes/books){%  .h2  %}

- [How to write a thesis - Umberto Eco](/notes/books/COUlEuCc){%  .h3  %}
- [Theory and Reality - Peter Godfrey Smith](/notes/books/COUlEuCc){%  .h3  %}
- [Introduction to mineral exploration - Charles J Moon](notes/books/COVpLVtX){%  .h3  %}
- [The Open Society and Its Enemies - Karl Popper](notes/books/COUuMr1o){%  .h3  %}
{% /item %}
{% item %}
[Idea Notes](/notes/ideas){%  .h2  %}
- [Note taking rigour and editing](/notes/ideas/thesis-essay){%  .h3  %}
- [Russells defintion of Pure Math](/notes/ideas/pure-math){%  .h3  %}
- [Evangelisation in Opus Dei](/notes/ideas/opus-dei-evangelisation){%  .h3  %}

{% /item %}
{% /side-by-side %}

---
## Software used to create this site
While perhaps not a wise decision in the long term, this site is built with [React](https://reactjs.org) and [Next.js](https://nextjs.org/). The site also makes use of markdown and specifically [Markdoc](https://markdoc.io). I typically use [Notion](https://www.notion.so) or [Obsidian](https://obsidian.md/) to write my notes. The advantage of this method is that both allow exports to markdown. I have a script to push these markdown files notion/obsidian to the git repository and then push them to my [Gitlab](https://gitlab.com/) account. Here they run through a quick pipeline to deploy and then to the live site.
 
I believe this approach is optimal. Markdown as a text standard has stood the test of time and is very feature rich. In the event that I have to or wish to change the site, I will be left with markdown files that can be parsed into whatever new format is required.
 
Here is an example of a markdown file I may write and the content it produces:
{% side-by-side %}
{% markdoc-example %}
````
### A header
I hope that you are having a **pleasant** day.
Have you seen any of these items?
- Green
- Eggs
- Ham

```python
from hat import green, eggs, ham
```
````
{% /markdoc-example %}
### A header

I hope that you are having a **pleasant** day. Have you seen any of these items?
- Green
- Eggs
- Ham
```py
from hat import green, eggs, ham
```

{% /side-by-side %}

{% /section %}