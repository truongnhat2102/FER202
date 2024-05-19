import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MySection from './Component/MySection';
import MyButton from './Component/MyButton';
import HelloWorld from './Component/HelloWorld';
import People from './Component/Person';
import StudentList from './Component/StudentList';

// class MyComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>MY COMPONENT</h1>
//         <p>This is my component</p>
//       </div>
//     );

//   }
// }

// const MyCoponent2 = () => {
//   return (
//     <>
//       <div>
//         <h1>MY COMPONENT</h1>
//         <p>This is my component</p>
//       </div>
//     </>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentList></StudentList>
  </React.StrictMode>

);

reportWebVitals();
