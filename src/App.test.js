import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Header from './components/header/header.component'

describe('App Component', () => {
  it('Should render component without crash', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Should render Header component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Header).exists()).toBeTruthy()
  })
})
