import { virtualDOM, createElement, reconciliation } from '../src/'

const root = document.getElementById('root')

const App = (count: number) => createElement('div', { id: '10' },
  createElement('span', { id: '11' },
    createElement('div', { style: 'color: red; border: 1px solid;', id: '16' }, createElement('img', { src: 'https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif' }),
      createElement('div', {}, `Hello World ${count}`)),
    createElement('ul', {},
      // createElement('li', {}, 'Item1'),
      // createElement('li', {}, 'Item2'),
      // createElement('li', {}, 'Item3'),
      // createElement('li', {}, 'Item4'),
      ...Array.from({ length: count }).map((k, i) => createElement('li', {}, `Item${i * count}`))
    )
  )
)

let count = 1
// [...Array(count).keys()].map(k => createElement('li', {}, `Item${k}`))
const oldApp = App(count)

console.log('old', oldApp)
virtualDOM(oldApp, root)

setInterval(() => {
  if (root?.lastChild && count < 2) {
    count++
    const newApp = App(count)
    console.log('new', newApp)
    reconciliation(oldApp, newApp, root.lastChild)
  }

}, 1000)