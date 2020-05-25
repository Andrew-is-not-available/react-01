import React, {useState} from 'react';

function LarryComp(props) {
    // const [count, setCount] = useState(1000);
    console.log(props);  
    //props is all the properties and are visible in console
    function myOnClick(e) {
        // count++;
        // console.log('we just clicked count', count);
        // setCount(count + 1);
       
        // console.log('you just clicked from LarryComp');
        props.countFunc();
        
    }
    return (
        <div>
            <h1 onClick={props.countFunc}>Hello World from LarryComp {props.countx}</h1>
            {/* <h1 onClick={myOnClickCount}>Hello World: count {count}</h1> */}
        </div>
    )
}


export default LarryComp;