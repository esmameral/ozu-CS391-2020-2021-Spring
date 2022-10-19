import React from 'react';
class TableHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
    )
  }
}

export default TableHeader;
