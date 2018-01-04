## About this site

This is the home page of Keith Showalter. The code is currently hosted on [Github](https://github.com/kshowalter/kshowalter). Almost all of the code is written by me in regular javascript. See my philosophy on [JavaScript development](#/philosophy/javascript). 

Most of the pages are written Markdown (including some of the extended formating). 
A [Markdown Loader](https://github.com/kshowalter/markdown_loader) is used in Webpack to load the markdown files. 
The content of the files is loaded into the [SpecDOM API](https://github.com/kshowalter/specDOM_API) format. 
The entire site's content is sent to the client browser in this format. 

On the client, a [simple router](https://github.com/kshowalter/hash_router) selects the page to display, and the page specs are rendered with [SpecDOM](https://github.com/kshowalter/specdom). 
