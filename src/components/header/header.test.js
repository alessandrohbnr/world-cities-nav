import React from 'react'
import { shallow } from 'enzyme'
import Header from './header.component'
import Navigation from '../navigation/navigation.component'
import navigationData from '../../utils/navigation.data.json'

describe('Header Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('Should render component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Should render Navigation component', () => {
    expect(wrapper.find(Navigation).exists()).toBeTruthy()
  })

  it('Should render Navigation with list prop', () => {
    const navigation = wrapper.find(Navigation)
    const list = navigation.prop('list')
  
    expect(list).toBeDefined()
    expect(list).toEqual(navigationData.cities)
  })
})
