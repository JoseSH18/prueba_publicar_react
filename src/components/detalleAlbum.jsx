import { useEffect, useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Loading from "./loading";
import axios from "axios";


const endpoint = 'https://musicbackenddeploy-production.up.railway.app/api';

function DetalleAlbum({ albumId }) {
  const { selectedAlbumId, handleAlbumClick, handleShowHome} = albumId;

const [album, setAlbum] = useState(null);

useEffect(() => {
const fetchAlbum = async () => {
try {
const response = await axios.get(`${endpoint}/detalle-album/${selectedAlbumId}`);
setAlbum(response.data.album);
} catch (error) {
console.error(error);
}
};
fetchAlbum();
}, [selectedAlbumId]);

if (!album) {
return   <div className="d-flex justify-content-center">
<Loading />
</div>
}

return (
<Container>
<button className="button-transparent link-back" onClick={() => {
                  handleAlbumClick(null);
                  handleShowHome();
                  }}
      >&larr; Volver atrás</button>
  <h1 className="mb-3">Detalle de Album {album.name}</h1>
<Row>
<Col md={4}>
 <img src={album.images[0].url} alt={album.name} width={150} />
</Col>
<Col md={8} className="mb-5">
<h1>{album.name}</h1>
<p>Sello Discográfico: {album.label}</p>
<p>Géneros: {album.genres.join(", ")}</p>
<p>Popularidad: {album.popularity}</p>
<p>Fecha de lanzamiento: {album.release_date}</p>
</Col>

</Row>
<Row>
<Col>
<h2>Canciones</h2>
<Carousel className="mb-2">
            {album.tracks.items.map((track) => (
              <Carousel.Item className="carousel-item-margin" key={track.id}>
                <p>Nombre: {track.name}</p>
                <p>Popularidad: {track.popularity}</p>
                <p>Artistas: {track.artists.map((artist) => artist.name).join(", ")}</p>
              </Carousel.Item>
            ))}
</Carousel>
</Col>
</Row>
</Container>
);
}

export default DetalleAlbum;