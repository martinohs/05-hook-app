import React, { useEffect } from "react";  

export const Message = () => {

    useEffect(() => {
        //! Debo tener cuidado ya que el efecto se acumula por cada vez que lo rehuso
        //Efecto
        console.log('componente montado');
    
      return () => {
          //limpieza
        console.log('componente desmontado');
      }
    }, [])
    

    return (
        <>
            <h3>Eres genial</h3>
        </>
    )
}