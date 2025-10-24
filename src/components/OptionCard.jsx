import PropTypes from 'prop-types';

export default function OptionCard({ name, price, img, desc }) {
  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <p>${price}</p>
      <button>Select</button>
    </div>
  );
}

OptionCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
