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

class MainPage extends Component {

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
                <section>
                    <div style={{ position: "relative" }}>
                        <img src={require("../assets/ult.png")} alt="Logo" width="100%"></img>
                        <div className="centered">
                            <h1 style={{ fontSize: "5vw" }} className="text-uppercase">Washington Smash Bros. Ultimate</h1>
                            <hr className="my-2" />
                            <p style={{ fontSize: "3vw" }} className="lead">Your destination for connecting with players and learning about the game.</p>
                        </div>
                    </div>
                </section>
                <section style={{ margin: '6rem 0', textAlign: 'center' }}>
                    <Container style={{ width: '80%' }}>
                        <h2 style={{ marginBottom: '1rem' }}>About this Site</h2>
                        <div className="lead">
                            <p>
                                Designed with the intention of bringing the community together, the Washington Ultimate Database provides players an easy way to connect with
                                others for practice and sharing information.
                            </p>
                            <p><Link to="/signin">Sign in</Link> or <Link to="/signup">sign up</Link> to add yourself to the <Link to="/database">database</Link> and start connecting with other players.</p>
                        </div>
                    </Container>
                </section>
                <section>
                    <CarourselPictures></CarourselPictures>
                </section>
                <h2 style={{ margin: '1rem' }}>Recent News</h2>
                {this.state.posts &&
                    <section id="news-area">
                        {this.state.posts.map((post, i) => {
                            return (
                                <div className="post" key={"post" + i}>
                                    <Card>
                                        <CardBody>
                                            <CardTitle>{post.content.title}</CardTitle>
                                            {post.content.author && <CardSubtitle className="mb-3"><span style={{ fontWeight: 'bold' }}>Author:</span> {post.content.author}</CardSubtitle>}
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
                            )
                        })
                        }
                    </section>
                }
            </React.Fragment>
        );
    }

}

export default MainPage;