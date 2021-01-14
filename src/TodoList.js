import React, { Component } from "react";

class TodoList extends Component {
  constructor(props){
    super(props)

    this.state= ({
      newItem: "",
      items : []
    })

    this.addItem = this.addItem.bind(this)
    this.updateInput=this.updateInput.bind(this)
    this.deleteItem= this.deleteItem.bind(this)
  }
  updateInput(key, value){
    this.setState({
      [key]: value
    })
  }

  addItem(){
    //create item with unique ID
    const newItem={
      id: 1+ Math.random(),
      value: this.state.newItem.slice()
    }

    //copy of the current list of items
    const items = [...this.state.items]

    //add new item to the items list that we already have
    items.push(newItem)

    //update state inside input field
    this.setState({
      items: items,
      newItem:""
    })
  }

  deleteItem(id){
    //copy of the current list of items
    const items = [...this.state.items]
    
    //filter out the item being deleted
    const updatedItemsList = items.filter(item => item.id == id) ;

    this.setState({
      items: updatedItemsList
    })
  }


  render() {
    return (
      <div >
        <h1 className="app-title"> My List </h1>
        <div className="container">
        <div className="inside-container">
        <br />
            <input 
            className="input-box"
            placeholder="enter new item" 
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)} 
            />
            <button 
            type="submit"
            onClick={()=> this.addItem()}
            className="add-btn"
            > 
            Add 
            </button>
          <ul className="all-items">
            {this.state.items.map(item =>
              {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button 
                        onClick={(id)=> this.deleteItem(id)}
                        className="btn"
                    >
                    x
                    </button>
                  </li>
                )
              })
            }
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
