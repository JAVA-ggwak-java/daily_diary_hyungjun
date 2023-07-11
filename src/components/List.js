import React, {useState} from "react";
import './List.css';

const List = ({ handleClick, writingData, setWritingData, id, title, value }) => {
  
  const [edited, setEdited] = useState(false);
  const [editedText, setEditedText] = useState(value);

  const editedChange = (e) => {
    setEditedText(e.target.value);
  }

  const editedSubmit = (e, id) => {
    
    e.preventDefault();
    
    let newTextData = writingData.map(data => {
      if(data.id === id) {
      data.title = editedText;
      }
      return data;
    })

    setWritingData(newTextData);
    setEdited(false);
  }

  let now = () => {
    let date = new Date();
    
    let month = new String(date.getMonth()+1);
    month = month >= 10 ? month : '0' + month;
    
    let day = new String(date.getDate());
    day = day >=10 ? day : '0' + day;

    let result = `${month}월 ${day}일 `

    return result;
  };

  const btnStyle = {
    color: "cadetblue",
    border: "none",
    padding: "3px 6px",
    borderRadius: "15px",
    cursor: "pointer",
    backgroundColor: "rgba(154, 241, 228, 0.777)",
  }

  const editingButton = (id) => {
    setEdited(true);
    let editedData = writingData.find(data => data.id === id);
    setEditedText(editedData.title);
  }

  if(edited) {
    return (
      <div className='writingList'>
              <div className='minibox'>
                <div className='date_text' key={id}>
                  <div className='date'>{now()}</div>
                  <form 
                    id={id}
                    className='writingSpace' 
                    style={{ display: 'flex' }} 
                  >
                    <input 
                      className='edit_writing'
                      type= 'text'
                      style={{ flex: '10', padding: '6px'}}
                      value={editedText}
                      onChange={editedChange}
                    >
                    </input>
                    <button 
                      style={btnStyle}
                      className='okBtn'
                      type='submit'
                      onClick={(e) => {editedSubmit(e, id)}}
                    >OK
                    </button> 
                    <button 
                      style={btnStyle} 
                      className='returnBtn'
                      onClick={() => {setEdited(false)}}
                      >Return
                    </button>
                  </form>
                </div>
              </div>
            </div>
    )
  }else {
    return(
      <div className='writingList'>
        <div className='minibox'>
          <div className='date_text' key={id}>
            <div className='date'>{now()}</div>
            <div className='text'>
              {title}
            </div>
            <button 
              style={btnStyle} 
              onClick={() => handleClick(id)}
              className='deleteBtn'
            >Delete
            </button>
            <button 
              style={btnStyle}
              className='editBtn'
              onClick={() => editingButton(id)}
              id={id}
            >Edit
            </button> 
          </div>
      </div>
    </div>  
    )
  }

}

export default List;