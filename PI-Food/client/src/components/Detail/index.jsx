import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipieDetail } from "./../../redux/actions";
import { useEffect } from 'react';

export default function Detail(props) {
    // const { image, name, dish, diet,
    //     level, instructions } = card;
    const dispatch = useDispatch();
    const recipie = useSelector(state => state.recipieDetail);

    useEffect(() => {
        const id = props.match.params.id;
        dispatch(getRecipieDetail(id));
    }, [recipie]);

    return (<div className="detail">
        <div key={recipie.ID}>
            <img src={recipie.image} alt={recipie.name} />
            <h2>{recipie.name}</h2>
            <h2>{recipie.dish}</h2>
            <h2>{recipie.diet}</h2>
            <p>{recipie.resume}</p>
            <h2>health score:{level}</h2>
            <p>{recipie.instructions}</p>
        </div>
    </div>);
}
