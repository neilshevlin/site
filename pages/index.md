---
title: Index Page
description: The entry page for the site
---

{% section .hero %}

# Welcome to another assortment of symbols.
*The pupose of this site is in a state of flux. While there are good reasons to have a personal site on the internet, I have no definite and singular reason for making this site. As such the contents and structure of this site will likely change somewhat over time. That being said, It's my intention as the sites author to respect some general principles in the design of a webpage that were put forward by early internet pioneers. Some of these principles include a general continuity and consistency of internet sites over time. Where a URI will exist across time. As this site at this url has had different iterations over time, it is a goal of mine to keep some consistency across time. In a more abstract sense, the site should show some continuity across internet culture. That is it will take inspiration from several other internet pioneers. More of this is explained in [site philosophy](meta/site-philosophy)*

## Software used to create this site
While perhaps not a wise decision in the long term, this site is built with [React]("https://reactjs.org/") and [Next.js](https://nextjs.org/). The site also makes use of markdown and specifically [Markdoc](https://markdoc.org/). I typically use [Notion](https://www.notion.so) or [Obsidian](https://obsidian.md/) to write my notes. The advantage of this method is that both allow exports to markdown. I have a script to push these markdown files notion/obsidian to the git repository and then pushed to my [Gitlab](https://gitlab.com/) account. Here they run through a quick pipeline to deploy and then to the live site.

I believe this approach is optimal. Markdown as a text standard has stood the test of time and is very feature rich. In the event that I have to or wish to change the site, I will be left with markdown files that can be parsed in to whatever new format is required.

Here is an example of a markdown file I may write and the content it produces: 
{% side-by-side %}

```js
{
    "title": "Contact",
}
```
{% /side-by-side %}

{% /section %}