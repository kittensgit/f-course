import React from 'react'
import { getPagesArray } from '../../../utils/pages'

export const Pagination = ({ totalPages, page, changePage }) => {

    let pagesArray = getPagesArray(totalPages) //в массиве лежат числа от 1 до 10
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                    {p}
                </span>
            )}
        </div>
    )
}
