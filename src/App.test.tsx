import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

test('renders without error', () => {
  const wrapper = shallow(<App/>)
  const appComponent = wrapper.find('[data-test="component-app"]')
  expect(appComponent.length).toBe(1)
})

test('renders button', () => {

})

test('renders counter display', () => {

})

test('renders counter display', () => {

})

test('clicking on button increments counter display', () => {

})

