import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import CarourselPictures from '../components/CarouselPictures';
import * as contentful from 'contentful';
import { Card, CardBody, CardTitle, CardImg, Button, CardText, CardSubtitle } from 'reactstrap';
const client = contentful.createClient({
    space: "caxwp2tsntec",
    accessToken: "310de59f3304fd943bd03d48bdb76c9327318060effc32adb3fa0faa74d5289a"
});

export default class MainPage extends Component {

    constructor() {
        super();
        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        let posts = [];
        client.getEntries({
            order: "-sys.createdAt",
            limit: 3
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
        return (
            <React.Fragment>
                <header>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <img id="logo" src={require("../assets/satellitesmash.png")} alt="Logo"></img>
                    </div>
                </header>
                <section style={{ margin: '3rem 0', textAlign: 'center' }}>
                    <Container style={{ width: '80%' }}>
                        <h2 style={{ marginBottom: '1rem' }}>WA Smash Lives Here.</h2>
                        <div className="lead text-left">
                            <p>
                                Satellite Smash is a Seattle-based group dedicated to bringing Western Washington the latest and greatest in the Super Smash Bros. series. We’ve organized Super Smash Bros. for Wii U events, streams, and more around the region since 2015, and we’re going even further with Super Smash Bros. Ultimate.
                                If you're new to the scene, <Link to="/signup">create</Link> a profile of your own to connect with other players. Then, check out <Link to="/events">Events</Link> for a list of upcoming tournaments and <Link to="/resources">Resources</Link> for access to the regional Facebook group and Discord server. Newcomers are always welcome!
                            </p>
                        </div>
                    </Container>
                </section>
                <section>
                    <div id="carousel">
                        <CarourselPictures></CarourselPictures>
                    </div>
                </section>
                <h2 style={{ margin: '2rem' }}>Recent News</h2>
                {this.state.posts &&
                    <section id="news-area">
                        {this.state.posts.map((post, i) => {
                            return (
                                <div className="post" key={"post" + i}>
                                    <Card>
                                        <CardBody>
                                            <Link style={{ color: "black" }} to={`/news/${post.id}`}>
                                                <CardTitle>{post.content.title}</CardTitle>
                                            </Link>
                                            {post.content.author && <CardSubtitle className="mb-3"><span style={{ fontWeight: 'bold' }}>Author:</span> {post.content.author}</CardSubtitle>}
                                            <Link to={`/news/${post.id}`}>
                                                <CardImg className="post-pic" src={post.content.mainImage.fields.file.url}></CardImg>
                                            </Link>
                                            <CardText style={{ margin: '1rem' }}>{post.content.content.substring(0, 100) + "..."}</CardText>
                                            <div className="text-center">
                                                <Link to={`/news/${post.id}`}>
                                                    <Button className="m3">View Post</Button>
                                                </Link>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            )
                        })
                        }
                    </section>
                }
            </React.Fragment>
        );
    }

}