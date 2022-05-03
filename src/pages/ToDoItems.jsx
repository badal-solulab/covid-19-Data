import React from 'react';

const Todoitems = (props) => {

  
    return (
        <>
        <div style={{display:"flex"}}>
        <p style={{cursor:"pointer",width:"30px",backgroundColor:"red",color:"#fff",borderRadius:"50%",textAlign:"center"}} onClick={()=>{
            props.onSelect(props.id);
        }}>X</p>
        <li>{props.text}</li> 
        </div>
        </>
    );
}

export default Todoitems;
