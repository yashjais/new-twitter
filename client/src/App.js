import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import Home from './components/Home'
import Tweets from './components/Tweets'

function App(props) {
    // console.log(props)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const doSomething = () => {

    }
    return (
        <div className="container">
            <BrowserRouter>

                <Navbar color="light" light expand="md">
                    <NavbarBrand style={{ fontWeight: "bold", textTransform: "uppercase" }}>Twitter Task</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <React.Fragment>
                                <NavItem>
                                    <NavLink tag={Link} to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/tweets">tweets</NavLink>
                                </NavItem>
                            </React.Fragment>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/tweets" component={Tweets} exact={true} />

                </Switch>

            </BrowserRouter>
        </div>
    )
}

export default App;