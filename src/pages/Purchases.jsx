import { useEffect, useState } from 'react';
import axios from "axios"
import getConfig from "../helpers/getConfig";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';


const Purchases = () => {
    const [purchases, setPurchases]=useState([])
    useEffect(()=>{
        axios
            .get("https://e-commerce-api-v2.academlo.tech/api/v1/purchases", getConfig())
            .then(resp=>setPurchases(resp.data))
            .catch(error=>console.error(error))
    },[])
    console.log(purchases)
    return (
        <div>
               <h1>Historial de Compras Realizadas</h1>
               <Container>
                <Row xs={1} md={2} lg={3} xl={4}>
                    {
                        purchases.map(productItem=>(
                            <Col key={productItem.id}>
                                <Card >
                                    <Card.Body>
                                        <Card.Title>{productItem?.product?.title}</Card.Title>
                                        <Card.Img variant="top" src={productItem?.product?.images?.[0]?.url} style={{height: 200, objectFit: "cover"}}/>
                                        <h6><span>Fecha de compra: </span>{productItem.createdAt.substring(0, 10)}</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                        ))
                    }
                    
                </Row>
              </Container>
        </div>
    );
};

export default Purchases;
