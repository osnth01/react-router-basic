import React from 'react'
import expect from 'expect'
import About from '../../src/components/About'
import { shallow } from 'enzyme'

function setup() {
  const component = shallow(<About />)

  return {
    component
  }
}

describe('About', () => {
  it('should render "About"', () => {
    const { component } = setup()

    expect(component.type()).toEqual('h1')
    expect(component.text()).toEqual('About')
  })
})