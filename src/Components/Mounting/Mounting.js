import React from "react";
class Mounting extends React.Component{
    constructor(props){
        super(props)
        console.log("inside the constructor")
    }
    render(){
        console.log("Inside render method")
        return(
            <div>The component is rendered</div>
        )
    }
}
export default Mounting;