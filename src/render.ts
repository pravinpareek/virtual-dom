const renderHTMLElement = (elementType: string, elementAttributes: { [key: string]: string }): HTMLElement => {
  const childElement = document.createElement(elementType)
  Object.keys(elementAttributes).forEach(attributeKey => childElement.setAttribute(attributeKey, elementAttributes[attributeKey]))
  return childElement
}

const renderTextElement = (element: HTMLElement, text: string) => {
  element.textContent = text
}

export {
  renderHTMLElement,
  renderTextElement
}