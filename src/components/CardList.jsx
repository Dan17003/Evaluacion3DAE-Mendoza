import { items } from '../data/items';
import ItemCard from './ItemCard';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function CardList() {
  const destacados = items.slice(0, 3);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('fav-items')) || []);

  const toggleFavorite = (id) => {
    const newFavs = favorites.includes(id)
      ? favorites.filter(fav => fav !== id)
      : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('fav-items', JSON.stringify(newFavs));
  };

  return (
    <Row className="g-4 mt-3">
      {destacados.map(item => (
        <Col key={item.id} md={4}>
          <ItemCard
            item={item}
            isFavorite={favorites.includes(item.id)}
            toggleFavorite={toggleFavorite}
          />
        </Col>
      ))}
    </Row>
  );
}