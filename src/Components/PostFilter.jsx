import React from 'react';
import { MySelect } from "../Components/UI/select/MySelect";
import { MyInput } from "../Components/UI/input/MyInput";

export const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) => setFilter({ ...filter, query: e.currentTarget.value })}
                placeholder='search...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='sort'
                options={[
                    { value: 'title', name: 'by name' },
                    { value: 'body', name: 'by desc' }
                ]}
            />
        </div>
    )
}
