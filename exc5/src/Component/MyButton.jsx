import * as React from 'react';

class MyButton extends React.Component{

    hello = (hello) => {
        alert(hello)
    }

    render(){
        return <button onClick={this.hello(this.props.children)}>
            {this.props.children}
        </button>
    }
}
export default MyButton;