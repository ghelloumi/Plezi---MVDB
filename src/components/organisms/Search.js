import React, {useEffect, useState} from 'react';
import {TEXTS} from "../../utils/contants";
import {useDispatch} from "react-redux";
import {getSearchResults} from "../../services/movies.service";

const Search = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSearchResults(1,text))
    }, [text])

    const handleKeyPress = (e) => {
        const key = e.keyCode || e.charCode
        return (key === 8 || key === 46) ? setText(e.target.value) : null
    }

    return (
        <div className="page__tools">
            <input placeholder={TEXTS.SEARCH} value={text}
                   onChange={(e) => setText(e.target.value)}
                   onKeyPress={handleKeyPress}
            />
        </div>
    );
}

export default Search;
