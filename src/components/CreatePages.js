import React, { Component } from 'react';
import { PaginationItem } from 'reactstrap';

class CreatePages extends Component {

    render() {
        let pages = [];
        for (let i = 0; i <= this.props.toMake; i++) {
            pages.push(
                <PaginationItem active={i === this.props.activePage} key={"page" + (i + 1)} onClick={() => this.props.pageChange("jump", i)}>
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