# strongDM Content Style Guide Docs

**To file a docs request, please visit https://github.com/strongdm/docs/issues. Thanks!**

## Live site
https://sdm-content-style-guide.netlify.app/

## Local installation

1. Make sure you have **yarn** installed first.

   ```bash
   brew install yarn
   ```

2. Install the **boogi-cli**.

   ```bash
   npm install -g boogi-cli
   ```

3. Clone the repo.

   ```bash
   git clone https://github.com/strongdm/content-style-guide.git
   ```

   or

   ```bash
   gh repo clone strongdm/content-style-guide
   ```

4. Initialize BooGi.

   ```bash
   cd content-style-guide

   yarn
   ```

## Running the local server

To start development server with live reload when something changes:

```bash
boogi develop -p 8000
```

`boogi develop` also triggers an Algolia index update.

## Editing Content

Markdown is located in the "content" folder of the content-style-guide repo.

There are some relevant pages in the Boogi Docs:

- [Navigation](https://boogi.netlify.app/configuration/navigation) - a good primer on the structure of the content folder
- [Markdown Cheatsheet](https://boogi.netlify.app/editing/markdown)
- [Jargon](https://boogi.netlify.app/editing/rich_content/abbreviations) (aka variables)
- [Custom Components](https://boogi.netlify.app/editing/rich_content/custom_components)
- [Code Snippets](https://boogi.netlify.app/editing/rich_content/snippets)
- [Embeds](https://boogi.netlify.app/editing/rich_content/embed)
- [Emojis](https://boogi.netlify.app/editing/rich_content/emojis)

## Building

### Remote build / pushing to Live

Pushing updates to the `public-docs` repo triggers a rebuild of the [Public Docs](https://sdm-content-style-guide.netlify.app) site, which takes ~4 minutes to fully build and deploy.

```bash
git add .
git commit -m "Your commit message here"
git push
```

### Local build

You can also build a local application package ready for deployment:

```bash
boogi build
```

The built package will be created in `public` directory.

## About

This app was created with [BooGi](https://boogi.netlify.app).  BooGi is a Gatsby app, and therefore built on React.

## Features

- Write using Markdown / [MDX](https://github.com/mdx-js/mdx)
- GitBook-like style theme, inspired by https://docs.gitbook.com/
- light / dark mode themes
- responsive design with mobile / tablet support
- rich-content and rich-text features like text formatting, graphs and diagrams,
  quotes, columnar layout, emojis, highlights, live code editor,
  syntax highlighting, external code snippets and many many more!
- draft pages
- search integration with [Algolia](https://www.algolia.com)
- local search (search in a browser without need to integrate with Algolia)
- Progressive Web App which can work offline
- integration with Google Analytics
- full screen mode
- Search Engine Optimization (_SEO_) friendly
- RSS feed
- easy way to edit content on Gitlab, Github or Bitbucket
- custom CLI to easily initialize and develop BooGi app
- easy deployment on platform of your choice


## Create new Netlify instance

On the off chance you'd like to create a brand new instance of the style guide, you can deploy directly to Netlify with this awesome little button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/strongdm/content-style-guide)

