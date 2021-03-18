# Magebook app
This is a project template for building web apps with [Magebook editor](https://librogamesland.github.io/magebook) + [Vue.js](https://vuejs.org/), a popular javascript framework

Comes with:
- [Vue.js](https://vuejs.org/) javascript framework + [Vite](https://vitejs.dev/) bundler 
- [Roboto font](https://fonts.google.com/specimen/Roboto) and [zmdi-icons](https://zavoloklom.github.io/material-design-iconic-font/icons.html), common choices for android apps
- out of the box support for Magebook book loading (configuration is done inside `virt.config.js`)


## Get started
Clone and install dependencies ([Node.js](https://nodejs.org/) required):
```bash
npx degit librogamesland/magebook-template magebook-app
cd magebook-app
npm install
```

Build and release:
```bash
# Dev mode - rebuild on file change
# Open your browser at http://localhost:10021 to see the result
npm run dev

# Build project release (will create dist folder)
npm run build
```

## Project structure

```bash
assets/           # Dist folder, put here static files
src/              # Source (book/html/css/js/vue) files
  components/     # Vue reusable components (buttons/checkboxes/...)
  main.js         # Javascript entry point
  store.js        # Shared javascript store
  book.md         # MAGEBOOK markdown file
  App.vue         # Vue entry point

virt.config.js    # Bundler configuration
```

---  
Have fun coding with Magebook!

For any problem contact me on github, via email [luc.fabbian@gmail.com](mailto:luc.fabbian@gmail.com?subject=Magebook%20-%20app-template) or through [Librogame's Land forum (italian)](http://www.librogame.net/index.php/forum/topic?id=5182&p=1#p148583)
