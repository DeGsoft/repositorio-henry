import './index.css';
import { Link } from 'react-router-dom';

const Start = () => {
  return <div className="start">
    <h1>Henry Food</h1>
    <div className="divImg" title="Henry Food"></div>
    <Link to={"/home"}>
      <button type="button">Home</button>
    </Link>
  </div>;
}

export default Start;