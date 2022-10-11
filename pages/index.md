---
title: Index Page
description: The entry page for the site
---

{% section .hero %}

# Welcome to another assortment of symbols.
*The purpose of this site is in a state of flux. While there are good reasons to have a personal site on the internet, I have no definite and singular reason for making this site. As such the contents and structure of this site will likely change somewhat over time. That being said, It's my intention as the site's author to respect some general principles in the design of a webpage that were put forward by early internet pioneers. Some of these principles include a general continuity and consistency of internet sites over time. Where a URI will exist across time. As this site at this url has had different iterations over time, it is a goal of mine to keep some consistency across time. In a more abstract sense, the site should show some continuity across internet culture. That is it will take inspiration from several other internet pioneers.*
## Site Contents
The division of this site is a work in progress. Notes that I take on books, papers or technical topics will be uploaded here. These are just my understanding of something and they act as a place of storage. Ideas are notes too. However they are much looser in form. They might ramble a lot more and reference multiple different sources. My hope is that I can use the system of idea notes as a replacement for a blog. More thorough writings in the future might reference these idea notes + book and paper notes. Writings will be seperate from notes.

[Book Notes](/notes/books){%  .h3  %}

The book notes page follows the follwing system: 
- There is a list of books that I've read.
- Each book has one or more idea tags associated with it.
- Some books link to a page with more in depth notes on the book.
- Some of the linked ideas have a page with more in depth notes on the idea.
- There is a list of all the idea tags of the books.

I adapted the note taking system in [How to write a thesis](/notes/books/COUlEuCc) to suit the internet.
> "Remember that an index card file is an investment that you make during your thesis, but if you intend to keep studying, it will pay off years—and sometimes decades—later." - Eco

My intention is to use my notes on books at dates in the future, but also for others to look at or use as they please.

[Idea Notes](/notes/ideas){%  .h3  %}

Notes that I've written that don't reference a specific book, and instead focus in on a topic are referenced here. My working theory for this section is to treat idea notes like a mixture of notes that you would encounter in a book, a blog, and random ideas that might pop in to my head at some point. The notes might be chaotic in some fashion, and more like technical documentation in other parts. I'll try to figure out a better system of organisation if it helps me or others.

[Papers](/notes/papers){%  .h3  %}
Notes on papers, technical or otherwise. These could be papers on AI or neuroscience. Again, it serves the purpose of centralisation and documentation of things that I've read. Hopefully it gives me help in the future and can be referenced by some of the idea notes or something longer form.

[Other Miscellaneous Readings ](/notes/other){%  .h3  %}
Links and articles that I might come across. Might be useful at some further date. This to me is a decent way of keeping track of things I've read. Plus it gets links in to a place where others can explore if they come across anything.
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