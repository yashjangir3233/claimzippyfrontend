import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPlus,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Addnotes from './components/Addnotes';
import { useState } from 'react';

function App() {
  return (
    <div className="app">
      <div className="menu">
        <div className="user_profile">
          <div className="user_icon">
          </div>
          <div className="user_namemail">
            <div className="u_name">Username</div>
            <div className="u_email">user1@gmail.com</div>
          </div>
        </div>
        <hr />
        <div className="create_note" tabIndex="1">
          <FontAwesomeIcon icon={faPlus} />
          Create Notes
        </div>
        <div className="search_note" tabIndex="1">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search
        </div>
      </div>
      <div className="all_notes">
        <h3>My Notes</h3>
        <div className="get_all_notes">
          <Addnotes />
        </div>
      </div>
    </div>
  );
}

export default App;
