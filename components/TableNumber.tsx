const TableNumber = ({ tableNumber, hook }) => {
    const [ modalId, setModalId ] = hook

    return (
        <>
        <button
            type='button'
            className='param card-blue'
            onClick={ () => setModalId('table-number-edit') }
        >
            <span className='number-icon'>
                { tableNumber }
            </span>
            <span className='title-icon'>
                Nomor Meja
            </span>
        </button>
        </>
    )
}

export default TableNumber