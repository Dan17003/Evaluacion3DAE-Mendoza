import { useEffect, useState } from 'react';
import { items } from '../data/items';
import ItemCard from './ItemCard';
import ItemSearch from './ItemSearch';


export default function ItemList() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('fav-items')) || []);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState(items);

  const toggleFavorite = (id) => {
    const newFavs = favorites.includes(id)
      ? favorites.filter(fav => fav !== id)
      : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('fav-items', JSON.stringify(newFavs));
  };

  useEffect(() => {
    const f = items.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(f);
  }, [search]);

  return (
    <>
      <ItemSearch search={search} setSearch={setSearch} />
      <Row className="g-4 mt-3">
        {filtered.map(item => (
          <Col key={item.id} md={4}>
            <ItemCard
              item={item}
              isFavorite={favorites.includes(item.id)}
              toggleFavorite={toggleFavorite}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}