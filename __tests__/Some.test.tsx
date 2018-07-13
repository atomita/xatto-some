import * as assert from 'power-assert'

import { x } from 'xatto'

import { Some } from '../src/Some'

describe('Some component', () => {

  test('responce is vNode', () => {
    const Empty = (attrs, children) => null
    const child = <div />
    const some = (
      <Some>
        <Empty />
        {child}
      </Some>
    )
    assert(some.name(some.attributes, some.children) === child)
  })

})
