import { GetAllProducts, GetProductsByType } from "../Services/Service";
import Card from 'react-bootstrap/Card';
import { GridCards, PriceLabel } from '../Styles/General.styles';
import { useParams } from 'react-router-dom';
import ProductDetailModal from "../Components/ProductDetailModal";
import { useEffect, useState, useRef } from "react";
import ProductTags from "../Components/ProductTags";
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import CardLoading from "../Components/CardLoading";
import { ProductTypesData } from '../Data/ProductTypesData';

export default function Products() {
    const [showProductDetailModal, setShowProductDetailModal] = useState(false);
    const [itemSelected, setItemSelected] = useState(null);
    const [productsFiltered, setProductsFiltered] = useState(null);
    const [loading, setLoading] = useState(false);
    const textFilterRef = useRef(null);

    let { productType } = useParams();
    let products;

    if (productType)
        products = GetProductsByType(productType);
    else
        products = GetAllProducts();

    const filterProducts = () => {
        setLoading(true);
        let productsFilter;
        let filterValue = textFilterRef.current.value.toLowerCase();

        if (filterValue.trim() === "")
            productsFilter = products.result;
        else
            productsFilter = products.result.filter(x =>
                x.name.toLowerCase().includes(filterValue) ||
                x.brand?.toLowerCase().includes(filterValue) ||
                x.price?.toLowerCase().includes(filterValue) ||
                x.tag_list.find(t => t.toLowerCase().includes(filterValue))
            );

        setProductsFiltered(productsFilter);
    }

    useEffect(() => {
        if (!products.error && !products.loading && products.result && productsFiltered == null) {
            setProductsFiltered(products.result);
        }
        setLoading(false);
    }, [products, productsFiltered]);

    const GetLoadingCardImage = () => {
        if (productType)
            return ProductTypesData().find(x => x.id === productType)?.urlImg;
        else
            return ProductTypesData().map((item) => (item.urlImg))
    }

    const ProductDetailModalHandle = (item) => {
        setShowProductDetailModal(true);
        setItemSelected(item);
    }

    const CloseProductDetailModal = () => {
        setShowProductDetailModal(false);
        setItemSelected(null);
    }

    return (
        <>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search your product"
                    className="me-2"
                    aria-label="Search"
                    ref={ textFilterRef }
                    onKeyUp={ filterProducts }
                />
            </Form>
            <br></br>

            { loading || !productsFiltered ?
                <CardLoading img={ GetLoadingCardImage() } />
                :
                (
                    productsFiltered.length > 0 ?
                        (
                            <GridCards>
                                { productsFiltered.map((item) => (
                                    <Card onClick={ () => ProductDetailModalHandle(item) } key={ item.id }>
                                        <Card.Img variant="top" src={ item.api_featured_image } alt="No Image" />
                                        <Card.Body>
                                            <Card.Title>{ item.name }</Card.Title>
                                            <div className="card-text">
                                                <b>{ item.brand }</b>
                                                <PriceLabel>
                                                    { item.price_sign } { item.price }
                                                </PriceLabel>
                                                <ProductTags tags={ item.tag_list } />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                )) }
                            </GridCards>
                        )
                        :
                        <Alert variant='primary'>
                            There are no data for this search!
                        </Alert>
                )
            }

            { itemSelected &&
                <ProductDetailModal item={ itemSelected } showModal={ showProductDetailModal } closeModal={ CloseProductDetailModal } />
            }
        </>
    );
}
