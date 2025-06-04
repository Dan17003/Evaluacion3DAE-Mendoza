import { Card, Button } from 'react-bootstrap';
import { notifyAdd, notifyRemove } from '../utils/notifyFavorite.js';

export default function ItemCard({ item, isFavorite, toggleFavorite }) {
  const handleClick = () => {
    toggleFavorite(item.id);
    isFavorite ? notifyRemove() : notifyAdd();
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant={isFavorite ? "danger" : "success"} onClick={handleClick}>
          {isFavorite ? "Quitar Favorito" : "Agregar a Favoritos"}
        </Button>
      </Card.Body>
    </Card>
  );
}