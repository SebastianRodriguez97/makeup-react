import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ProductColors from './ProductColors';
import { ModalInfo, PriceLabel } from '../Styles/General.styles';
import ProductTags from './ProductTags';

export default function ProductDetailModal({ item, showModal, closeModal }) {
    const [show, setShow] = useState(showModal);

    const handleClose = () => {
        setShow(false);
        closeModal();
    };

    return (
        <>
            <Modal show={ show } onHide={ handleClose } centered dialogClassName="mk-modal-w75">
                <Modal.Header closeButton>
                    <Modal.Title>{ item.name }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col sm={ 4 }>
                                <Card.Img variant="top" src={ item.api_featured_image } alt="No Image" />
                            </Col>
                            <Col sm={ 8 }>
                                <ModalInfo>
                                    <div dangerouslySetInnerHTML={ { __html: item.description } }></div>
                                    { item.product_colors.length > 0 &&
                                        <div>
                                            <b>Colors:</b>
                                            <ProductColors colors={ item.product_colors } />
                                        </div>
                                    }
                                    <div style={ { textTransform: 'capitalize' } }>
                                        <b>Brand: </b>{ item.brand }
                                    </div>
                                    { item.category !== "" &&
                                        <div style={ { textTransform: 'capitalize' } }>
                                            <b>Category: </b>{ item.category }
                                        </div>
                                    }
                                    <div>
                                        <PriceLabel>
                                            <b>Price: </b>
                                            { item.price_sign } { item.price }
                                        </PriceLabel>
                                    </div>
                                    <div>
                                        <ProductTags tags={ item.tag_list } />
                                    </div>
                                    <div>
                                        <a href={ item.product_link } target="_blank" rel='noreferrer'>More info ...</a>
                                    </div>
                                </ModalInfo>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal >
        </>
    );
}