import React, { useState,useEffect } from 'react'
import './Addnotes.css';
import Shownotes from './Shownotes';

const Addnotes = ({toappmodalopen}) => {

  const [notes,setNotes] = useState([]);
  const [newnote,setNewnote] = useState({
    title:"",
    desc:""
  });

  const fillingnotedetails = (e) => {
    setNewnote({...newnote,[e.target.name]:e.target.value});
  }
  const updatenotes = async () => {
    setNotes([...notes,newnote]);
    console.log(notes);
  }

  const cancelnotes = () => {
    setNewnote({title:'',desc:''})
  }

  const handledeletenote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index,1);
    setNotes(updatedNotes);
  }

  // useEffect(() +> {
  //   console.log(notes)
  // })
  // const updatenotes = () => {
  //   setNotes((prevNotes) => ({
  //     ...prevNotes,
  //     [Object.keys(newnote)[0]]: newnote[Object.keys(newnote)[0]],
  //     [Object.keys(newnote)[1]]: newnote[Object.keys(newnote)[1]]
  //   }));
  //   setNewnote({title:"",desc:""});
  // };

  return (
    <div class="canvas" className='completepack'><div className="withgrad">
        <div className='Addnotes'>
          <div className="addnotetitle">Add New Note</div>
            <input name='title' value={newnote.title} type="text" className="notetitle" placeholder='title' onChange={(e)=>fillingnotedetails(e)}/>
            <textarea name="desc" value={newnote.desc} id="" rows="6" className="notedesc" placeholder='description' onChange={(e)=>fillingnotedetails(e)}></textarea>
            <div className="buttons">
                <button className='addbutton' onClick={updatenotes}>Add</button>
                <button className="cancelbutton" onClick={cancelnotes}>Cancel</button>
            </div>
        </div>
    </div>
    <Shownotes onDeleteNote={handledeletenote} notes={notes}/>
    </div>
      
  )
}

export default Addnotes