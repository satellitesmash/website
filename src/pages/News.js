import React, { Component } from 'react';
import PostArea from '../components/PostArea';
import * as contentful from 'contentful';
const client = contentful.createClient({
    space: "caxwp2tsntec",
    accessToken: "310de59f3304fd943bd03d48bdb76c9327318060effc32adb3fa0faa74d5289a"
});

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        let posts = [];
        client.getEntries({
            order: "-sys.createdAt"
        }).then(entries => {
            entries.items.forEach(entry => {
                if (entry.fields) {
                    posts.push({ content: entry.fields, id: entry.sys.id });
                }
            });
            this.setState({
                posts: posts
            });
        });
    }

    render() {
        const posts = this.state.posts
        return (
            <section>
                <h1>News from the Scene</h1>
                {posts ? <PostArea posts={posts}></PostArea> :
                    <div style={{ textAlign: 'center', margin: '5rem 0' }}>
                        <img alt="loading symbol" src={require("../assets/loader.gif")}></img>
                    </div>}
            </section>
        );
    }

}