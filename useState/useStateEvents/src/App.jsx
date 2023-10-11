import './App.css'
import Header from './components/header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email, }])
    setName("")
    setEmail("")
  }

  const remove=(index)=>{
    let arr = data;
    arr.splice(index,1)
   setData([...arr]);
  }
  const handlePress = (event) =>{
    if (event.key == 'Enter','space'){
      addData(); }
  }

  return (
    <>
      <div className='App'>
        <Header />
        {/* f0rm */}
        <div className='main'>
          <div className='form'>
            <div className='text'>
              <TextField
              onKeyPress={e => handlePress(e)}
                value={name}
                onChange={e => setName(e.target.value)}
                id="standard-basic"
                label="Name"
                variant="standard" />
            </div>
            <div className='text'>
              <TextField
              onKeyPress={e => handlePress(e)}
                value={email}
                onChange={e => setEmail(e.target.value)}
                id="standard-basic"
                label="E-mail"
                variant="standard" />
            </div>
            <div className='btn'>
              <Button onClick={addData} variant="contained">Add</Button>
            </div>
          </div>
        </div>
        {/* data */}
        <div className='data'>
          <div className='s-data' >
                <h5>Name</h5>
                <h5>E-mail</h5>
                <h5>Remove</h5>
          </div>
          
          {
          data.map((element,index)=>{
            return <div className='s-data' >
            <h5>{element.name}</h5>
            <h5>{element.email}</h5>
            <button onClick={()=>remove(index)} class="button-42" role="button">Delete</button>
        </div>
          })
          }

        </div>
      </div>
    </>
  )
}

export default App
