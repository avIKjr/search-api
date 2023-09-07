import React from "react";

class Product extends React.Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <h1>Product {id}</h1>
      </div>
    );
  }
}
export default Product;
