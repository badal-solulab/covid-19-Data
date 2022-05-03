import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Pikachu = () => {

    const [names, setnames] = useState();
    const [moves, setMoves] = useState();
    const [num, setnum] = useState();

    useEffect(() => {
      const getData = async() => {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        //  console.log(res.data.name);
         setnames(res.data.name);
         setMoves(res.data.moves.length);
      }
      getData();
    });

    

    return (
        <>
     <h1>I Select <span className='text-danger font-weight-bold '>{num} Value</span></h1>
     <h1>My name is <span className='text-danger font-weight-bold'>{names}</span></h1>
     <h1>I Have <span className='text-danger font-weight-bold '>{moves}</span> moves</h1>
     <select value={num} onChange={(e)=>{
         setnum(e.target.value);
     }}>
         <option value="1">1</option>
         <option value="25">25</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
     </select>
        </>
    );
}

export default Pikachu;
