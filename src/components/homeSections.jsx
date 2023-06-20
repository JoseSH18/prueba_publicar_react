import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Container, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import {Carousel} from 'react-bootstrap';
import bruno from './images/bruno.jpg'
import weeknd from './images/weeknd.jpg'
import alan from './images/alan.jpg'
import Loading from './loading';
const endpoint = 'https://musicbackenddeploy-production.up.railway.app/api';

const HomeSections = ({handleAlbum}) => {
  const { handleAlbumClick, handleCloseHome} = handleAlbum;
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setIsLoading(true);
      fetch(`${endpoint}/top-albums`)
        .then(response => response.json())
        .then(data => {setAlbums(data.albums);
          });
          setIsLoading(false);
    }, []);
  return (
    <div>
    <Container className='banner'>
  <Row className='d-block'>
    <Col>
      <h2 className='title2'>
        Neue Musik <i className="fa-solid fa-star"></i>
      </h2>
    </Col>
  </Row>
</Container>

<Container className='center-segments'>
  <Row>
    <Col className='div-segments'>
      <i className="fa-solid fa-envelope fa-beat"></i>
      <span className='span-segments'>Daily Push</span>
    </Col>
    <Col className='div-segments'>
      <i className="fa-solid fa-ranking-star fa-beat"></i>
      <span className='span-segments'>Top</span>
    </Col>
    <Col className='div-segments'>
      <i className="fa-solid fa-list-check fa-beat"></i>
      <span className='span-segments'>PlayList</span>
    </Col>
    <Col className='div-segments'>
      <i className="fa-solid fa-radio fa-beat"></i>
      <span className='span-segments'>Radio</span>
    </Col>
  </Row>
</Container>
<Container className='section-courier'>
  <Row className='header-courier align-items-center justify-content-between mx-auto'>
    <Col className='d-flex align-items-center justify-content-start'>
      <span className='section-title'>New Courier</span>
    </Col>
    <Col className='view-all d-flex align-items-center justify-content-end'>
      <span className='span-view'>View all <i className="fa-solid fa-greater-than"></i></span>
    </Col>
  </Row>
  <Row className='center-courier'>
    <Col className='div-image-courier'>
      <img className='image-courier' src={bruno} alt="newstart"/>
      <span className='span-segments'>New Start</span>
    </Col>
    <Col className='div-image-courier'>
      <img className='image-courier' src={weeknd} alt="newdisc"/>
      <span className='span-segments'>New Disc</span>
    </Col>
    <Col className='div-image-courier'>
      <img className='image-courier' src={alan} alt="recordshop"/>
      <span className='span-segments'>Record Shop</span>
    </Col>
  </Row>
</Container>
<Container className='section-album'>
  <Row className='header-album d-flex align-items-center justify-content-between mx-auto'>
    <Col className='d-flex align-items-center justify-content-start'>
    <span className='section-title'>New Albums</span>
    </Col>
    <Col className='view-all d-flex align-items-center justify-content-end'>
    <span className='span-view'>View all <i className="fa-solid fa-greater-than"></i></span>
    </Col>
  </Row>
  {isLoading ? (
    <Loading />
    ) : (
        <Carousel className='center-slider' interval={5000} 
          prevIcon={<FontAwesomeIcon icon={faCircleArrowLeft} size="2x" color="#a6bce2"/>} 
          nextIcon={<FontAwesomeIcon icon={faCircleArrowRight} size="2x" color="#a6bce2"/>}
        >
      {albums.map(album => (
        <Carousel.Item key={album.id} className='album-item'>
  <div className='center-album'>
    <div className='image-container'>
    <img className='image-album' src={album.imagen} alt={album.nombre}/>

    </div>
    <div className='text-container'>
      <Carousel.Caption className='div-album-text'>
      <span className='span-segments text-album'>Artist: {album.artista}</span>
      {album.nombre && (

<button className="button-transparent" onClick={() => {
  handleAlbumClick(album.id);
  handleCloseHome();
  }}>
 <span className='span-segments text-album'>Album: {album.nombre.split('(')[0]}</span>
</button>

)}
       
        
        <span className='span-segments text-album'>Released on {album.release_date}</span>
      </Carousel.Caption>
    </div>
  </div>
        </Carousel.Item>
      ))}
    </Carousel>
    )}
    </Container>
    </div>
  )
}
export default HomeSections