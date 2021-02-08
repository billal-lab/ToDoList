import React, { Component } from "react";

export default class ToDoList extends Component{
    constructor(){
        super();
        this.state=
        {
            value:"",
            items:[]
        }
    }
    listner(event){
        this.setState(
        {
            value:event.target.value
        })
    }
    onClick(){
        if(this.state.value !=""){
            var tmp = this.state.items;
       
            tmp.push(this.state.value);
            this.setState(
            {
                  items: tmp,
                  value:""
            })
        }
    }
    onDelete(item){
        var tmp = this.state.items;
        tmp.splice(tmp.indexOf(item), 1);
        this.setState(
            {
                  items: tmp
            })
    }

    rendAll(){
        return this.state.items.map((item) => {
            return(
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    {item}
                    <button  class="btn btn-danger" onClick={this.onDelete.bind(this,item)}>delete</button>
                </li>
            );
        });
    }
    render(){
        return(
            <div>
                <form>
                    <div class="row">
                        <div class="col">
                        <input type="text" class="form-control" required="required" onChange={this.listner.bind(this)} value={this.state.value}/>
                        </div>
                        <div class="col-2">
                        <button class="btn btn-primary form-control " onClick={this.onClick.bind(this)}>Ajouter un ToDo</button>
                        </div>
                    </div>
                </form>
                <ul class="list-group mt-5">
                    {this.rendAll()}
                </ul>
            </div>
        );
    }
}
