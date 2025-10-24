import RoomCard from '../components/RoomCard';
import styles from './Rooms.module.css';

export default function Rooms() {
  const rooms = [
    {
      name: 'Noir Chamber',
      price: 336,
      desc: 'Dark-toned interior with gothic charm.',
      img: '/noir.jpg',
    },
    {
      name: 'Grey Manor',
      price: 336,
      desc: 'Classic grey with antique décor.',
      img: '/grey.jpg',
    },
    {
      name: 'White Elegance',
      price: 356,
      desc: 'Bright and romantic atmosphere.',
      img: '/white.jpg',
    },
  ];

  return (
    <section className={styles.wrapper}>
      <h2>Available Rooms</h2>
      <div className={styles.grid}>
        {rooms.map((r) => (
          <RoomCard key={r.name} {...r} />
        ))}
      </div>
    </section>
  );
}
