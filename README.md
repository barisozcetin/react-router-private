# react-router-private

> Private route component for React & React Router

[![NPM](https://img.shields.io/npm/v/react-router-private.svg)](https://www.npmjs.com/package/react-router-private) 

## Install

```bash
npm install --save react-router-private
```

## TODO

> Add example

## Usage

```jsx
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
...
import PrivateRoute from 'react-router-private'

class Example extends Component {
  render () {
    return (
    <div className="app" >
      <Router>
        <Route path ="/" exact component={home}></Route>
        <PrivateRoute path="/profile" exact component={Profile} authStatus={this.state.authStatus} redirectURL="/login"/>
        <PrivateRoute path="/another-route" component={Profile} authStatus={this.state.authStatus} nonLoggedInComponent={AlternativeComponent} />
      </Router>
    </div>
    )
  }
}
```

## License

MIT © [barisozcetin](https://github.com/barisozcetin)
