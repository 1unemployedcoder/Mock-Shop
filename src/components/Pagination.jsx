import React from 'react';

const Pagination = ({pagesArray, page, setPage}) => {
    return (
        <div className='pages__component'>
            {pagesArray.map(p =>
                <div style={{margin: '10px 0 0 10px'}}>
                    <span className={p === page ? 'page__current' : 'page'} onClick={() => setPage(p)}>{p}</span>
                </div>
            )}
        </div>
    );
};

export default Pagination;