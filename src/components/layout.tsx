// Step 1: Import React
import * as React from 'react'
import Dashboard from './dashboard'

// Step 2: Define your component
const Layout = ({children}) => {
  return (
    <div>
      <Dashboard></Dashboard>
      {children}
    </div>
  )
}

// Step 3: Export your component
export default Layout