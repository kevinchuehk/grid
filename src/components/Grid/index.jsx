import React from 'react'
import { isFragment } from 'react-is'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import GridItem from './item'

function Grid ({ itemClass, layout, grid, children }) {
  const { col, row } = layout
  const style = {
    display: 'grid',
    height: '98%',
    width: '100%',
    midWidth: '95%',
    midHeight: '95%',
    gridTemplateColumns: `${'auto'.repeat(col)}`,
    gridTemplateRows: `${'auto'.repeat(row)}`
  }

  return (
    <div style={style}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return null
        }

        if (process.env.NODE_ENV !== 'production') {
          if (isFragment(child)) {
            console.error(
              [
                'The Grid component doesn\'t accept a Fragment as a child',
                'Consider providing an array instead.'
              ].join('n')
            )
          }
        }

        const itemProps = grid[index]
        return (
          <GridItem className={clsx(itemClass)} {...itemProps}>
            {child}
          </GridItem>
        )
      })}
    </div>
  )
}

Grid.propTypes = {
  layout (props, propName, componentName) {
    const { col, row } = props[propName]
    if (typeof col !== 'number') {
      return TypeError(
        `Invaild col Prop Value: ${col} for ${propName} in ${componentName}`
      )
    }

    if (typeof row !== 'number') {
      return TypeError(
        `Invaild row Prop Value: ${row} for ${propName} in ${componentName}`
      )
    }
  },

  grid: PropTypes.array,
  children: () => {},
  itemClass: () => {}
}

export default Grid
