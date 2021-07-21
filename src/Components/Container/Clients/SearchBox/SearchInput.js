import React from 'react';

const SearchInput = (props) => {
    const setSearchWord = (event) => props.setSearchWord(event.target.value)
    return (
        <span>
            <input value={props.searchWord} onChange={setSearchWord} placeholder="Search"/>
        </span>
    );
};

export default SearchInput;


