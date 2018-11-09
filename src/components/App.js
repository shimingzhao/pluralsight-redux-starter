// This component handles the App template used on every page.
import React, { ProTypes } from 'react'

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <p>Header here...</p>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: ProTypes.object.isRequired
}

export default App
