import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk, cartCheckoutThunk, deleteProductFromCartThunk } from '../store/slices/Purchases.slice';

const CartRSide = ({show, handleClose}) => {
    const dispatch=useDispatch()
    const purchases = useSelector(state=>state.purchases)
    
    useEffect(()=>{
        dispatch(getPurchasesThunk())

    },[])
    
    return (
        <div>
            <Offcanvas show={show} onHide={handleClose} placement='end' >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Productos Agregados</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        {
                            purchases.map(item => (
                                <li key={item.id} style={{border: "0.5px solid gray", marginBottom: "1rem"}}>
                                    <h3>{item.product?.title}</h3>
                                    <img style={{width: 70}} src={item.product?.images?.[0]?.url} alt="" />
                                    <br /><Button>-</Button>  {item.quantity}<Button>+</Button>
                                    <h3><span>Valor Total: </span>$ {item.quantity*item.product?.price}</h3>
                                    <Button onClick={()=>dispatch(deleteProductFromCartThunk(item.id))}>Eliminar</Button>
                                </li>
                            ))

                        }

                    </ul>
                    <Button onClick={()=>dispatch(cartCheckoutThunk())}>Comprar</Button>
                </Offcanvas.Body>
            </Offcanvas>
            
        </div>
    );
};

export default CartRSide;