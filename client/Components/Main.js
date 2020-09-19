import React, {createClass} from "react";
import {Link } from "react-router"

const Main = createClass({
    render(){
        return(
            <div>
                <h1>
                    <Link to="/" >Andrew Reeves Redux Journal</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
})

export default Main