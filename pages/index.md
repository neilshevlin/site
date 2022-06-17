---
title: Index Page
description: The entry page for the site
---

{% section .hero %}

# Welcome to another assortment of symbols.
*The pupose of this site is in a state of flux. While there are good reasons to have a personal site on the internet, I have no definite and singular reason for making this site. As such the contents and structure of this site will likely change somewhat over time. That being said, It's my intention as the sites author to respect some general principles in the design of a webpage that were put forward by early internet pioneers. Some of these principles include a general continuity and consistency of internet sites over time. Where a URI will exist across time. As this site at this url has had different iterations over time, it is a goal of mine to keep some consistency across time. In a more abstract sense, the site should show some continuity across internet culture. That is it will take inspiration from several other internet pioneers. More of this is explained in [site philosophy](meta/site-philosophy)*

## Software used to create this site
While perhaps not a wise decision in the long term, this site is built with [React]("https://reactjs.org/") and [Next.js]("https://nextjs.org/"). The site also makes use of markdown and specifically [Markdoc]("https://markdoc.org/"). I typically use [Notion]("https://www.notion.so") or [Obsidian]("https://obsidian.md/") to write my notes. The advantage of this method is that both allow exports to markdown. I have a script to push these markdown files notion/obsidian to the git repository and then pushed to my [Gitlab]("https://gitlab.com/") account. Here they run through a quick pipeline to deploy and then to the live site.

I believe this approach is optimal. Markdown as a text standard has stood the test of time and is very feature rich. In the event that I have to or wish to change the site, I will be left with markdown files that can be parsed in to whatever new format is required.

Here is an example of a markdown file I may write and the content it produces: 
{% side-by-side %}

```js
{
    "title": "Contact",
}
```
{% /side-by-side %}

## Some possible sections for this site
- drafts (drafts of ideas that I can publish quickly and if they are left, there's still a trace to my thinking at that time)
- about (This could be seperate from the site philosophy where I can explain some of what makes up me. I cool idea here is to have a miniature wiki on how certain concepts and people have influcenced my own personality, the way I think, and the way I have been able to make my own decisions.)
- To do (A list of things that you want to find out more about or want to figure out how to do.)
- Booklist (A list of books that I have read or am reading. However I feel as if there's a certain cheapness to this. Where you might list a lot of books, but not really have any proof that you've read. Reviews of the books are more complete but I feel are more for completed books. Instead, having brief notes on the books that I've read and some critical thoughts about the books would be better.)
- Blog ( A blog in the context of this site seems a bit too general. Essays are for longer content. Book notes are for book notes. Blog however could be a finished draft. When something I deem short, but not the length of an essay is finished then I can remove it from)
- Quick communication ( It would be cool, although possibly completely un-needed to have some way for people to communicate with me from the site. Why would someone choose this over a form of email?)
- The idea of a changelog of the website makes sense in the context of the continuity of a site. It serves to treat yourself as a proffesional and to show you care about longevity. This is the same idea as gwerns 'changes'
- I would also like some ability to have surveys and data collection and display on my site. Like I had done before with that general idea of a substack for science.
- Links of stuff that you found interesting in any given week. This has been done before, but it could be useful for information gathering.
- Bibliography (When writing something, it could be useful to have a record of the things that I've read that are referencing some internal link to a database. This is an expansion of the idea of the bibliography for research that Umberto eco used.)
- I like the idea of translating pieces in to Irish. I think this could be a good way to learn the language. However I would need to get it proof read by someone who is actualy an irish speaker. Further, I like the idea of expanding it in to dead languages and in to Latin. This goes along with teh thoughts that we ought to preserve small languages for the sake of diversity and fault tolerance, and the latin for the idea of a language being unchanging. It also definitely fits with my philosophy of continuity and background.
- A like the idea that you should be able to listen to the things that you read. This seems like it could be easily done with the new TTS speech software that is being trained. I'd like to have the things I write, (perhaps the longer form only, or just first) be listenable and also published to spotify. Additionaly, It's possible that I train a language model on my own voice, and so I can have my voice be the one that narrates the things that I write. This again fits with the sites philosophy of continuity and my own personal idea of continuity and archiving.
- I like the idea of ideas being like a git repo. Where anyone might be able to contribute to the site. Since the content is in markdown and easy for anyone to understand, I could setup a system to allow public changes to certain pages.
- Footnotes. These can be added to the end of each blog or entry that I read. They are different from references and they are different from short notes. They could also have their own section.
- Documentation styling. What are some of the essential stylings of documentation? Gwern's wiki style site is unique and also highly functional in that it's familiar and very useful. 
    - The wikipedia style is it's own standard in a way. It is there to convey a specific type of information. You can have technical docs in a wikipedia page, 
{% /section %}