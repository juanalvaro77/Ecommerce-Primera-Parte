import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/Purchases.slice';

const CartRSide = ({show, handleClose}) => {
    const dispatch=useDispatch()
    const purchases = useSelector(state=>state.purchases)
    console.log("🚀 ~ file: CartRSide.jsx:11 ~ CartRSide ~ purchases:", purchases)
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
                                <li key={item.id}>
                                    Articulo Seleccionado
                                </li>
                            ))

                        }

                    </ul>
                    
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
};

export default CartRSide;