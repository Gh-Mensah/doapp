import React, { Component } from 'react';
import DoList from './DoList';
import './test.css'

class ToDoApp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       inputData:"",
       itemList:[]
    }
  }

  changeInputHandler = (e) =>{
    this.setState({
      inputData:e.target.value
    })
  }

  submitDoItemHandler = (e) =>{
    e.preventDefault()
    if (this.state.inputData !== "") {
      let newTodoItems=[...this.state.itemList,this.state.inputData]
      this.setState({
      itemList:newTodoItems,
      inputData:""
    })
  }
  }

  deleteItemHandler =(index,e) =>{
    let doItems=[...this.state.itemList];
    let newTodoItems= doItems.filter( (value,key) => {
      return index !== key
    } )
    this.setState({
      itemList:newTodoItems
    })
  }

 strokeHandler = (e) => {
   if (e.target.className === "card-name")
   {
     e.target.className="card-completed";
   }else{
    e.target.className="card-name";
   }

  }



      render() {
        return (
        <>
        <h1><span>T</span>o<span>D</span>o</h1>
        <form onSubmit={this.submitDoItemHandler} className="submitField" >
          <div className='flex-container'>
          <input
          id='item1'
          type="text"
          autoFocus
          placeholder='Something on your mind...'
          onChange={this.changeInputHandler}
          value={this.state.inputData}/>
          <button id="item2"  type='submit'>+</button>
          </div>
        </form>
        { this.state.itemList.length === 0? 
        (<>
        <div className='list-container'><div className='userMessage'> <span className='oopsbox'>Oops</span><span className='nothingbox'>Nothing</span> <span className='dobox'>ToDo </span> <span className='herebox'>Here...</span> <span className='loginfo'> Try typing what to do in the input bar...</span>  </div></div>
        <div id="tright"></div>
        <div id="tleft"></div>
        <div id="bleft"></div>
        <div id="bright"></div>
  </>
        ):
        (
          <>
        <div className='list-container'>
        <DoList items={this.state.itemList}  delDoItem={this.deleteItemHandler}  strokeItem={this.strokeHandler}  />
        </div>
        <div id="tright"></div>
        <div id="tleft"></div>
        <div id="bleft"></div>
        <div id="bright"></div>
        </>) }
        </>
        )
      }
    }
export default ToDoApp;