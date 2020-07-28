import React, { Component } from 'react';

import {
    AppBar,
    Item
} from '../components/index'
import {
    Paper,
    Button,
    Typography,
    Divider
} from '@material-ui/core'
 
import {
    data
} from '../values/values'
 
class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            data:[...data],
            totCount:0, 

        }
        
        this.deleteItem = this.deleteItem.bind(this);

    }



    async deleteItem(id) {
        console.log("Val" , id)
        var newArray = [...this.state.data]; 

        const elementsIndex = this.state.data.findIndex(element => element.id == id )
        console.log("Array" , elementsIndex)  

        newArray[elementsIndex] = {...newArray[elementsIndex], show:false}
        newArray[elementsIndex] = {...newArray[elementsIndex], count:0}
        await this.setState({
            data: newArray,
            });
        
        await this.totalCount();
        console.log("Arrays : " , newArray)
    }

    totalCount = () =>{
        var count = 0;
        this.state.data.map((val)=>{
            count+=val.count
        });

        this.setState({totCount:count})
    }


    componentDidMount(){
        this.totalCount();
    }
    
    async incrementCount (id){ 
        const elementsIndex = this.state.data.findIndex(element => element.id == id )
        let newArray = [...this.state.data]
        newArray[elementsIndex] = {...newArray[elementsIndex], count: newArray[elementsIndex].count+1}
        await this.setState({
            data: newArray,
            });
        console.log("New Array : " , this.state.data)
        this.totalCount();
    }

    async decrementCount(id){ 

        const elementsIndex = this.state.data.findIndex(element => element.id == id )
        let newArray = [...this.state.data]

        newArray[elementsIndex] = {...newArray[elementsIndex], 
                                    count: newArray[elementsIndex].count!=0?newArray[elementsIndex].count-1:0}
        await this.setState({
            data: newArray,
            });
        console.log("New Array : " , this.state.data)
        this.totalCount();
    }

    render() { 
        return (
            <div>
                <div>
                    <AppBar count={this.state.totCount} />
                </div>
                <div style={styles.item } >
                    <Paper style={{margin:20}} variant="outlined" >
                        <div>
                        {
                            this.state.data.map((val , ind)=>{
                                return(
                                    <div style={{
                                        display:val.show?"flex":"none",
                                        justifyContent:'space-between',
                                        alignItems:"center",
                                        margin:10,
                                        flexDirection:'column'
                                    }} >
                                        
                                        <Paper 
                                            elevation={10} 
                                            style={{
                                                width:50,
                                                height:50,
                                                backgroundColor:val.count==0?"yellow":"blue",
                                                display:'flex',
                                                alignItems:'center',
                                                justifyContent:'center'
                                            }} >

                                            <Typography style={{
                                                            fontSize:25,
                                                            color:val.count==0?"black":'white'}} >
                                                                {val.count==0?0:val.count}
                                            </Typography>
                                        </Paper>
                                         

                                        <div style={{display:"flex" , margin:5 }}  >
                                            <Button variant="outlined" 
                                                    onClick={()=>this.incrementCount(ind)} 
                                                    style={{margin:5}} >Increment</Button>

                                            <Button variant="outlined" 
                                                    onClick={()=>this.decrementCount(ind)} 
                                                    style={{margin:5}} >Decrement</Button>
                                        </div>

                                        <Button 
                                            style={{
                                                margin:5,
                                                backgroundColor:'#FF4B4B'
                                                ,color:"white"}}
                                            variant="outlined"
                                            onClick={()=>this.deleteItem(ind)} >Delete
                                        </Button>
                                         
                                    </div>
                                );
                            }) 
                        }
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

const styles = {
    item:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
}
 
export default Main;