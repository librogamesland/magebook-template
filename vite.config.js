import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { rollupMagebook, encodeChapter, textToHtml, htmlToText } from 'magebook';


// Set custom magebook parser
const magebook = rollupMagebook({
  transform: (key, chapter, book) => ({
    title: chapter.title,
    text: encodeChapter(chapter.text, {
      html:      text => textToHtml(text),
      paragraph: text => `${text}<br>`,
      strong:    text => `<b>${text}</b>`,
      em:        text => `<i>${text}</i>`,
      codespan:  text => htmlToText(text),
      code: (code)    => code,
      link: (href,i, text) => `<mage-link to="${href.replace('#', '')}">` +
          (text || book.chapters[href.replace('#', '')].title || href.replace('#', '')) + 
        `</mage-link>`    
    }), 
  })
})                   


export default defineConfig({
  base: './',
  publicDir: 'assets',
  resolve: { alias: { 'vue': 'vue/dist/vue.esm-bundler.js' }, },
  plugins: [ vue(), magebook ],
})
