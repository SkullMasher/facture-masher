import { expect } from 'chai'
import greet from './hello_universe'
import lodr from './hello_universe'

describe('hello universe', function () {
  it('greets better than hello world', function () {
    expect(greet()).to.equal('Hello Universe!')
  })

  it('greets better than hello universe', function () {
    expect(lodr()).to.equal('Hello There !')
  })
})
