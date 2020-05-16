import React from "react"

import { BrowserRouter ,Route, Switch, } from "react-router-dom"

import Main from "./Pages/Main/App"
import Country from "./Pages/Country/Country"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/country"  component={Country}/>
            </Switch>
        </BrowserRouter>
    )
}