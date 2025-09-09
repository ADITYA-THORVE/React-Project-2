import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//craete First Element
//const element = React.createElement(
  //'div',{classname:'my-container'},
  //React.createElement('h',null,'Hello,All!'),
  //React.createElement('p',null,'welcome to ITVEDANT.'),
  //React.createElement('p', null,'Bye Bye,')
//);

//const root =ReactDOM.craeteRoot(document.getElementByID('root));
//root.render(element);

//Difference Bettewen Actual-Dom and Virtual-Dom

// const root1 = document.getElementById('root1');//Actual Dom
// const root2 = ReactDOM.createRoot(document.getElementById('root2'));//virtualDOM

//Accessing Actual DOM
// setInterval(()=>{
//   root1.innerHTML =`
//   <div>
//   <h1>Hello Actual DOM</h1>
//   <pre>${new Date().toLocaleTimeString()}</pre>
//   </div>`;

//   //Accessing Virtual DOM
//   root2.render(
//     <div>
//       <h1>Hello Virtual DOM</h1>
//       <p>${new Date().toLocaleTimeString()}</p>
//     </div>
//   );
// })



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
