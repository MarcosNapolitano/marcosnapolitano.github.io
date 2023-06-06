# <div align="center">marcosnapolitano.github.io</div>

This is my home page, here you can find several links to many of my other projects. You can visit it [here](https://marcosnapolitano.github.io/)! :rocket:

Although a really simple page, it has some nice features like scroll-in animations and Spanish/English versions. 
## Tech Stack

* HTML
* CSS
* JavaScript

## Quickview

![Screenshot of my homepage](https://marcosnapolitano.github.io/Assets/readme.jpg)

## Quickstart

1. Fork the project
2. Clone project using `git clone git@github.com:<YOUR-USERNAME>/marcosnapolitano.github.io.git`
3. Navigate into the project using `cd marcosnapolitano.github.io`
4. Run `npx serve`

## Docs

All logic contained in `script.js` in the `Public` folder. It consists of both the scroll animations and the logic for the translation. 
* Animations: An Intersection Observer is used in order to either add or remove the necessary class that displays the current section. 

* Translation: A query selector is used to gather all *to be translated* elements. They all have a class called *appear* that will actually fade them into view after they have been faded out with the *disappear* class. The actual translation happens in between those events with a `setTimeout()` function.

The file called `db.js` is where the actual translation's text can be found.



This site was built using [GitHub Pages](https://pages.github.com/).




