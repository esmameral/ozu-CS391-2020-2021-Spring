import React from 'react';
import { Media, Button } from 'reactstrap';


export default class Product extends React.Component {

    render() {
        const { product } = this.props;
        const baseUrl = '/images/';
        return (
            <Media>
                <Media left top>
                    <Media object src={baseUrl + product.img + ".jpg"} alt={product.alt} />
                </Media>
                <Media body>
                    <Media heading>
                        {product.name}
                    </Media>
                    <p>{product.description}</p>
                    <p><Button color="success">Add to Cart</Button></p>

                </Media>
            </Media>
        );
    }
}