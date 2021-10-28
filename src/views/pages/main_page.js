import React from 'react'
import Navbar from '../commons/navbar'
import Home from './components/home'
import About from './components/about'
import Site from './components/site'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const MainPage = () => {

    return (
        <React.Fragment>
            <Router>
                <Navbar/>
                <div className='main-container'>
                    <Switch>
                        <Route path='/' exact>
                            <Home />
                        </Route>
                        <Route path='/about' exact>
                            <About />
                        </Route>
                        <Route path='/site' exact>
                            <Site />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
    )
}

export default MainPage

