// index.component.js

import React, { Component } from 'react';
import axios from 'axios';
// import TableRow from './TableRow';

export default class Index extends Component {


    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/post/info')
            .then(response => {
                this.setState({ posts: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        // return this.state.posts.map(function (object, i) {
        //         return <TableRow obj={object} key={i} />;
        // }); 
    }


    render() {
        const halfwayPoint = 25; // || Math.floor(this.state.posts.length / 2);
        console.log(halfwayPoint);
        const columnA = this.state.posts.splice(0, halfwayPoint);
        const columnB = this.state.posts.splice(halfwayPoint);
        const styleLeft = {
            flex: '50%',
            padding: '10px',
            // background: '#aaa'

        };
        const styleRight = {
            flex: '50%',
            padding: '10px',
            // background: '#bbb'
        };
        const row = {
            display: 'flex'
        };

        return (
            <div style={row}>
                <div style={styleLeft}>
                    {columnA.map((item, i) => {
                        console.log(item);
                        return (
                            <div key={i}>
                                <table border='1' align="right">
                                    <tr>
                                        <td>
                                            Title: {item.title}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Author: {item.author}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Body: {item.body}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        )
                    })
                    }
                </div>
                <div style={styleRight}>
                    {columnB.map((item, i) => {
                        return (
                            <div key={i}>
                                <table border='1' align="right">
                                    <tr>
                                        <td>
                                            Title: {item.title}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Author: {item.author}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Body: {item.body}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )

    }
}