import './index.css';

export default function Search({ filterText, onHandleChange }) {
  const handleChange = (e) => {
    onHandleChange(e.target.value);
  }
  return <div className='search'>
    <input
      type='search'
      placeholder="Search..."
      value={filterText}
      onChange={handleChange} />
  </div>;
}
