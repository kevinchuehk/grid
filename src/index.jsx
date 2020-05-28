import React from 'react'
import { render } from 'react-dom'
import Grid from '../dist/umd/Grid'

const board = {
  layout: {
    col: 5,
    row: 2,
    header: true,
    footer: true
  },
  grid: [
    {
      x: 0,
      y: 0,
      w: 4,
      h: 2,
      name: '',
      app: '',
      params: {},
      data: {}
    },
    {
      x: 4,
      y: 0,
      w: 1,
      h: 2,
      name: '',
      app: '',
      params: {},
      data: {}
    }
  ]
}

function App (props) {
  return (
    <Grid {...board}>
      <div>123</div>
      <div>456</div>
    </Grid>
  )
}

render(<App />, document.getElementById('root'))
