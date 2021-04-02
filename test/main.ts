import { virtualDOM, createElement } from '../src/'

const root = document.getElementById('root')


virtualDOM(createElement('div', { id: '10' },
  createElement('span', { id: '11' },
    createElement('div', { style: 'color: red; border: 1px solid;', id: '16' }, 'Hello World Again')
  ),
  createElement('div', { id: '50' }, 'Hello')
), root)