import React from 'react'
const { render } = require("enzyme");
// your ImageSlider code here!
class ImageSlider extends React.Component {

    constructor(props){
        super()
        this.state = { currentSlideIndex: 0 }
    }
    
    
    render(){
        return (
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
        
    }
}


export default ImageSlider