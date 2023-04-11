    import React from 'react';
    import Container from 'react-bootstrap/Container';
    import Row from "react-bootstrap/Row";
    import Col from "react-bootstrap/Col";
    import Button from 'react-bootstrap/Button';
    import Card from 'react-bootstrap/Card';
    import {useSelector, useDispatch} from "react-redux";
    import { filterCategoriesThunk, filterNameThunk, getProductsThunk } from '../store/slices/products.slice';
    import { useEffect, useState } from 'react';
    import axios from "axios"
    import Form from 'react-bootstrap/Form';
    import InputGroup from 'react-bootstrap/InputGroup';
    import {Link} from "react-router-dom"


    const Home = () => {
        const products=useSelector(state=>state.products)
        const dispatch=useDispatch()
        const [categories, setCategories] = useState([])
        const [searchByInput, setSearchByInput] = useState("")
        useEffect(()=>{
            dispatch(getProductsThunk())
            axios
                .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
                .then(resp=>setCategories(resp.data))
                .catch(error=>console.error(error))
        },[])

        return (
            <div>
              <h1 className="tittle">ESTE ES EL HOME</h1>
              <Container>
                <Row className="py-1">{
                    categories.map(category=>(
                        <Col key={category.id}>
                            <Button
                                onClick={()=>dispatch(filterCategoriesThunk(category.id))} 
                                className="w-100">
                                    {category.name}
                            </Button>
                        </Col>))
                    }
                    <Col>
                        <Button className='w-100' onClick={()=>dispatch(getProductsThunk)}>
                            All Products
                        </Button>
                    </Col>
                    
                </Row>
                <Row className="py-1">
                    <Col>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Articulo"
                                aria-label="Articulo"
                                aria-describedby="basic-addon2"
                                value={searchByInput}
                                onChange={e=>setSearchByInput(e.target.value)}
                            />
                            <Button
                                onClick={()=>dispatch(filterNameThunk(searchByInput))} 
                                
                            variant="outline-primary" id="button-addon2">
                                BUSCAR
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={3} xl={4}>
                    {
                        products.map(productItem=>(
                            <Col key={productItem.id}>
                                <Card >
                                    <Card.Img variant="top" src={productItem.images?.[0]?.url} style={{height: 200, objectFit: "cover"}}/>
                                    <Card.Body>
                                        <Card.Title>{productItem.title}</Card.Title>
                                        <Card.Text className="descrption" >{productItem.description.substring(0, 100)}</Card.Text>
                                        <Button variant="primary" className='mx-1'>Agregar</Button>
                                        <Button
                                            as={Link} 
                                            to={`/products/${productItem.id}`} 
                                            variant="primary" 
                                            className='mx-1'>
                                                Detalles
                                        </Button>
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
    
    export default Home;