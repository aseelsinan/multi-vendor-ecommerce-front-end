import './Divider.css';

const Divider = ({ glow = false }) => {
  return (
    <div className="container">
      <div className={`section-divider ${glow ? 'with-glow' : ''}`}></div>
    </div>
  );
};

export default Divider;