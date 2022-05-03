import React,{useState} from 'react';
import Todoitems from './ToDoItems';

const Todolist = () => {

    const deleteItems = (id) =>{
       setItems((olditems) => {
           return olditems.filter((arrElm, index)=>{
            return index !== id;
        })
       })
    }

    const [value, setvalue] = useState("");
    const [items,setItems] = useState([]);

    const myValue = (e) =>{
        setvalue(e.target.value);
    }
    const changeVal = () =>{
        setItems((olditems) => {
            return [...olditems,value];
        })
        setvalue("");
    }

    return (
        <>
          <div className='main_div'>
              <div className='center_div'>
                  <br />
                  <h1>ToDo List</h1>
                  <br />
                  <div style={{display:"flex",padding:"20px"}}>
                <input type="text" placeholder='add items' value={value} onChange={myValue}/>
                <button onClick={changeVal}>+</button>
</div>  
                <ol>
                    {/* <li>{value}</li> */}
                   { items.map((itemsval,index) => {
                        return <Todoitems text={itemsval} key={index} id={index} onSelect={deleteItems}/>
                    })}
                </ol>
              </div>
          </div>  
        </>
    );
}

export default Todolist;
