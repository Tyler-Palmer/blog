import React, { Component } from 'react'
import Strapi from 'strapi-sdk-javascript'
const strapi = new Strapi('http://localhost:1337')

class App extends Component {
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
                    <article key={post.id}>
                        <div>Title: {post.title}</div>
                        <div>Content: {post.content}</div>
                    </article>
                ))}
            </div>
        )
    }
}
export default App
