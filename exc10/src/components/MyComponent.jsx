import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyComponent = (props) => {
    
    return (
        <div style={{backgroundColor: 'black', color: 'white'}}>
            <h1>{props.title}</h1>
            <h2>{props.content}</h2>
            <button style={{textAlign: "center"}} className='btn btn-warning' disabled={props.state.first}></button>
            <button className='btn btn-warning' disabled={props.state.second}></button>
        </div>
    );
};

export default MyComponent;