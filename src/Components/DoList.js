import React from 'react';
import './test2.css'

function DoList(props) {
  return (
  <div className='item-container'>
      { props.items.map( (value,index)=>{
          return (
              <React.Fragment key={index}>
                  <span className='card-item'>
                      <span className="card-name" onClick={props.strokeItem}>  {value} </span>
                  <span className='close-key'> <button className='closeX' onClick={ ()=>{ props.delDoItem(index) } }> X </button></span>
                  </span>
              </React.Fragment>
          )
      } )   }

  </div>
  )
}

export default DoList;

