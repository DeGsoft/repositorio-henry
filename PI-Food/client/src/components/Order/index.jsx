import './index.css';

export default function Order({ onHandleChange }) {

    const handleChange = (e) => {
        onHandleChange(e.target.value);
        e.preventDefault();
    }

    return <div className='order'>
        <div onChange={handleChange}>
            <label>
                <input type="radio" name="orderRadioInput" value="asc" />
                Asc
            </label>
            <label>
                <input type="radio" name="orderRadioInput" value="desc" />
                Desc
            </label>
        </div>
    </div>;
}
