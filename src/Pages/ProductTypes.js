import Card from 'react-bootstrap/Card';
import { GridCards } from '../Styles/General.styles';
import { ProductTypesData } from '../Data/ProductTypesData';
import { useNavigate } from "react-router-dom";

export default function ProductTypes() {
    const navigate = useNavigate();

    const GetProductsType = (productType) => {
        navigate(`/products/${productType}`);
    }

    return (
        <>
            <GridCards>
                { ProductTypesData().map((item, idx) => (
                    <Card key={ idx } onClick={ () => GetProductsType(item.id) }>
                        <Card.Body>
                            <Card.Title>{ item.name }</Card.Title>
                        </Card.Body>
                        <Card.Img variant="top" src={ item.urlImg } />
                    </Card>
                )) }
            </GridCards>
        </>
    );
}
