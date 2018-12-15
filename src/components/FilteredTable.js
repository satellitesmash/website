import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class FilteredTable extends Component {

    render() {
        return (
            <tbody>
                {this.props.players.map((info, i) => {
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
        );
    }
}

export default FilteredTable;
