import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Quotes from './Quotes'
import Character from './Characters'
import '../App.css';

const App = () => {

    return (
        <Router>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Breaking Bad - Quick Facts & Quotes</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/characters">Characters</Nav.Link>
                        <Nav.Link href="/quotes">Quotes</Nav.Link>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/characters" component={Character} />
                    <Route path="/quotes" component={Quotes} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
