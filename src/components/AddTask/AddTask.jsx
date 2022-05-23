import React,{useState} from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  let [items,setItem] = useState("")
  let [data,setData] = useState([])

  const addItem = () =>{
    if(! items){

    }else{
      setData([...data,items])
      setItem("")
    }
  }

  const deleteItem = (id) => {
    const updatedItems = data.filter((elem,ind)=>{
      return ind !== id;
    })
    setData(updatedItems);
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="...Add items" value={items} onChange={(e) => setItem(e.target.value)} />
      <button data-cy="add-task-button" onClick={addItem}>Add items</button>

      {/* <div className="showItem"> */}
        {
          data.map((elem,ind)=>{
            return(
              <div className="eachItem" key={ind}>
                <h3>{elem}
                <i className="far fa-trash-alt addbtn" title="DeleteItem" onClick={() => deleteItem(ind)}></i></h3>
                </div>
            )
          })
        }
      </div>
    // </div>
    
  );
};

export default AddTask;
