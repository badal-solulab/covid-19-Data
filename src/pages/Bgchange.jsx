import React, {useState} from 'react';

const ClickTitle = "Click me for magic";
    const lightblue = "lightblue";
const Bgchanges = () => {

    const [bg, setbg] = useState(lightblue);
    const [Title,setTitle] = useState(ClickTitle);
    const bgChange = () => {
    let red = "purple";
    setbg(red);
    setTitle("Hurrah");
    }

const DoubleClick = () =>{
    setbg(lightblue);
    setTitle("Done");
}

    return (
        <div style={{backgroundColor:bg}}>

            <button onMouseEnter={DoubleClick} onMouseLeave={bgChange}>{Title}</button>
        </div>
    );
}

export default Bgchanges;
