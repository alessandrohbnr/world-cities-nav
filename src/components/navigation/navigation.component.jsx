import React from 'react'
import PropTypes from 'prop-types'

import NavigationItem from '../navigation-item/navigation-item.component'
import { throttle } from 'lodash'

import './navigation.styles.css'

class Navigation extends React.Component {
  static propTypes = {
    list: PropTypes.array
  }

  static defaultProps = {
    list: []
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedItem: null,
      lineStyle: {}
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleNavResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleNavResize)
  }

  handleLineStyle = (item) => {
    if (item) {
      return {
        left: item.offsetLeft,
        width: item.offsetWidth
      }
    }

    return {}
  }

  handleNavResize = throttle(() => {
    this.setState({
      lineStyle: this.handleLineStyle(this.state.selectedElm)
    })
  }, 200)

  handleItemClick = (id, itemRef) => {
    this.setState({
      selectedItem: id,
      lineStyle: this.handleLineStyle(itemRef),
      selectedElm: itemRef
    })
  }

  isCurrentItem = (id) => {
    return this.state.selectedItem === id
  }

  render() {
    return (
      <nav className="wc-nav">
        <ul className="wc-nav-container">
          {this.props.list.map(({section, label}) => (
            <NavigationItem 
              key={section}
              id={section}
              onClickItem={this.handleItemClick}
              label={label}
              isCurrent={this.isCurrentItem(section)} />
          ))}
        </ul>
        <div className="wc-nav-line-container">
          <span className="wc-nav-line" style={this.state.lineStyle}></span>
        </div>
      </nav>
    )
  }
}

export default Navigation
