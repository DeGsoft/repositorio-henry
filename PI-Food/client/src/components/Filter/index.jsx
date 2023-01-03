import './index.css';

export default function Filter({ options, onHandleChange }) {

    const handleChange = (e) => {
        onHandleChange(e.target.value);
        e.preventDefault();
    }

    return <div className='filter'>
        <select value='Select' onChange={handleChange}>
            {options.map(option =>
                <option key={option.ID} value={option.ID}>{option.name}</option>)}
        </select>
    </div>;
}