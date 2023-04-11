import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Container } from 'react-bootstrap';


const ProductDetail = () => {
    const {id} = useParams()
    const [productDetail, setProductDetail] =  useState({})

    useEffect(()=>{
        axios
            .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(resp=>setProductDetail(resp.data))
            .catch(error=>console.error(error))
    },[])
    return (
        <div>
            <div className="viewOfDetails">
                <h1 className="viewOfDetails-title">{productDetail.title}</h1>
                <img className="viewOfDetails-img" src={productDetail.images?.[2]?.url} width={"250px"} alt="" />
                <h2>{productDetail.description}</h2>
            </div>
            <div className='footer'>
                            <h2><span>Precio: U$</span>{productDetail.price}</h2>
                            <ButtonToolbar aria-label="Toolbar with button groups">
                                <ButtonGroup className="me-2" aria-label="First group">
                                    <Button>-</Button>___0___<Button>+</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                            <Button variant="primary" className='mx-1'>Agregar</Button>
                        
            </div>
        </div>
    );
};

export default ProductDetail;