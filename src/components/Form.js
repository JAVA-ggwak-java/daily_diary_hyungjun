const Form = ({ value, setValue, handleSubmit }) => {

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return(
    <form className='writingSpace' style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input 
            className='writing'
            type= 'text'
            name= 'value'
            style={{ flex: '10', padding: '6px'}}
            value={value}
            onChange={handleChange}
          ></input>
          <input 
            className='submit'
            type='submit'
            value='Push'
            style={{ flex: '2' }}        
          ></input>
        </form>
  )
}

export default Form;