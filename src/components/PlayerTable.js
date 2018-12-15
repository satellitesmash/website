import React, { Component } from 'react';
import { Table, Label, Input, Form, FormGroup, Pagination, PaginationItem } from 'reactstrap';
import FilteredTable from './FilteredTable';
import CreatePages from './CreatePages';

class PlayerTable extends Component {

    constructor() {
        super();
        this.state = {
            filteredArray: null,
            fullFilteredArray: null,
            filterType: 'displayName',
            perPage: 10,
            arrayStart: 0
        }
    }

    pageChange = (type, value) => {
        if (type === "increase") {
            if (this.state.arrayStart < this.props.players.length - 1) {
                let newPage = this.state.arrayStart + this.state.perPage;
                this.setState({ 
                    arrayStart: newPage,
                    filteredArray: this.props.players.slice(newPage, newPage + this.state.perPage)
                });
            }
        } else if (type === "jump") {
            console.log(value);
            let start = value * this.state.perPage;
            this.setState({
                arrayStart: start,
                filteredArray: start + this.state.perPage 
            });
        } else if (type === "decrease") {
            if (this.state.arrayStart - this.state.perPage >= 0) {
                let newPage = this.state.arrayStart - this.state.perPage;
                this.setState({ 
                    arrayStart: newPage,
                    filteredArray: newPage === 0 && this.state.filterString ? null : this.props.players.slice(newPage, newPage + this.state.perPage) 
                });
            }
        }
    }

    filterArray = (filterString) => {
        if (filterString !== "") {
            let filtered = this.props.players.filter((info) => {
                let value = info.data[this.state.filterType].toLowerCase();
                return value.includes(filterString.toLowerCase());
            });
            this.setState({
                filteredArray: filtered,
                filterString: filterString,
                filterType: this.state.filterType,
                arrayStart: 0
            });
        } else {
            this.setState({
                filteredArray: null,
                filterString: null
            })
        }

    }

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <Form inline>
                    <Label style={{ margin: '1rem' }}>Filter</Label>
                    <Input type="text" id="filter" onChange={(event) => this.filterArray(event.target.value)} placeholder="Enter filter term"></Input>
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
                    <FilteredTable players={this.state.filteredArray || this.props.players.slice(this.state.arrayStart, this.state.arrayStart + this.state.perPage)}></FilteredTable>
                </Table>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem onClick={() => this.pageChange("decrease")}>
                            <span className="page-link" aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </PaginationItem>
                        <CreatePages perPage={this.state.perPage} array={this.state.filteredArray || this.props.players} pageChange={this.pageChange}></CreatePages>
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