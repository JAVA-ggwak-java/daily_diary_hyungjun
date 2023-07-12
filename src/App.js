import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import Form from './components/Form';
import Lists from './components/Lists';

export default function App() {

  const [writingData, setWritingData] = useState([]);
  const [value, setValue] = useState("");

  const handleClick = (id) => {
    let newWritingData = writingData.filter((data) => data.id !== id);
    setWritingData(newWritingData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newWriting = {
      id: uuidv4(),
      title: value
    }
  
    setWritingData(prev => [...prev, newWriting]);
    setValue("");
  };


  
    return (
      <div className='container'>
        <div className='title'>
          <h1 className='mainTitle'>!  P U S H  !</h1>
          <h2 className='subTitle'>Write your today!</h2>
        </div>
        <Form handleSubmit= {handleSubmit} value= {value} setValue= {setValue} />
        <Lists handleClick= {handleClick} writingData= {writingData} setWritingData= {setWritingData} />
      </div>
    )
}
