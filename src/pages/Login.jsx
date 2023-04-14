import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useForm} from "react-hook-form";
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Login = () => {
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const submit = data =>{
     console.log(data)
     axios
        .post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login", data)
        .then(resp=>{
            localStorage.setItem("token",resp.data.token)
            navigate("/")
            console.log("🚀 ~ file: Login.jsx:18 ~ submit ~ resp.data.token:", resp.data.token)
 
        })
        .catch(error=>{
            if(error.response?.status===401){
                alert("Usuario o contraseña incorrectos")
            }else{
                console.error(error.response?.data);
            }
        })   
    }
    return (
        <div>
           <Form
            onSubmit={handleSubmit(submit)}
            style={{maxWidth: 500, margin: "1rem auto", border: "1px solid black", padding: "1rem"}}
           >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese Correo" {...register("email")}/>
                    <Form.Text className="text-muted">
                        Nunca compartiremos su informacion.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese contraseña" {...register("password")} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>
    );
};

export default Login;



