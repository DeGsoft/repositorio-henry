import './index.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRecipies } from '../../redux/actions';

const validation = (input) => {
    let errors = {};

    if (input.name.length > 30 || input.origin.length > 30)
        errors.name = 'Nombre u Origen demasiado largo';
    if (input.level < 0)
        errors.level = 'Healt score debe ser un numero positivo';
    return errors;
}

export default function Create() {
    const [input, setInput] = useState({
        name: '',
        resume: '',
        level: 0,
        instructions: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        resume: '',
        level: '',
        instructions: ''
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setErrors(
            validation({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const arr = [];
        const object = errors;
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                if (object[key]) { arr.push(object[key]) }
            }
        }

        if (arr.length === 0) {
            dispatch(createRecipies(input));
            setInput({
                name: '',
                resume: '',
                level: 0,
                instructions: ''
            });
            setErrors({
                name: '',
                resume: '',
                level: '',
                instructions: ''
            });
        }
    }

    return <div>
        <form onSubmit={handleSubmit} >
            <label>Nombre: </label>
            <input name="name" type="text" onChange={handleChange} />
            {errors.name && <p>{errors.name}</p>}
            <label>Resumen: </label>
            <textarea name="resume" onChange={handleChange} />
            {/* {errors.resume && <p>{errors.resume}</p>} */}
            <label>Healt score: </label>
            <input name="level" type="number" onChange={handleChange} />
            {errors.level && <p>{errors.level}</p>}
            <label>Paso a paso: </label>
            <textarea name="instructions" onChange={handleChange} />
            {/* {errors.instructions && <p>{errors.instructions}</p>} */}
            <button type="submit">Create</button>
        </form>
    </div>;
};
