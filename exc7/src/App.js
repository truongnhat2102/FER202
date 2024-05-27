import './App.css';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {count:0}
  }

  componentDidMount(){
    console.log(`COmponet mount!`);
  }

  componentDidUpdate(prevState){
    if (prevState.count !== this.state.count) {
      console.log(`Count change!`)
    }
  }

  componentWillUnmount(){
    console.log(`Component unmount!`);
  }

  incrementMount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  decrementCount = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render(){
    return(
      <div className='container col-lg-3'>
        <div className='row'>
          <p className='text-center'>Count: {this.state.count}</p>
          <button className='btn btn-danger' onClick={this.incrementMount}>Increment</button>
          &nbsp;
          <button className='btn btn-danger' onClick={this.decrementCount}>Decrement</button>
        </div>
      </div>
    )
  }

}

export default App;
