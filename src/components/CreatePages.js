import React, { Component } from 'react';
import { PaginationItem } from 'reactstrap';

class CreatePages extends Component {

    render() {
        console.log(this.props);
        console.log(this.state);
        let pages = [];
        for (let i = 0; i < (this.props.array.length / this.props.perPage); i++) {
            pages.push(
                <PaginationItem key={"page" + (i + 1)} onClick={() => this.props.pageChange("jump", i + 1)}>
                    <span className="page-link">
                        {i + 1}
                    </span>
                </PaginationItem>
            );
        }
        return pages;
    }

}

export default CreatePages;