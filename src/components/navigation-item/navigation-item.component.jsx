import React from 'react'
import PropTypes from 'prop-types'

import './navigation-item.styles.css'

class NavigationItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClickItem: PropTypes.func.isRequired,
    isCurrent: PropTypes.bool
  }

  constructor(props) {
    super(props);

    this.itemRef = React.createRef()
  }
  
  handleClick = (id) => (e) => {
    e.preventDefault()

    const { onClickItem } = this.props

    onClickItem && onClickItem(id, this.itemRef.current)
  }

  render() {
    const { id, label, isCurrent } = this.props
    const classNames = isCurrent ? `current`: ``

    return (
      <li className={`wc-nav-item ${classNames}`}>
        <a 
          ref={this.itemRef}
          href={`#${id}`} 
          onClick={this.handleClick(id)}>
          {label}
        </a>
      </li>
    )
  }
}

export default NavigationItem
