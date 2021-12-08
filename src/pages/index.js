// Step 1: Import React
import * as React from 'react'
import ResponsiveDrawer from '../components/layout'
import Box from '@mui/material/Box';

// Step 2: Define your component
const IndexPage = () => {
  const drawerWidth = 240;

  return (
    <div>
      <ResponsiveDrawer>
          <button>Randomly Generate New Selections</button>
      </ResponsiveDrawer>
    </div>
  )
}

// Step 3: Export your component
export default IndexPage