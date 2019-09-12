import React, { Component } from 'react'

class BlogPost extends Component{

    render(){
        return(
            <div>
                <div>
                   Title: {this.props.title}
                </div>
                <div>
                    Content: {this.props.content}
                </div>
            </div>
        )
    }
}

export default BlogPost