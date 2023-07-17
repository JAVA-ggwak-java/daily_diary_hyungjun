import React from "react";
import List from './List';

const Lists = ({ handleClick, writingData, setWritingData }) => {
  return(
    <div className="lists">
      {writingData.map((data) =>(
        <List
          id={data.id}
          title = {data.title}
          setWritingData={setWritingData}
          handleClick={handleClick}
          writingData={writingData}
        />
      ))}
    </div>
  )
}

export default Lists;