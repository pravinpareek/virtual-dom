import { ICreateElement } from './createElement'
import { renderHTMLElement, renderTextElement } from './render'

const buildDOMTree = (element: ICreateElement | string): HTMLElement | Text => {
  if (typeof element !== 'string') {
    const { elementType, attributes, children } = element
    const childElement = renderHTMLElement(elementType, attributes)
    children?.length && children.forEach((child: ICreateElement | string) => childElement.appendChild(buildDOMTree(child)))
    return childElement
  } else if (typeof element === 'string') {
    return renderTextElement(element)
  } else {
    return document.createElement('div')
  }

}

const virtualDOM = (elements: ICreateElement, node: HTMLElement | null) => {
  // Build DOM tree using elements object
  node && node.appendChild(buildDOMTree(elements))
}

export default virtualDOM