import React, {Component} from 'react'

class Header extends Component{
    constructor(){
        super()
        this.state={

        }
    }



    render(){
        return(
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-md-4 ">
                        <div className="aaa">
                            <img
                                src="/images/leftside.png"
                                alt="Lights"
                                style={{
                                "height": "120px"
                            }}/>
                        </div>

                    </div>
                    <div className="col-md-4 text-center">                        
                        <div className="aa">
                            <img
                                src="/images/logo1.png"
                                alt="Nature"
                                style={{
                                "height": "150px"
                            }}/>
                        </div>

                    </div>
                    {(localStorage.getItem("paymentStatus"))
                        ? <div className="col-md-4 text-right">
                                <div className="aaa">
                                    <img
                                        src="/images/rightside.png"
                                        alt="Lights"
                                        style={{
                                        "height": "120px"
                                    }}/>
                                </div>
                            </div>
                        : <div className="col-md-4 text-right">
                            <div className="aaa">
                                <img
                                    src="/images/rightside.png"
                                    alt="Lights"
                                    style={{
                                    "height": "120px"
                                }}/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
export default Header;