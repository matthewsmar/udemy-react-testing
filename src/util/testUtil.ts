import { ShallowWrapper } from 'enzyme'

export const findByTestAttr = (wrapper: ShallowWrapper, attr: string) => {
  return wrapper.find(`[data-test="${attr}"]`)
}

