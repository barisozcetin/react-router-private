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
You can use redirectURL to redirect to another page or you can use nonLoggedInComponent to stay in the same URL but render a different component

```jsx
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
...
import PrivateRoute from 'react-router-private'

class Example extends Component {
  render () {
    return (
    <div className="app" >
      <Router>
        <Switch>
          <Route path ="/" exact component={home}></Route>
          <PrivateRoute path="/profile" exact component={Profile} authStatus={this.state.authStatus} redirectURL="/login"/>
          <PrivateRoute path="/another-route" component={Profile} authStatus={this.state.authStatus} nonLoggedInComponent={AlternativeComponent} />
        </Switch>
      </Router>
    </div>
    )
  }
}
```

## License

MIT © [barisozcetin](https://github.com/barisozcetin)
