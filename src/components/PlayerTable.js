import React, { Component } from 'react';
import { Table, Label, Input, Form, FormGroup, Pagination, PaginationItem } from 'reactstrap';
import FilteredTable from './FilteredTable';
import CreatePages from './CreatePages';

export default class PlayerTable extends Component {

    constructor() {
        super();
        this.state = {
            filteredArray: null,
            filterType: 'displayName',
            filterString: '',
            perPage: 10,
            activePage: 0,
            arrayStart: 0
        }
    }

    pageChange = (type, value) => {
        if (type === "increase") {
            if (this.state.arrayStart + this.state.perPage < this.state.fullFilteredArray.length - 1) {
                let newPage = this.state.arrayStart + this.state.perPage;
                this.setState({
                    arrayStart: newPage,
                    filteredArray: this.props.players.slice(newPage, newPage + this.state.perPage),
                    activePage: this.state.activePage + 1
                });
            }
        } else if (type === "jump") {
            let start = value * this.state.perPage;
            this.setState({
                arrayStart: start,
                filteredArray: this.state.fullFilteredArray.slice(start, start + this.state.perPage),
                activePage: value,
            });
        } else if (type === "decrease") {
            if (this.state.arrayStart - this.state.perPage >= 0) {
                let newPage = this.state.arrayStart - this.state.perPage;
                this.setState({
                    arrayStart: newPage,
                    filteredArray: newPage === 0 && this.state.filterString ? null : this.props.players.slice(newPage, newPage + this.state.perPage),
                    activePage: this.state.activePage - 1
                });
            }
        }
    }

    componentDidMount() {
        this.setState({
            filteredArray: this.props.players.slice(0, 10),
            fullFilteredArray: this.props.players
        });
    }

    filterArray = (filterString, perPage = this.state.perPage, type = this.state.filterType) => {
        if (filterString !== "") {
            let filtered = this.props.players.filter((info) => {
                let value = info.data[type].toLowerCase();
                return value.includes(filterString.toLowerCase());
            });
            this.setState({
                filteredArray: filtered,
                fullFilteredArray: filtered,
                filterString: filterString,
                filterType: this.state.filterType,
                arrayStart: 0,
                activePage: 0
            });
        } else {
            this.setState({
                filteredArray: this.props.players.slice(0, perPage),
                fullFilteredArray: this.props.players,
                filterString: '',
                activePage: 0
            })
        }

    }

    render() {
        return (
            <React.Fragment>
                {this.state.filteredArray &&
                    <React.Fragment>
                        <Form inline>
                            <Label style={{ margin: '1rem' }}>Filter</Label>
                            <Input type="text" id="filter" onChange={(event) => this.filterArray(event.target.value)} placeholder="Enter filter term"></Input>
                            <FormGroup>
                                <Label style={{ margin: '1rem' }} for="playerSelect">Players per page</Label>
                                <Input type="select" onChange={(event) => {
                                    this.setState({ perPage: event.target.value });
                                    this.filterArray(this.state.filterString, event.target.value);
                                }} name="select" id="playerSelect">
                                    <option>10</option>
                                    <option>25</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ margin: '1rem' }} for="filterSelect">Filter Type</Label>
                                <Input type="select" onChange={(event) => {
                                    this.setState({ filterType: event.target.value, arrayStart: 0 });
                                    this.filterArray(this.state.filterString, this.state.perPage, event.target.value);
                                }} name="select" id="playerSelect">
                                    <option value="displayName">Tag</option>
                                    <option value="region">Region</option>
                                    <option value="main">Main</option>
                                    <option value="secondary">Secondary</option>
                                    <option value="twitter">Twitter</option>
                                </Input>
                            </FormGroup>
                        </Form>
                        <div id="database-table">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tag</th>
                                        <th>Region</th>
                                        <th>Main</th>
                                        <th>Secondary</th>
                                        <th>Twitter</th>
                                    </tr>
                                </thead>
                                <FilteredTable players={this.state.filteredArray}></FilteredTable>
                            </Table>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Pagination aria-label="Page navigation example">
                                <PaginationItem onClick={() => this.pageChange("decrease")}>
                                    <span className="page-link" aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </PaginationItem>
                                <CreatePages toMake={(this.state.fullFilteredArray.length / this.state.perPage)} activePage={this.state.activePage} pageChange={this.pageChange}></CreatePages>
                                <PaginationItem onClick={() => this.pageChange("increase")}>
                                    <span className="page-link" aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </PaginationItem>
                            </Pagination>
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }

}