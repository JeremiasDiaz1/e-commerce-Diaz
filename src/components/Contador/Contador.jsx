import React, {useState} from 'react'



const HookState = () => {

    const [contador, setContador]= useState(1)
    
    function sumar(){
        setContador(contador + 1)
        if(contador === 5){
            setContador(contador === 5)
        }
    }
    <itemCount stock="5" initial="1"/>
    
    function restar(){
        if(contador > 1){
            setContador(contador - 1)

        }

    }
    

    return(
        <div style={{
            display:"flex", 
            margin:"50px 0", 
            width:"500px", 
            justifyContent:"space-arround"
            }}>
        
        <button onClick={restar}>restar 1</button>
        
        <h1>contador : {contador}</h1> 
       

        <button onClick={sumar}>sumar 1</button>



        </div>
    )

}

export default HookState