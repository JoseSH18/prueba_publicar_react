import { useState } from "react";
import { Container, Button, Form, Carousel } from "react-bootstrap";
import axios from "axios";
import Loading from "./loading";
const endpoint = 'https://musicbackenddeploy-production.up.railway.app/api'
  
function BuscarArtista({onSelectArtistaId}) { 


  const [searchTerm, setSearchTerm] = useState("");
  const [artistasConInfo, setArtistasConInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setArtistasConInfo([]); // Limpiar resultados anteriores
    if (searchTerm.trim() === "") {
      return;
    }
    try {

      setIsLoading(true); // activar la variable isLoading
      const response = await axios.get(`${endpoint}/buscar-artista/${searchTerm}`);

      setArtistasConInfo(response.data.artistasConInfo);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // desactivar la variable isLoading
    }
    
  };
  const { handleArtistaClick, handleCloseSearch, handleShowHome } = onSelectArtistaId;
  return (
    <Container>
      <button className="button-transparent link-back" onClick={() => {
                  handleCloseSearch();
                  handleShowHome();
                  }}
      >&larr; Volver atrás</button>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Buscar artista:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre del artista"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Form.Text className="text-muted">
            Ingrese el nombre del artista que desea buscar.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Buscar
        </Button>
      </Form>
      {artistasConInfo.length > 0 ? (
      <Carousel>
        
          {artistasConInfo.map((artista) => (
            <Carousel.Item className="carousel-item-margin" key={artista.id}>
              <h2>{artista.nombre}</h2>
              {artista.imagen && (

                <button className="button-transparent" onClick={() => {
                  handleArtistaClick(artista.id);
                  handleCloseSearch();
                  }}>
                <img src={artista.imagen} alt={artista.nombre} width={150} />
                </button>
                
              )}
            </Carousel.Item>
          ))}
       
      </Carousel>
       ) : isLoading ? (
        <div className="d-flex justify-content-center">
         <Loading />
         </div>
      ) : (

          <p className="mb-2">No se encontraron resultados.</p>

      )}
    </Container>
    
  );
}

export default BuscarArtista;