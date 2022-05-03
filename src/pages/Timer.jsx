import React,{useState} from 'react';


const Timer = () => {

    // const count = "";
    
    let newTime = new Date().toLocaleTimeString();
    
    const [oldtime, setTime] = useState(newTime);

    const updatedTime = () =>{
    let updatedTime = new Date().toLocaleTimeString();
    setTime(updatedTime);
    }
  
    setInterval(updatedTime,1000)
    return (
        <>
        <div className='Child_Box'>
           <h1>{oldtime}</h1> 
           {/* <button onClick={updatedTime}>Get Date</button> */}
           </div>
        </>
    );
}

export default Timer;
