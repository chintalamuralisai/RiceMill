import React,  {Component} from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Newload from '../components/Newload'
class NewloadPage extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div>
                <Header/>
                <Menu/>
                <Newload/>
            </div>
        )
    }
}

export default NewloadPage;