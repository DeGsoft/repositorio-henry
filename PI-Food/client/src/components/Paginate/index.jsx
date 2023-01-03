import './index.css';

export default function Paginate({ cards, onChange }) {
    const pageNumberLimit = 3;
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(3);
    const [minPageLimit, setMinPageLimit] = useState(0);

    useEffect(() => {
        // setLoading(true);
    }, [currentPage]);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const onPrevClick = () => {
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setCurrentPage(prev => prev - 1);
    }

    const onNextClick = () => {
        if (currentPage + 1 > maxPageLimit) {
            setMaxPageLimit(maxPageLimit + pageNumberLimit);
            setMinPageLimit(minPageLimit + pageNumberLimit);
        }
        setCurrentPage(prev => prev + 1);
    }

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePrevClick = () => {
        onPrevClick();
    }

    const handleNextClick = () => {
        onNextClick();
    }

    const handlePageClick = (e) => {
        onPageChange(Number(e.target.id));
    }

    const pageNumbers = pages.map(page => {
        if (page <= maxPageLimit && page > minPageLimit) {
            return (
                <li key={page} id={page} onClick={handlePageClick}
                    className={currentPage === page ? 'active' : null}>
                    {page}
                </li>
            );
        } else {
            return null;
        }
    });

    let pageIncrementEllipses = null;
    if (pages.length > maxPageLimit) {
        pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>
    }
    let pageDecremenEllipses = null;
    if (minPageLimit >= 1) {
        pageDecremenEllipses = <li onClick={handlePrevClick}>&hellip;</li>
    }

    return (
        <div className="main">
            <div className="mainData">
                {renderData(data)}

            </div>
            <ul className="pageNumbers">
                <li>
                    <button onClick={handlePrevClick} disabled={currentPage === pages[0]}>Prev</button>
                </li>
                {pageDecremenEllipses}
                {pageNumbers}
                {pageIncrementEllipses}
                <li>
                    <button onClick={handleNextClick} disabled={currentPage === pages[pages.length - 1]}>Next</button>
                </li>
            </ul>
        </div>
    )
}
