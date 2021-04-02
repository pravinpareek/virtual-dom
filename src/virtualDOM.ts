import { ICreateElement } from './createElement'
import { renderHTMLElement, renderTextElement } from './render'

const buildDOMTree = (element: ICreateElement | string, parent: HTMLElement): void => {
  if (typeof element !== 'string') {
    const { elementType, attributes, children } = element
    const childElement = renderHTMLElement(elementType, attributes)
    parent.appendChild(childElement)
    children?.length && children.forEach((child: ICreateElement | string) => buildDOMTree(child, childElement))
  } else if (typeof element === 'string') {
    parent.appendChild(renderTextElement(element))
  }

}

const virtualDOM = (elements: ICreateElement, node: HTMLElement | null) => {
  // Build DOM tree using elements object
  node && buildDOMTree(elements, node)
}

export default virtualDOM