import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyComponent from './components/MyComponent';


function App() {
  var ga = {
    title: "Dung Ga",
    content: "Hoc hanh khong lo lo viu o do",
    state: {
      first: "hello",
      second: 'bye'
    }

  }

  return (
    <div>
      <MyComponent props={ga} />
    </div>
  );
}

export default App;
