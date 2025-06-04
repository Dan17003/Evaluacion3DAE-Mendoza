import HeroBanner from '../components/HeroBanner';
import CardList from '../components/CardList'; 

export default function Home() {
  return (
    <>
      <HeroBanner />
      <h3>Peliculas destacadas</h3>
      <CardList />
    </>
  );
}