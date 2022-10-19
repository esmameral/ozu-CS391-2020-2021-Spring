
import bag from '../../images/bag.jpg';
import camera from '../../images/camera.jpg';
import shoe from '../../images/shoe.jpg';
import tablet from '../../images/tablet.jpg';
import toy from '../../images/toy.jpg';
import watch from '../../images/watch.jpg';
import { Container, Row, Col } from 'reactstrap';

const Table = () => {
    return (
        <Container> 
            <Row>
                <Col sm="6" md="4"  lg="2"><img src={bag} alt="bag" /></Col>
                <Col sm="6" md="4"  lg="2"><img src={camera} alt="camera" /></Col>
                <Col sm="6" md="4"  lg="2"><img src={shoe} alt="shoe" /></Col>
                <Col sm="6" md="4"  lg="2"><img src={tablet} alt="tablet" /></Col>
                <Col sm="6" md="4"  lg="2"><img src={toy} alt="toy" /></Col>
                <Col sm="6" md="4"  lg="2"><img src={watch} alt="watch" /></Col>
            </Row>
        </Container>
    );
}

export default Table;