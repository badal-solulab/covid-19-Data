import React, {useEffect,useState} from 'react';

const CovidData = () => {

    const [data, setdata] = useState([]);

    const getCovidData = async () =>{
        const res= await fetch("https://data.covid19india.org/data.json");
        const actuallData =await res.json();
        // console.log(Object.keys(actuallData.GJ.districts));
        // setdata(actuallData.GJ.districts);
        console.log(actuallData.statewise);
        setdata(actuallData.statewise);
    } 

    useEffect(() => {
      getCovidData();
    }, []);

    return (
        <>
         <h1 className='text-center'>
            Actually Covid-19 Data
          </h1>   
        <div className='container'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Active</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Death</th>
    </tr>
  </thead>
  <tbody>
        {
            data.map((currentEle,index)=>{
                return(
                    <tr key={index}>
      <th scope="row">{currentEle.state}</th>
      <td>{currentEle.confirmed}</td>
      <td>{currentEle.deaths}</td>
    </tr>
                )
            })
        }
 
     </tbody>
</table>
        </div>
        </>
    );
}

export default CovidData;
