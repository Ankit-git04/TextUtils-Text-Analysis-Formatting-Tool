import React from 'react'

export default function Alert(props) {


  return (

   <div style={{height:'50px'}}>
   {props.alert && <div>
     <div className={`alert alert-${props.alert.Type} alert-dismissible fade show` }role="alert">
  <strong>{(props.alert.Type)[0].toUpperCase() + (props.alert.Type).slice(1)}</strong>: {props.alert.msg}
  
</div>
    </div>} 
    </div>
  )
}
