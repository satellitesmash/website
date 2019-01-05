import React, { Component } from 'react';
import * as contentful from 'contentful';
import ReactMarkdown from 'react-markdown';

const client = contentful.createClient({
    space: "caxwp2tsntec",
    accessToken: "310de59f3304fd943bd03d48bdb76c9327318060effc32adb3fa0faa74d5289a"
});

export default class Post extends Component {

    constructor() {
        super();
        this.state = {
            post: null
        }
    }

    componentDidMount() {
        let postToShow = this.props.match.params.post;
        client.getEntry(postToShow).then(entry => {
            this.setState({
                post: entry.fields
            });
        });
    }

    render() {
        const post = this.state.post;
        console.log(post)
        return (
            <section>
                {post &&
                    <div className="m-5">
                        <h1>{post.title}</h1>
                        {post.author && <h4>By: {post.author}</h4>}
                        <div className="post-image">
                            <img style={{ width: '100%' }} alt="Main" src={post.mainImage.fields.file.url}></img>
                        </div>
                        <div id="content-area">
                            <ReactMarkdown source={post.content}></ReactMarkdown>
                        </div>
                    </div>
                }
            </section>

        );
    }

}