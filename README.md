# react-router-private

> Private route component for React &amp; React Router

[![NPM](https://img.shields.io/npm/v/react-router-private.svg)](https://www.npmjs.com/package/react-router-private) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-router-private
```

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
      <Route to ="/" exact component={home}></Route>
      <PrivateRoute to="/profile" exact component={Profile} authStatus={this.state.authStatus} redirectURL="/login"/>
      <PrivateRoute to="/another-route"  authStatus={this.state.authStatus} nonLoggedInComponent={AlternativeComponent} />
    </div>
    )
  }
}
```

## License

MIT © [barisozcetin](https://github.com/barisozcetin)
