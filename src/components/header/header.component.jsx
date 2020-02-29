import React from 'react'

import Navigation from '../navigation/navigation.component'

import NavigationData from '../../utils/navigation.data.json'

import './header.styles.css'

const Header = () => (
  <header className="wc-header">
    <Navigation list={NavigationData.cities}/>
  </header>
)

export default Header
