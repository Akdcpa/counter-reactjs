import React, { Component } from 'react';
import {
    Button,
    Typography,
} from '@material-ui/core'
 
class Item extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:props.count,
             show:'flex',
             backgroundColor:"grey"
        }
        this.deleteItem = this.deleteItem.bind(this)
    }
    

    incrementCount = () =>{
        console.log("Count" , this.state.count)
        this.setState({count:this.state.count+1})
    }

    deleteItem (id){
        console.log("id" , id)
        if(id>0){
            this.setState({show:"none"})
        }
    }

    render() { 
        return (
            <div style={{
                display:this.state.show,
                justifyContent:'space-between',
                alignItems:"center",
                margin:10
            }} >
                <Typography style={{backgroundColor:this.state.count==0?"yellow":"white"}} >{this.state.count}</Typography>
                <Button onClick={this.incrementCount} >Increment</Button>
                <Button 
                    onClick={()=>this.props.deleteItem(this.props.data)} 
                    >Delete</Button>
            </div>
        );
    }
}

const styles = {
    root:{
        
    }
}
 
export default Item;