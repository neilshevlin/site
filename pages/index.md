---
title: Index Page
description: The entry page for the site
---

{% section .hero %}

# Welcome to another assortment of symbols.
*The purpose of this site is in a state of flux. While there are good reasons to have a personal site on the internet, I have no definite and singular reason for making this site. As such the contents and structure of this site will likely change somewhat over time. That being said, It's my intention as the site's author to respect some general principles in the design of a webpage that were put forward by early internet pioneers. Some of these principles include a general continuity and consistency of internet sites over time. Where a URI will exist across time. As this site at this url has had different iterations over time, it is a goal of mine to keep some consistency across time. In a more abstract sense, the site should show some continuity across internet culture. That is it will take inspiration from several other internet pioneers. More of this is explained in [site philosophy](meta/site-philosophy)*

## Software used to create this site
While perhaps not a wise decision in the long term, this site is built with [React]("https://reactjs.org/") and [Next.js](https://nextjs.org/). The site also makes use of markdown and specifically [Markdoc](https://markdoc.org/). I typically use [Notion](https://www.notion.so) or [Obsidian](https://obsidian.md/) to write my notes. The advantage of this method is that both allow exports to markdown. I have a script to push these markdown files notion/obsidian to the git repository and then push them to my [Gitlab](https://gitlab.com/) account. Here they run through a quick pipeline to deploy and then to the live site.
 
I believe this approach is optimal. Markdown as a text standard has stood the test of time and is very feature rich. In the event that I have to or wish to change the site, I will be left with markdown files that can be parsed into whatever new format is required.
 
Here is an example of a markdown file I may write and the content it produces:
{% side-by-side %}


```js
{
    "title": "Contact",
}
```
{% /side-by-side %}
## Site philosophy
There's a blend of a few things here and I'll try to connect each part of the site up to form a coherent philosophy of a website.
 
### Drafts
In the drafts section you'll find some ideas that are taking shape, but that are incomplete. These are typically interests that I've taken at some point in time for whatever reason. They will have different levels of depth or exploration. In essence they are proto essays. The reason for proto essaying in this way is to show the progression of thought. This is visible through the commit history of the site which is open source and available [here](https://gitlab.com). Drafts are also separate from index notes but they are often composed and will reference index notes.
 
### Essays
More obvious and familiar of an idea. These are ideas that I believe have sufficient rigour to be taken at least semi seriously.

### Index Notes
Index cards are a system of record when reading, learning, or writing about some topic. As they are on this site, it is heavily influenced by the note taking system as shown in [How to write a thesis](https://example.com) By Umberto Eco. I've decided to try and mould the original idea of the index card in Eco's mind, into something fitting with a broader philosophy of the internet, epistemology and the sites philosophy. "Remember that an index card file is an investment that you make during your thesis, but if you intend to keep studying, it will pay off years—and sometimes decades—later." - Eco. In my opinion there is a societal jump to universality through the open access to notes. I will use my notes for my own research and thinking. But they should, in keeping with the early pioneers of the internet, be open, accessible, and available throughout time.

### Contact
How to contact me. 

### Influences
This is a take on a simple about page. It is a collection of things which I believe have influenced me. Here there are the things that influence me, and how they influence me. My thinking here is that a person is heavily influenced by many things over the duration of their life. These things impact how they think, what they do, and who they are. I am not sure whether they are everything that we are. I'm hoping that this section will help you get an understanding of me, and hopefully why I think the way I think or do the things I do. 

{% /section %}