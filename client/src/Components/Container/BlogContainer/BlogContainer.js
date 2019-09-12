import React, { Component } from 'react'
import BlogPost from '../../Presentational/BlogPost/BlogPost'
import Strapi from 'strapi-sdk-javascript'
const strapi = new Strapi('http://localhost:1337')


class BlogContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    async componentDidMount() {
        try {
            const posts = await strapi.getEntries('blogposts')
            this.setState({ posts })
        } catch (err) {
            console.log(err)
        }
        console.log(this.state.posts)
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => (
                    <BlogPost 
                        key= { post.id }
                        title= { post.title }
                        content= { post.content }
                    />
                ))}
            </div>
        )
    }
}

export default BlogContainer