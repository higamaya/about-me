<div id="top"></div>

![featured image](src/assets/images/icatch_1200x630.png)

<p align="right">(<a href="#top">Back to top</a>)</p>

# About

Resume Site of HIGAMA屋 (Higama-ya), hosted on GitHub Pages, and can be accessed at url: https://about-me.higamaya.com/

This site uses Materialize front-end framework and is developed based on [Parallax Template](https://materializecss.com/templates/parallax-template/preview.html).

You can use this project as a template to make your own Resume Site.

<p align="right">(<a href="#top">Back to top</a>)</p>

## Built With

* [Materialize](https://materializecss.com/)
* [anime.js](https://animejs.com/)
* [Chart.js](https://www.chartjs.org/)
* [jQuery](https://jquery.com/)
* [Material icons](https://fonts.google.com/icons)
* [Font Awesome](https://fontawesome.com/)

<p align="right">(<a href="#top">Back to top</a>)</p>

# Usage

## Setup

#### 1. Duplicate the repo

Duplicate this repo, and clone it to your computer.

See [GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository) if you want to know the way to duplicate a repo.

#### 2. Install NPM packages

```sh
npm install
```

<p align="right">(<a href="#top">Back to top</a>)</p>

## Development

#### 1. Make source files

All source files that make up the site, such as \*.html, \*.css and \*.js, are stored in `src` directory.

#### 2. Test with browser

Run local HTTP srever.

```sh
npm run server
```

The HTTP server refers `src` directory as document root.
Access port 8080 to test the site with browser.

The local HTTP server allows you to test with mobile devices within the local network.
If you don't need to test with mobile devices, you can also test by opening HTML files in the `src` directory by browser directly.

<p align="right">(<a href="#top">Back to top</a>)</p>

## Build to publish

Build the site to publish.

```sh
npm run build
```

The following processes are executed.

* Minify \*.css and \*.js files in `src` directory.
* Copy all files from `src` to `docs` directory.
* Edit \*.html files in `docs` directory, to refer min versions of \*.css and \*.js.
* Minify image files such as \*.png in `docs` directory.

<p align="right">(<a href="#top">Back to top</a>)</p>

## Deployment

Deploy the contents of `docs` directory to the server that hosts your site.
The procedure depends on your hosting service.

In the case of Higama-ya, the site is hosted on GitHub Pages, so all we have to do is push the commit of `docs` directory to the main branch.

<p align="right">(<a href="#top">Back to top</a>)</p>

# License

Distributed under a custom license based on MIT License.
The difference from MIT License is that image files are excluded from the license.
See [LICENSE](LICENSE) for more details.

<p align="right">(<a href="#top">Back to top</a>)</p>

# Contact

Send a direct message to Higama-ya's twitter account: [@higama_ya](https://twitter.com/higama_ya)

<p align="right">(<a href="#top">Back to top</a>)</p>

