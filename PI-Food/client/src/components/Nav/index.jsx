import './index.css';
import { Link } from 'react-router-dom';

export default function Nav() {
   return <div className='nav'>
      <Link to={"/"}>Home</Link>
      <Link to={"/recipie/create"}>Create</Link>
   </div>;
};
