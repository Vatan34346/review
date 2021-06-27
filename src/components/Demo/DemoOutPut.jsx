import React from 'react';

const DemoOutPut =props=>{

    return(
        <p>  {props.show?'This is knew':''}</p>
    );
};




export default React.memo(DemoOutPut);// check new value for all props and compera last and current value. 
//IF changes the re-evaluet component