import './App.css'
import Header from './Header'
import React, { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

      const res = await get.json();

      setData(res)
      console.log(res);
    }

    getData();

    document.title = `(${state}) Employes Record`;

  }, [state])

  return (
    <div>
      <Header />
      <div className='button'>
        <button className='btn' onClick={() => { setState(state + 1) }}>Add Record</button>
        <button className='btn' onClick={() => { setState(state - 1) }}>Sub Record </button>
      </div>
      {
      data.map((element, index) => {
        return (
          <div className='data' key={index}> 
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>

          </div>
        )
      })}
    </div>
  );
}

export default App
