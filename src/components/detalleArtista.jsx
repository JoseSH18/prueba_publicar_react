import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";

import axios from "axios";


const endpoint = 'https://prueba-publicar.azurewebsites.net/api';

function DetalleArtista({ artistaId }) {
  const { selectedArtistaId, handleShowSearch, handleArtistaClick, handleAlbumClick} = artistaId;

const [artista, setArtista] = useState(null);

useEffect(() => {
const fetchArtista = async () => {
try {
const response = await axios.get(`${endpoint}/detalle-artista/${selectedArtistaId}`);
console.log(response.data);
setArtista(response.data.artist);
} catch (error) {
console.error(error);
}
};
fetchArtista();
}, [selectedArtistaId]);

if (!artista) {
return <div className="text-danger">Cargando <i className="fa-solid fa-spinner fa-spin-pulse"></i></div>;
}
const topTracksSorted = [...artista.top_tracks].sort((a, b) => b.popularity - a.popularity);
return (
<Container>
<button className="button-transparent link-back" onClick={() => {
                  handleArtistaClick(null);
                  handleShowSearch();
                  }}
      >&larr; Volver atrás</button>
  <h1 className="mb-3">Detalle de artista {artista.nombre}</h1>
<Row>
<Col md={4}>
<Image src={artista.imagen} alt={artista.nombre} thumbnail fluid width={150}/>
</Col>
<Col md={8} className="mb-5">
<h1>{artista.nombre}</h1>
<p>{artista.seguidores} seguidores</p>
<p>Géneros: {artista.generos.join(", ")}</p>
<p>{artista.descripcion}</p>
</Col>

</Row>
<Row>
<Col>
<h2>Albums: </h2>
<Carousel className="mb-2">
            {artista.albums.map((album) => (
              <Carousel.Item className="carousel-item-margin" key={album.id}>
                <p>Nombre: {album.name}</p>
                {album.images[0].url && (

                  <button className="button-transparent" onClick={() => {
                    handleAlbumClick(album.id);
                    handleArtistaClick(null);
                    }}>
                  <img src={album.images[0].url} alt={album.name} width={150} />
                  </button>

                  )}
              </Carousel.Item>
            ))}
</Carousel>
</Col>
</Row>
<Row>
<Col>
<h2>Canciones top: </h2>
<Carousel className="mb-2">
            {topTracksSorted.map((track, index) => (
              <Carousel.Item className="carousel-item-margin" key={track.id}>
                <p>Top: {index + 1}</p>
                <p>Nombre: {track.name}</p>
                <p>Popularidad: {track.popularity}</p>
                <p>Artistas: {track.artists.map((artist) => artist.name).join(", ")}</p>
                <p>Album: {track.album.name}</p>
                <img src={track.album.images[0].url} alt={track.name} width={150} />
              </Carousel.Item>
            ))}
</Carousel>
</Col>
</Row>
</Container>
);
}

export default DetalleArtista;