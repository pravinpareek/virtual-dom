
export interface ICreateElement {
  elementType: string
  attributes: { [key: string]: string }
  children: ICreateElement[] | string[]
}


const createElement = (elementType: string, attributes: { [key: string]: string }, ...children: ICreateElement[] | string[]): ICreateElement => {
  return { elementType, attributes, children }
}

export default createElement