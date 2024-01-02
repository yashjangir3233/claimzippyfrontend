import React,{useEffect,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faPen} from '@fortawesome/free-solid-svg-icons'
import './Shownotes.css';
import {AnimatePresence,motion} from 'framer-motion';
import Editmodal from './Editmodal';


const Shownotes = ({notes,onDeleteNote,onModalOpen}) => {

    const [modalOpen, setModalOpen] = useState(false);
    // const colors = ["#ddcdfe","#fedacc","#f5f8d2","#feeacc"]
    const [noteColors, setNoteColors] = useState([]);

    const getRandomColor = () => {
      const colors = ["#ddcdfe", "#fedacc", "#f5f8d2", "#feeacc","#6da17b","#7be8b9","#b8f5da","#9af5f0","#7e98cf","#897ecf","#9c7ecf","#b57ecf","#cf7ec4","#cf7ea4","#c4cf7e","#cfa97e","#dba29c"];
      return colors[Math.floor(Math.random() * colors.length)];
    };
  
    useEffect(() => {
      // Generate colors for each note and store them in state
      const newNoteColors = [];
      notes.forEach((note, index) => {
        newNoteColors[index] = noteColors[index] || getRandomColor();
      });
      setNoteColors(newNoteColors);
    }, [notes,noteColors]);

    const handledelete = (index) => {
        onDeleteNote && onDeleteNote(index);
        const updatedNoteColors = [...noteColors];
        updatedNoteColors.splice(index,1);
        setNoteColors(updatedNoteColors);
    }

    const handleCancelModal = () => {
        setModalOpen(false);
    }
    const [editingNote,setEditingNote] = useState({});
    const handleEditButton = (note)  => {
        setEditingNote(note);
        setModalOpen(true);
    }


    return (
    <motion.div className="listofnotes">
        <AnimatePresence>
            {notes.map((note,index) => {
                return(
                    <motion.div className='notecardwithgrad' initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    >
                        <div className="notecard" style={{backgroundColor:noteColors[index]}}>
                            <div className="notecardtitle">{note.title}</div>
                            <hr />
                            <div className="notecarddesc">{note.desc}</div>
                            <div className="cardbuttons">
                                <button className="editbutton" onClick={()=>handleEditButton(note)}><FontAwesomeIcon icon={faPen} /></button>
                                <button className="deletebutton" onClick={()=> handledelete(index)}><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        </div>  
                    </motion.div>
                );
            })}
        </AnimatePresence>
            {modalOpen && <Editmodal onCancelModal={handleCancelModal} editingNote={editingNote}/>}
    </motion.div>
  )
}

export default Shownotes