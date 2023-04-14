import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Container } from 'react-bootstrap';
import { createPurchaseThunk } from '../store/slices/Purchases.slice';
import { useDispatch } from 'react-redux';

const ProductDetail = () => {
    const {id} = useParams()
    const [productDetail, setProductDetail] =  useState({})
    const [quantity,setQuantity] = useState(1)
    const dispatch=useDispatch()
    useEffect(()=>{
        axios
            .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(resp=>setProductDetail(resp.data))
            .catch(error=>console.error(error))
    },[])

    const addProduct = () => {
        const data = {
            productId: id,
            quantity: quantity
        }
        dispatch(createPurchaseThunk(data))
        alert("Articulo agregado al carro de compras")
    }
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
                                    <Button onClick={()=> quantity===1? quantity : setQuantity(quantity-1)}>-</Button>
                                        {quantity}
                                    <Button onClick={()=> setQuantity(quantity+1)}>+</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                            <Button variant="primary" className='mx-1' onClick={addProduct}>Agregar</Button>
                        
            </div>
        </div>
    );
};

export default ProductDetail;