import Placeholder from 'react-bootstrap/Placeholder';
import { GridCards, Backdrop, PlaceholderGlow } from '../Styles/General.styles';
import Card from 'react-bootstrap/Card';

export default function CardLoading({ img }) {
    let items = [];

    if (Array.isArray(img)) {
        items = img;
    } else {
        items = Array.from({ length: 10 });
    }

    return (
        <>
            <GridCards>
                {
                    items.map((imgItem, idx) => (
                        <Card key={ idx } >
                            <PlaceholderGlow>
                                <Card.Img variant="top" src={ imgItem ?? img } />
                            </PlaceholderGlow>
                            <Card.Body>
                                <Placeholder as={ Card.Text } animation="glow">
                                    <Placeholder xs={ 7 } /> <Placeholder xs={ 4 } />
                                    <Placeholder xs={ 6 } /> <Placeholder xs={ 8 } />
                                </Placeholder>
                            </Card.Body>
                        </Card>
                    ))
                }
            </GridCards >
            <Backdrop>
                {/* <div className="d-flex justify-content-center align-items-center vh-100">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div> */}
            </Backdrop>
        </>
    );
}