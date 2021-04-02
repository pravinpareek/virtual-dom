import { virtualDOM, createElement } from '../src/'

const root = document.getElementById('root')


virtualDOM(createElement('div', { id: '10' },
  createElement('span', { id: '11' },
    createElement('div', { style: 'color: red; border: 1px solid;', id: '16' }, createElement('img', { src: 'https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif' }),
      createElement('div', {}, 'Hello World')),
  ),
  createElement('div', { id: '50' }, 'Hello'),
  createElement('img', { src: 'https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif' })
), root)