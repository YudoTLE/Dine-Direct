const SearchBar = ({ hook }) => {
    const [ keyword, setKeyword ] = hook

    return (
        <input
            type='search'
            className='search-bar'
            placeholder='Cari Hidangan...'
            value={ keyword }
            onChange={ () => setKeyword(event.target.value) }
        />
    )
}

export default SearchBar