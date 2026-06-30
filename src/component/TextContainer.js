// import React from "react";
// import PropTypes from 'prop-types'
import React, { useState } from 'react';



export default function TextContainer(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleloClick=()=>{
        console.log("LowerCsae was Click");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
        
    }
const handleclearClick= ()=>{
       setText("")
       props.showAlert("Text Cleared!", "success");
}
const handleCopyClick= ()=>{
  const copyText=text;
  navigator.clipboard.writeText(copyText);
  document.getSelection().removeAllRanges();
  props.showAlert("Copied to clipboard", "success");  
}
const RemoveExtraSpace= ()=>{
    const BoxsText = text;
    const StdText = BoxsText.replace(/\s+/g, ' ');
   setText(StdText)
   props.showAlert("Extra spaces removed", "success");
     
}
  
// const changeTheme=()=>{
   
//       backgroundColor:'green'


//    }
    return (
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}} >

            <h1><b>{props.heading}</b></h1>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label" align="centre"><b>Text Container</b> </label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#555454':'white', color: props.mode==='dark'?'white':'#042743'}}id="mybox" rows="8"></textarea>
            </div>  
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary " onClick={handleclearClick}>Clear All</button>
            <button disabled={text.length===0} className= "btn btn-primary mx-2 my-1" onClick={handleloClick}> Convert to Lowercase</button>
            <button disabled={text.length===0} className= "btn btn-primary " onClick={handleCopyClick}> Copy Text</button>
            <button disabled={text.length===0} className= "btn btn-primary mx-2 my-1" onClick={RemoveExtraSpace}> Remove Extra Space</button>

            <div className="textSummary my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h3>TEXT SUMMARY</h3>
            <p>{text.split(/\s+/ ).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
            <p>{text.split(/\s+/ ).filter((element)=>{return element.length!==0}).length *0.008} Minutes Required To Read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Nothing to preview"}</p>
           
            </div>

             </div>
             )
}
