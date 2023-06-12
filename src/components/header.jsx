import React from "react";
import { Dropdown} from "react-bootstrap";



const Header = ({onHeaderButtonSearch}) => {
  const { handleHeaderButtonSearch, goHome} = onHeaderButtonSearch;


    return (
<header className='d-flex align-items-center justify-content-between mx-auto maxw-900-marg-10'>
        <button className="button-transparent" onClick={goHome}>
        <h1>PlaySound</h1>
        </button>
        <div className='buttons-up d-inline-flex align-items-center'>
        <Dropdown className='dropdown-div'>
      <Dropdown.Toggle className="dropdown-button" variant="info" id="dropdown-basic">
      <i className="fa-solid fa-bars"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu'>
        <Dropdown.Item onClick={goHome} className='dropdown-item' href="#/action-1"><i className="fa-solid fa-house text-danger"></i> Home</Dropdown.Item>
        <Dropdown.Item className='dropdown-item' href="#/action-2"><i className="fa-solid fa-forward text-danger"></i> Tracks</Dropdown.Item>
        <Dropdown.Item className='dropdown-item' href="#/action-3"><i className="fa-solid fa-circle-play text-primary"></i> Play Music</Dropdown.Item>
        <Dropdown.Item className='dropdown-item' href="#/action-3"><i className="fa-solid fa-wand-magic-sparkles fa-fade text-danger"></i> Identify</Dropdown.Item>
        <Dropdown.Item className='dropdown-item' href="#/action-3"><i className="fa-solid fa-user text-danger"></i> Perfil</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
  
        <button onClick={handleHeaderButtonSearch} className='button-icon'><i className="fa-solid fa-magnifying-glass"></i></button>
        <button className='button-icon'><i className="fa-solid fa-circle-plus"></i></button>
        </div>
        
    </header>
  );
};

export default Header;