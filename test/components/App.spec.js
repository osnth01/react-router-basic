import React from 'react'
import expect from 'expect'
import App from '../../src/components/App'
import { shallow } from 'enzyme'

function setup() {
  const component = shallow(<App />)

  return {
    component,
    links: component.find('Link')
  }
}

describe('App', () => {
  it('should render the navbar', () => {
    const { component, links } = setup()

    expect(links.length).toEqual(3)
  })
})