import React from 'react'
import './Editmodal.css';

const Editmodal = ({onCancelModal,editingNote}) => {
    const handleCancel = () => {
        onCancelModal && onCancelModal();
    }
  return (
    <div className="modal">
        <div className="modalBox" >
            <input type="text" name="title" className="updatetitle" placeholder='title' value={editingNote.title}/>
            <textarea name="desc" className='updatedesc' id="" cols="30" rows="10" value={editingNote.desc}></textarea>
            <div className="updatebuttons">
                <button className="savebutton"> save</button>
                <button className="modalcancelbutton" onClick={handleCancel}>cancel</button>
            </div>
        </div> 
    </div>
  )
}

export default Editmodal