const renderHTMLElement = (elementType: string, elementAttributes: { [key: string]: string }): HTMLElement => {
  const childElement = document.createElement(elementType)
  Object.keys(elementAttributes).forEach(attributeKey => childElement.setAttribute(attributeKey, elementAttributes[attributeKey]))
  return childElement
}

const renderTextElement = (text: string) => {
  return document.createTextNode(text);
}

export {
  renderHTMLElement,
  renderTextElement
}