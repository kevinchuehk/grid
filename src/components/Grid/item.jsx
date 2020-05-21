import React from 'react'
import PropTypes from 'prop-types'

export default function GridItem (props) {
  const {
    x,
    y,
    w,
    h,
    children,
    ...other
  } = props

  const style = {
    gridColumnStart: x + 1,
    gridColumnEnd: x + 1 + w,
    gridRowStart: y + 1,
    gridRowEnd: y + 1 + h,
    height: '100%',
    width: '100%'
  }

  return (
    <div style={style}>
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return React.createElement('div', other, child)
        }

        return React.cloneElement(child, other)
      })}
    </div>
  )
}

GridItem.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  w: PropTypes.number,
  h: PropTypes.number,
  children: PropTypes.element.isRequired
}
