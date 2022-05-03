import React,{useState} from 'react';

const Inputbox = () => {

    const [intvalue, updvalue] = useState("");
    const [fullValue, setfullValue] = useState();
    
    const MyInput = (e) =>{
       let finalval = e.target.value;
        updvalue(finalval);
    }
    const updatedMainValue = (e) =>{
        e.preventDefault();
        setfullValue(intvalue);
    }

    return (
        <div>
        <form onSubmit={updatedMainValue}>
            <h1>HELLO {fullValue}</h1>
            <input type="text" placeholder="Enter your name" onChange={MyInput} value={intvalue}/>
            <button className='Mybtn' type='submit'>Change</button>
        </form>
        </div>
    );
}

export default Inputbox;
