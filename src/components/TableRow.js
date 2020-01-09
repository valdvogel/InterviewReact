import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.author}
          </td>
          <td>
            {this.props.obj.body}
          </td>
        </tr>
    );
  
  }
}

export default TableRow;