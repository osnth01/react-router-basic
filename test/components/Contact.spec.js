import React from 'react'
import expect from 'expect'
import Contact from '../../src/components/Contact'
import { shallow } from 'enzyme'

function setup() {
  const component = shallow(<Contact />)

  return {
    component
  }
}

describe('Contact', () => {
  it('should render "Contact"', () => {
    const { component } = setup()

    expect(component.type()).toEqual('h1')
    expect(component.text()).toEqual('Contact')
  })
})