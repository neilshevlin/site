---
title: Index Page
description: The entry page for the site
---

{% section .hero %}

# Welcome to another assortment of symbols.
*The purpose of this site is in a state of flux. While there are good reasons to have a personal site on the internet, I have no definite and singular reason for making this site. As such the contents and structure of this site will likely change somewhat over time. That being said, It's my intention as the site's author to respect some general principles in the design of a webpage that were put forward by early internet pioneers. Some of these principles include a general continuity and consistency of internet sites over time. Where a URI will exist across time. As this site at this url has had different iterations over time, it is a goal of mine to keep some consistency across time. In a more abstract sense, the site should show some continuity across internet culture. That is it will take inspiration from several other internet pioneers.*
## Site Contents
Below is a collection of some of the subsections of this site and the types of content that's available.
 
[Drafts](/drafts){%  .h3  %}

Drafts are things that range from an essay idea, to a nearly completed essay. Part of the process I take when writing is to start with an essay title, sub-title, a table of content and an introduction. Then as I continue research, expand ideas, and write more the essay takes shape. The introduction, table of contents and titles then ideally should change and evolve over the course of the essay. The drafts are seperate from index notes, but will often be comprised of them. Some examples are: 
- [Endocrine disruptors](drafts/endo-disruptors.md)
- [The spirit of accelerationism and the transhumanist ethic](drafts/transhumanist-ethic.md)
- [The point spread function](drafts/pointspread.md)
 
[Essays](/essays){%  .h3  %}

Drafts with a certain level of pollish.

[Index Notes](/notes){%  .h3  %}

I have a system like index cards derived from the one proposed by Umberto Eco in his book [How to write a thesis](/notes/books/COUlEuCc). The index card system is adapted to this site and the internet.
> "Remember that an index card file is an investment that you make during your thesis, but if you intend to keep studying, it will pay off years—and sometimes decades—later." - Eco

Notes are used for my own research and use. Hopefully will they be of some use to others aswell. Some examples:

- [How to write a thesis](/notes/books/COUlEuCc)


[Contact](/contact){%  .h3  %}

How to contact me. 

[Influences](/influences){%  .h3  %}

Some of the people, places and things that have influenced me and my thinking. Perhaps useful in understanding why I think the way I do.

## Software used to create this site
While perhaps not a wise decision in the long term, this site is built with [React]("https://reactjs.org/") and [Next.js](https://nextjs.org/). The site also makes use of markdown and specifically [Markdoc](https://markdoc.org/). I typically use [Notion](https://www.notion.so) or [Obsidian](https://obsidian.md/) to write my notes. The advantage of this method is that both allow exports to markdown. I have a script to push these markdown files notion/obsidian to the git repository and then push them to my [Gitlab](https://gitlab.com/) account. Here they run through a quick pipeline to deploy and then to the live site.
 
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