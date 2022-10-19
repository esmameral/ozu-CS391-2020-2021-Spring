import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Product from '../Product';

export default class ProductTable extends React.Component {

    render() {
        const { data } = this.props;
        
        return (
            <Container>
                <Row>
                    {data.map((item, index) => {
                        return (
                            <Col key={`product-${index}`} sm="6" md="4" lg="2" >
                                <Product product={item}></Product>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }
}