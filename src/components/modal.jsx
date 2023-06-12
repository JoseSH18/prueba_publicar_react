import React, { useState } from 'react';
import {Modal , Button} from 'react-bootstrap';
import BuscarArtista from './buscarArtista'

const MiModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <button onClick={handleShow} className='button-icon'><i className="fa-solid fa-circle-plus"></i></button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal de ejemplo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BuscarArtista/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MiModal;