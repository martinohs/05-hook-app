import React, { useEffect, useState } from "react";
import './effects.css';
import { Message } from "./Message";

//** useEffect es un hook que nos permite ejecutar un efecto secundario cuando algo suceda en nuestro componente*/
//** useEffect me retorna una funcion */
export const SimpleForm = () => {

    const [formState,setFormState] = useState({
        name: '',
        email:''
    });
    
    const { name, email } = formState;

    //Agregando el segundo argumento [] vacio, lo que logro es que el useEffect solo se dispare una vez
    //Sino se dispara cada vez que mi componente cambia
    //Estos corchetes son la dependencia, es decir lo que escucha el useEffect para ver si se dispara o no
    useEffect(() => {
        console.log('hey');
    },[])

    useEffect(() => {
        console.log('formState cambio');
    },[formState]) //Seteo a que dependencia escuchar

    useEffect(() => {
        console.log('email cambio');
    },[email]) //Email cambia
    

    //Desestructuro el event que viene
    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name] : target.value
        })

    }
    return (
        <>
            <h1>useEffect</h1>
            <div className="form-group">

                <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Tu nombre" 
                    autoComplete="off" 
                    value={name} 
                    onChange={handleInputChange}
                ></input>

            </div>

            <div className="form-group">

            <input 
                type="text" 
                name="email" 
                className="form-control" 
                placeholder="email@email.com" 
                autoComplete="off" 
                value={email} 
                onChange={handleInputChange}
            ></input>

            </div>

            { name === '123' && <Message></Message>  /** ES LO MISMO QUE UN IF TERNARIO, NO ME ACUERDO EL NOMBRE */} 
        </>
    )
}