export function Some({ xa, ...attrs }, children) {
  let vNode: any = null

  children.some(child => {
    vNode = 'function' === typeof child.name
      ? child.name({ ...child.attributes, xa }, child.children)
      : child
    return vNode != null && vNode !== true && vNode !== false
  })

  return vNode
}
