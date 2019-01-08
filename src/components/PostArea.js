import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, Button, CardText, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class News extends Component {

    render() {
        const posts = this.props.posts;
        return (
            <div id="post-area" className="text-center">
                {posts.map((post, i) => {
                    return (
                        <div className="post-row" key={"post" + i}>
                            <Card>
                                <CardBody>
                                    <CardTitle>{post.content.title}</CardTitle>
                                    {post.content.author && <CardSubtitle  className="mb-3"><span style={{ fontWeight: 'bold' }}>Author:</span> {post.content.author}</CardSubtitle>}
                                    <CardImg className="post-pic" src={post.content.mainImage.fields.file.url}></CardImg>
                                    <CardText style={{ margin: '1rem' }}>{post.content.content.substring(0, 100) + "..."}</CardText>
                                    <div className="text-center">
                                        <Link to={`/news/${post.id}`}>
                                            <Button className="m3">View Post</Button>
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    );
                })}
            </div>
        );
    }

}