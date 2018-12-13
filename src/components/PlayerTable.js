import React, { Component } from 'react';
import { Table, Label, Input, Form, FormGroup, Pagination, PaginationItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class PlayerTable extends Component {

    constructor() {
        super();
        this.state = {
            filterStr: '',
            filterType: 'displayName',
            perPage: 10,
            arrayStart: 0
        }
    }

    pageChange = (type, value) => {
        if (type === "increase") {
            if (this.state.arrayStart < this.props.players.length - 1) {
                let newPage = this.state.arrayStart + this.state.perPage;
                this.setState({ arrayStart: newPage });
            }
        } else if (type === "jump") {
            this.setState({
                arrayStart: (value) * this.state.perPage
            });
        } else if (type === "decrease") {
            if (this.state.arrayStart - this.state.perPage >= 0) {
                let newPage = this.state.arrayStart - this.state.perPage;
                this.setState({ arrayStart: newPage });
            }
        }
    }

    render() {
        let pages = [];
        for (let i = 0; i < (this.props.players.length / this.state.perPage); i++) {
            pages.push(
                <PaginationItem key={"page" + (i + 1)} onClick={() => this.pageChange("jump", i)}>
                    <span className="page-link">
                        {i + 1}
                    </span>
                </PaginationItem>
            );
        }
        return (
            <React.Fragment>
                <Form inline>
                    <Label style={{ margin: '1rem' }}>Filter</Label>
                    <Input type="text" id="filter" onChange={(event) => this.setState({ filterStr: event.target.value })} placeholder="Enter filter term"></Input>
                    <FormGroup>
                        <Label style={{ margin: '1rem' }} for="playerSelect">Players per page</Label>
                        <Input type="select" onChange={(event) => this.setState({ perPage: event.target.value })} name="select" id="playerSelect">
                            <option>10</option>
                            <option>25</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label style={{ margin: '1rem' }} for="filterSelect">Filter Type</Label>
                        <Input type="select" onChange={(event) => this.setState({ filterType: event.target.value, arrayStart: 0 })} name="select" id="playerSelect">
                            <option value="displayName">Tag</option>
                            <option value="region">Region</option>
                            <option value="main">Main</option>
                            <option value="secondary">Secondary(s)</option>
                            <option value="twitter">Twitter</option>
                        </Input>
                    </FormGroup>
                </Form>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tag</th>
                            <th>Region</th>
                            <th>Main</th>
                            <th>Secondary(s)</th>
                            <th>Twitter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.players.slice(this.state.arrayStart, this.state.arrayStart + this.state.perPage).filter((info) => {
                            let value = info.data[this.state.filterType].toLowerCase();
                            return value.includes(this.state.filterStr.toLowerCase());
                        }).map((info, i) => {
                            let player = info.data;
                            return (
                                <tr key={"player" + i}>
                                    <th scope="row">{i + 1}</th>
                                    <td><Link to={`/player/${info.key}`}>{player.displayName}</Link></td>
                                    <td>{player.region}</td>
                                    <td>{player.main}</td>
                                    <td>{player.secondary}</td>
                                    <td><a href={`https://twitter.com/${player.twitter}`}>{player.twitter}</a></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem onClick={() => this.pageChange("decrease")}>
                            <span className="page-link" aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </PaginationItem>
                        {pages}
                        <PaginationItem onClick={() => this.pageChange("increase")}>
                            <span className="page-link" aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </PaginationItem>
                    </Pagination>
                </div>
            </React.Fragment>
        );
    }

}

export default PlayerTable;