import { strict } from 'node:assert'
import { ICreateElement } from './createElement'
import { renderTextElement, renderHTMLElement } from './render'

const reconciliation = (oldVirtualNode: ICreateElement | string, newVirtualNode: ICreateElement | string, node: HTMLElement | ChildNode): void => {
  console.log('------ Start--------')
  console.log('oldVirtualNode', oldVirtualNode)
  console.log('newVirtualNode', newVirtualNode)
  console.log('node', node)
  console.log('childNodes', node?.childNodes)
  console.log('------ End--------')


  if (typeof oldVirtualNode !== 'string' || typeof newVirtualNode !== 'string') {

    // If no old virtual node found and there is new virtual node
    // then create one
    if (!oldVirtualNode && typeof newVirtualNode !== 'string') {
      node.appendChild(renderHTMLElement(newVirtualNode.elementType, newVirtualNode.attributes))
      // return
    }

    // If there is old node but no new node
    // then delete 
    if (!newVirtualNode) {
      node.remove()
      return
    }


    if (typeof oldVirtualNode !== 'string' && typeof newVirtualNode !== 'string' && oldVirtualNode?.elementType !== newVirtualNode?.elementType) {
      node.appendChild(renderHTMLElement(newVirtualNode.elementType, newVirtualNode.attributes))
    }
    if (typeof oldVirtualNode !== 'string' && typeof newVirtualNode !== 'string')
      for (let index = 0; index < Math.max(oldVirtualNode?.children?.length || 0, newVirtualNode?.children?.length || 0); index++) {
        console.log('Index', index)
        reconciliation(oldVirtualNode?.children[index] || '', newVirtualNode?.children[index] || '', node.childNodes[index])
      }
  } else if (typeof newVirtualNode === 'string' || typeof oldVirtualNode === 'string') {

    // If no old virtual node found and there is new virtual node
    // then create one
    if (!oldVirtualNode && typeof newVirtualNode === 'string') {
      node = renderTextElement(newVirtualNode)
      // return
    }

    // If there is old node but no new node
    // then delete 
    if (!newVirtualNode) {
      node.remove()
      // return
    }

    // If old node text is not equal to new node text
    // then replace 
    if (oldVirtualNode !== newVirtualNode && typeof newVirtualNode === 'string') {
      node.replaceWith(newVirtualNode)
      // return
    }
  }
}

export default reconciliation