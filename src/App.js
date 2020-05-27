import React,{useState} from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState (0) ;
  const [data, setData] = useState([
    {name:'dan', age:27}, {name:'Ryan',  age:25}, {name:'David', age:24}
  ]);

  const [toggle, setToggle] = useState(false);

  const add = () => {
    setCount(count +1)
  }

  const changeData = () => {
    setData([
      {name:'danny', age:29}, {name:'Asim',  age:23}, {name:'Mike', age:28}
    ])
  }

  const tog = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
     {/* {count}
    <button onClick={add}>add</button> */}

  { toggle ?
    data.map((data, index) =>{
      return <p key={index}>{data.name} {data.age}</p>
    })
    : null }



    <button onClick={changeData}>change </button>
    <button onClick={tog}>toggle</button>

    </div>
  );
}

export default App;
