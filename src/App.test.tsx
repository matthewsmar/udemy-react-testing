import React from 'react'
import { shallow } from 'enzyme'
import App, { IAppProps} from  './App'
import { findByTestAttr } from './util/testUtil'

const setup = ({start = 0: IAppProps = , state=null) => {
  return shallow(<App {...props} />)
}

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('renders button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('default counter starts at 0', () => {
  const wrapper = setup()
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('0')
})

test('custom counter starts at start', () => {
  const wrapper = setup({start: 10})
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('10')
})

describe('Increment', () => {
  test('clicking on increment button increments counter display', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'increment-button')
    button.simulate('click')
    const count = findByTestAttr(wrapper, 'count').text()
    expect(count).toBe('1')
  })
})

describe('Decrement', () => {
  test('clicking on decrement button decrements counter display', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'decrement-button')
    button.simulate('click')
    const count = findByTestAttr(wrapper, 'count').text()
    expect(count).toBe('0')
  })

  test('clicking on decrement button decrements counter display', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'decrement-button')
    button.simulate('click')
    const count = findByTestAttr(wrapper, 'count').text()
    expect(count).toBe('0')
  })
})
