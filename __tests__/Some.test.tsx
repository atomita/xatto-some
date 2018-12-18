import * as assert from 'power-assert'

import { x, atto } from 'xatto'

import { Some } from '../src/Some'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

beforeEach(() => {
  document.body.innerHTML = ''
})

describe('Some component', () => {

  test('Ignore empty and output the first one', async () => {
    const Empty = (attrs, children) => (false as any)
    const First = (attrs, children) => (<div class="first" />)
    const Second = (attrs, children) => (<div class="second" />)

    const mutate = atto(
      () => (
        <Some>
          <Empty />
          <First />
          <Second />
        </Some>
      ),
      document.body
    )

    mutate({})
    await delay(100)

    assert(document.body.innerHTML == '<div class="first"></div>')
  })

})
