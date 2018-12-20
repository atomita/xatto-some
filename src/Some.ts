import { x } from 'xatto'

export function Some({ xa, ...props }: any, children) {
  let vNode: any = null

  xa.slice = ''

  const resolver = resolverProvider(xa)

  if (children.some(child => {
    vNode = resolver(child)
    return isValid(vNode)
  })) {
    return vNode
  }
}

function resolverProvider(xa) {
  return vNode => {
    if (x === vNode.name || !('function' === typeof vNode.name)) {
      return vNode
    }
    return vNode.name({ ...vNode.props, xa }, vNode.children)
  }
}

function isValid(vNode) {
  return vNode != null && vNode !== true && vNode !== false
}
