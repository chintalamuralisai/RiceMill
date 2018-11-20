import React, {Component} from 'react'

class Header extends Component{
    constructor(){
        super()
        this.state={

        }
    }



    render(){
        return(
            <div className="container d-flex justify-content-center ">
                <div className="row">
                    <div className="col-md-6 mt-5 mb-5">                        
                         <h1>RiceMill</h1> 
                   </div>
                </div>
            </div>
        )
    }
}
export default Header;