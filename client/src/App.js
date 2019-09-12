import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Container/Home/Home'
import Navbar from './Components/Container/Navbar/Navbar'
import About from './Components/Container/About/About'
import Footer from './Components/Container/Footer/Footer'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default App
