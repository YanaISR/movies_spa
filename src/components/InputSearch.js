import { useState } from 'react';

const InputSearch = (props) => {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');


    const handleKey = (e) => {
        if(e.key = 'Enter') {
            props.searchMovies(search)
        }
    }

    const handleFilter = (e) => {
        setType(e.target.dataset.type);
    }

    return (
        <div className="row">
        <div className="col s12">
            <div className="input-field">
                <input
                    id="email_inline"
                    type="email"
                    className="validate"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                >
                </input>
                <button onClick={() => props.searchMovies(search, type)}
                    type='button'
                    className="input-btn">search
                </button>
            </div>
            <label className="label-radio">
                <input className="with-gap"
                    name="type" type="radio"
                    data-type='all'
                    onChange={handleFilter}
                    checked={type === 'all'}
                />
                <span>All</span>
            </label>
            <label className="label-radio">
                <input className="with-gap"
                    name="type" type="radio"
                    data-type='movie'
                    onChange={handleFilter}
                    checked={type === 'movie'}
                />
                <span>Movie</span>
            </label>
            <label className="label-radio">
                <input className="with-gap"
                    name="type" type="radio"
                    data-type='series'
                    onChange={handleFilter}
                    checked={type === 'series'}
                />
                <span>Series</span>
            </label>

        </div>
    </div>
    )
};

export { InputSearch };