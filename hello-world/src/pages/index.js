import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import NavBar from "../components/NavBar"

export default () => <div style={{color: 'blue'}}>
    <Link to= "/contact/">Contact</Link>
    <Header headerText = "Whats up Fools"/>
    <p>why oh why</p>
    <img src={"https://source.unsplash.com/random/400x200"} alt={""} />
</div>


