import React from 'react'
import { shallow, mount } from 'enzyme'
import NavigationItem from './navigation-item.component'

describe('NavigationItem Component', () => {
  let wrapper
  const navItemProps = {
    id: 'test',
    label: 'Test',
    onClickItem: jest.fn()
  }

  function setup(Component, props = {}, isMount = false) {
    const TestComp = <Component {...props} />
    return isMount ? mount(TestComp) : shallow(TestComp)
  }

  beforeEach(() => {
    wrapper = setup(NavigationItem, navItemProps, true)
  })

  it('Should render render component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Should call the onClickItem function when click on link', () => {
    const link = wrapper.find('a')
    expect(navItemProps.onClickItem.mock.calls).toHaveLength(0)
    link.simulate('click')
    expect(navItemProps.onClickItem.mock.calls).toHaveLength(1)
  })
})
