import OptionCard from '../components/OptionCard';
import styles from './Options.module.css';

export default function Options() {
  const options = [
    {
      name: 'Gourmet Breakfast Buffet',
      price: 25,
      img: '/breakfast.jpg',
      desc: 'Fresh pastries, fruits, and artisanal desserts.',
    },
    {
      name: 'Private Airport Transfer',
      price: 99,
      img: '/jet.jpg',
      desc: 'Luxury private car from the airport to hotel.',
    },
    {
      name: 'Exclusive Boat Tour',
      price: 200,
      img: '/boat.jpg',
      desc: 'Guided boat trip with wine and local delicacies.',
    },
  ];

  return (
    <section className={styles.options}>
      <h2>Options</h2>
      <div className={styles.grid}>
        {options.map((o) => (
          <OptionCard key={o.name} {...o} />
        ))}
      </div>
    </section>
  );
}
