---
title: Hello world!
pubDate: 2000-01-01
modDate: 2020-01-01
description: This is the first article!
author: cat
tags: [post, hello, greeting, first]
---

# Header 1

## Header 2

_Italics_ **Bold** ~~Strikeout~~

-   Bulleted list item a
-   Bulleted list item b
    -   Nested item b1

1. Numbered list item
2. Numbered list item
    1. Nested list item
    2. Nested list item

-   [ ] Checkbox 1
-   [x] Checkbox 2

> > How to use quotes in Markdown?

> Just prepend text with >

````python
s = "Tripple backticks ( ``` ) generate code block"
print(s)
````

```javascript
import { codeToHtml } from "shiki";

const html = codeToHtml('console.log("Hello World")', {
    lang: "javascript",
    theme: "none",
});
```

Single backtick generates `inline code`

---

\*not italics\*

| Header | Header |
| ------ | ------ |
| Cell   | Cell   |
| Cell   | Cell   |

Autolinks:
https://rentry.co/ or rentry.co

Link description:
[Markdown paste service](https://rentry.co)

![Alt Tag](../../../public/legacy.png)

![Alt Tag](../../../public/favicon.png "Latest")
