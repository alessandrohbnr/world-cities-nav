import React from 'react'
import { shallow, mount } from 'enzyme'
import Navigation from './navigation.component'
import NavigationItem from '../navigation-item/navigation-item.component'
import NavigationLine from './navigation-line.component'
import navigationData from '../../utils/navigation.data.json'

describe('Navigation Component', () => {
  let wrapper

  function setup(component, isMount = false) {
    return isMount ? mount(component) : shallow(component)
  }

  beforeEach(() => {
    wrapper = setup(<Navigation list={navigationData.cities} />)
  })

  it('Should render component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Should render NavigationItem components', () => {
    const naviItems = wrapper.find(NavigationItem)
    expect(naviItems.length).toEqual(navigationData.cities.length)
  })

  it('Should render NavigationLine components', () => {
    expect(wrapper.find(NavigationLine)).toBeTruthy()
  })

  it('Should update class of render NavigationItem components when selected', () => {
    wrapper = setup(<Navigation list={navigationData.cities} />, true)

    const navContainer = wrapper.find('.wc-nav-container')
    const navItem = navContainer.find('li').first()
    const navItemLink = navItem.find('a').first()

    expect(navItem.getDOMNode().className).not.toContain('current')
    
    navItemLink.simulate('click')
    wrapper.update()

    expect(navItem.getDOMNode().className).toContain('current')
  })
})
