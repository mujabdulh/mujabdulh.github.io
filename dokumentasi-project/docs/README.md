---
sidebar: auto
---

# Dokumentasi Menggunakan Markdown 
"Nearly all Markdown applications support the basic syntax outlined in John Gruber’s original design document. There are minor variations and discrepancies between Markdown processors — those are noted inline wherever possible." - markdownguide.org



***LINK ke spesifik HEADER***
>format header yaitu huruf non kapital semua, ganti spasi menggunakan tanda - 

[cara kerja file markdown](./#cara-kerja-markdown)

`[cara kerja file markdown](./#cara-kerja-markdown)`

<br>

***LINK ke FILE Lain***

> secara default akan memanggil file **README.md** dalam folder **sub-bahasan-1**

[sub bahasan 1](./sub-bahasan-1/) 

`[link title](./sub-bahasan-1/)`


> untuk link spesifik file-lain.md dalam folder tidak perlu menggunakan akhiran .md 

[sub bahasan - file one](./sub-bahasan-1/one)


<br>

***LINK ke FILE Lain pada spesifik HEADER***

[sub bahasan 2 - Bagian 2 : pengantar konten](./sub-bahasan-2/#bag-2-pengantar-konten)

`[sub bahasan 2](./sub-bahasan-2/#bag-2-pengantar-konten)`



## Markdown 
Markdown is the simple and easy-to-use markup language you can use to format virtually any document.

### Pengantar

#### Sejarah Markdown

Markdown is a ightweight markup language that you can use to add formatting elements to plaintext text documents. Created by [John Gruber](https://daringfireball.net/projects/markdown/) in 2004, Markdown is now one of the world’s most popular markup languages.

#### Cara kerja Markdown

Using Markdown is different than using a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) editor. In an application like Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. 

Markdown isn’t like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different.

![markdown-flow](https://d33wubrfki0l68.cloudfront.net/75cdd78aba218a9abbfe91d2ba2cf540a7502d8c/553fa/assets/images/process.png "Cara Kerja Markdown")

To summarize, this is a four-part process:

1. Create a Markdown file using a text editor or a dedicated Markdown application. The file should have an .md or .markdown extension.
2. Open the Markdown file in a Markdown application.
3. Use the Markdown application to convert the Markdown file to an HTML document.
4. View the HTML file in a web browser or use the Markdown application to convert it to another file format, like PDF.

#### Tujuan Markdown

Depending on the application you use, you may not be able to preview the formatted document in real time. But that’s okay. [According to Gruber](http://daringfireball.net/projects/markdown/), Markdown syntax is designed to be readable and unobtrusive, so the text in Markdown files can be read even if it isn’t rendered.

#### Kompatibilas Markdown

You can add Markdown formatting elements to a plaintext file using a text editor application. Or you can use one of the many Markdown applications for macOS, Windows, Linux, iOS, and Android operating systems. There are also several web-based applications specifically designed for writing in Markdown.



#### Sasaran Penggunaan Markdown

Markdown is a fast and easy way to take notes, create content for a website, and produce print-ready documents.

It doesn’t take long to learn the Markdown syntax, and once you know how to use it, you can write using Markdown just about everywhere. Most people use Markdown to create content for the web, but Markdown is good for formatting everything from writing books, email messages, presentations, documentation, to grocery lists.



## Format
### Format Heading

> note: 
>
> Header 1, 2, dan 3 akan ter-index otomatis ke pencarian project vuepress

header 1 sebagai judul konten:  `# Title Content`

header 2 sebagai sub bagian: `## Sub Title`

header 3 sebagai sub dari sub bagian: `### Sub level 2`

header 4 sebagai header level 4: `#### Heading level 4`

header 5 sebagai header level 5: `##### Heading level 5`

header 6 sebagai header level 6: `###### Heading level 6` 



### Format Teks

> Emphasis <br>
> You can add emphasis by making text bold or italic.

this is **bold** : `**bold** `

this is *italic* : `*italic*`

this is ***bold combine italic*** : `***bold combine italic***`



### Format Gambar

gambar tanpa hover text : `![title](sumber.jpg/png)` <br>

gambar dengan hover text: `![title](sumber.jpg/png "image teks")`

![Type machine](./img/writer.jpg "Type machine")



### Format Link

Link dengan Teks: `[link teks](URL)`

[markdown.org guide](https://www.markdownguide.org/basic-syntax)

URL langsung: `<URL>`

<https://www.markdownguide.org/basic-syntax>



Email : `<email@example.com>`

Email: <public@example.com> 


### Format Lainnya

#### Format Paragraf

baris baru / *line breaks* : `<br>`
To create a line break (<br>), end a line with two or more spaces, and then type return.



#### Format line break
horizontal rules / garis pemisah  
```
content before line break

---
content after line break
```

content before line break

---
content after line break




#### Format quotes

blockquotes single paragraphs: 
`> quotes`

> quotes.

blockquotes multiple paragraphs: 
```
> quote
>  
> quote

```

> Note: Using Markdown doesn't mean that you can't also use HTML. You can add HTML tags to any Markdown file.
> 
> For example, some people find that it's easier to use HTML tags for images.





