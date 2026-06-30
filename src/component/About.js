// import React, { useState } from 'react'


export default function About(props) {
    
   
    // const [mystyle ,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'})

   let mystyle= {
    color: props.mode==='dark'? 'white':'black',
     backgroundColor: props.mode === 'dark'? 'rgb(116 122 126)':'white',
     border: props.mode === 'dark'?'1px solid white':'1px solid black',
     fontColor: props.mode === 'dark'?' white':' black'
   }
  return (
    
    <div className="container" style={mystyle}>
        <h2>About Us</h2>
      <div className="accordion my-2"  id="accordionExample">
  <div className="accordion-item " style={mystyle} >
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <strong> Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <strong> Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo"  className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong> Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={mystyle} >
        <strong>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
.</strong> 
      </div>
    </div>
  </div>
</div>

    </div>
   
  ) 
}
