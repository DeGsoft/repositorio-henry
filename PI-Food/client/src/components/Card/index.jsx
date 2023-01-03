import './index.css';
import { Link } from 'react-router-dom';

export default  function Card({ id, image, name, diet }) {
    return <div className='card'>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <div>{diet}</div>
        <Link to={"/recipie/" + id}>{name}</Link>
    </div>;
}
