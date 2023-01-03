import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './index.css';

import Filter from '../Filter';
import Order from '../Order';
import Cards from '../Cards';
import Paginate from '../Paginate';

import { getAllRecipies, searchRecipies, filterRecipies, orderRecipies, paginateRecipies } from '../../redux/actions';

export function Home() {

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [order, setOrder] = useState('');
    const [paginate, setPaginate] = useState('');

    const dispatch = useDispatch()
    const recipies = useSelector(state => state.recipies)

    useEffect(() => {
        dispatch(getAllRecipies());
    }, [dispatch]);

    function searchHandleChange(e) {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
        dispatch(searchRecipies(e.target.value))
    }

    function filterHandleChange(e) {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        })
        dispatch(filterRecipies(e.target.value))
    }

    function orderHandleChange(e) {
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        })
        dispatch(orderRecipies(e.target.value))
    }

    function paginateHandleChange(e) {
        setPaginate({
            ...paginate,
            [e.target.name]: e.target.value
        })
        dispatch(paginateRecipies(e.target.value))
    }

    return <div className="home">
        <Search onHandleChange={searchHandleChange} />
        <Filter
            options={selectOptions}
            onHandleChange={filterHandleChange}
        />
        <Order
            onHandleChange={orderHandleChange}
        />
        <Cards cards={recipies} />
        <Paginate
            length={cards.length}
            onHandleChange={paginateHandleChange}
        />
    </div>;
}