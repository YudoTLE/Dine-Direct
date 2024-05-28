const FilterMenu = ({ hook }) => {
    const [ filter, setFilter ] = hook

    return (
        <div className={ 'card-white'}>
            <button
                type='button'
                className={ filter === '' ? 'button-blue' : 'button-white' }
                onClick={ () => setFilter('')}
            >
                <h1>Semua</h1>
            </button>
            <button
                type='button'
                className={ filter === 'makanan' ? 'button-blue' : 'button-white' }
                onClick={ () => setFilter('makanan')}
            >
                <h1>Makanan</h1>
            </button>
            <button
                type='button'
                className={ filter === 'minuman' ? 'button-blue' : 'button-white' }
                onClick={ () => setFilter('minuman')}
            >
                <h1>Minuman</h1>
            </button>
            <button
                type='button'
                className={ filter === 'sampingan' ? 'button-blue' : 'button-white' }
                onClick={ () => setFilter('sampingan')}
            >
                <h1>Sampingan</h1>
            </button>
        </div>
    )
}

export default FilterMenu