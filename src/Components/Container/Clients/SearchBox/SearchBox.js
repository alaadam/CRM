import React from 'react';
import SearchInput from './SearchInput';
import DropDownMenu from './DropDownMenu';
import PageIndex from './PageIndex';
import { useState , useEffect } from 'react';


const SearchBox = (props) => {

    let [searchWord, setSearchWord] = useState('')
    let [DropDownWord, setDropDownWord]= useState('first')
    
    const changeFilter = () =>{
        props.setFilter([searchWord,DropDownWord])
    }
    useEffect(changeFilter, [DropDownWord,searchWord]);


    return (
        <div>
            <SearchInput searchWord={searchWord} setSearchWord={setSearchWord}/>
            <DropDownMenu DropDownMenu={DropDownWord} setDropDownWord={setDropDownWord}/>
            <PageIndex />
        </div>
    );
};

export default SearchBox;


