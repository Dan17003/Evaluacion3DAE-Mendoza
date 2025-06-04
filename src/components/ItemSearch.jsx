import { Form } from 'react-bootstrap';
import { useDebounce } from '../hooks/UseDebounce';

export default function ItemSearch({ search, setSearch }) {
  const debounced = useDebounce(search);

  return (
    <Form.Control
      type="text"
      placeholder="Buscar productos..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
}