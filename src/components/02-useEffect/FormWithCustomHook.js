import React from "react";
import { useForm } from "../../hooks/useForm";
import './effects.css';


export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password:''
    });
    
    const { name, email, password } = formValues;

    const handleSubmit = ( event ) => {
        event.preventDefault();

        console.log(formValues);
    }

    return (
        <form onSubmit={ handleSubmit }>
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

            <div className="form-group">

                <input 
                    type="password" 
                    name="password" 
                    className="form-control" 
                    placeholder="*********" 
                    autoComplete="off" 
                    value={ password } 
                    onChange={handleInputChange}
                ></input>

            </div>
            
            <button type="submit" className="btn bnt-primary">
                Guardar
            </button>

        </form>
    )
}