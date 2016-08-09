import React from 'react'
import expect from 'expect'
import Home from '../../src/components/Home'
import { shallow } from 'enzyme'

function setup() {
  const component = shallow(<Home />)

  return {
    component
  }
}

describe('Home', () => {
  it('should render "Home"', () => {
    const { component } = setup()

    expect(component.type()).toEqual('h1')
    expect(component.text()).toEqual('Home')
  })
})