import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(
            <div>
                <Link to='/about' />
            </div>
        )
    }
}

export default Navbar