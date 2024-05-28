import Link from 'next/link'

const OrderForm = ({ order, tableNumber, hook }) => {
    const [ modalId, setModalId ] = hook
    
    const orderArray = Array.from(order)
    let totalPrice = 0
    for (const [ _id, { amount, price } ] of orderArray)
        totalPrice += amount * price

    const handleSubmit = (e): Promise<null> => {
        e.preventDefault()

        router.push('/bill')

        setModalId('')
    }

    return (
        <div className='modal'>
            <div className='card-form'>
                <h1>Pesanan Anda</h1>
                <br />
                <div className='card-white'>
                    <table border='0'>
                        <thead>
                            <tr>
                                <th>
                                    <h2>Nama Pesanan</h2>
                                </th>
                                <th>
                                    <h2>Jumlah</h2>
                                </th>
                                <th>
                                    <h2>Harga</h2>
                                </th>
                                <th>
                                    <h2>Total</h2>
                                </th>
                            </tr>
                            <tr></tr>
                        </thead>
                        <tbody>
                            { orderArray.map(([ _id, { name, amount, price } ], index) => {
                                return (
                                    <tr key={ index }>
                                        <td>
                                            <p>{ name }</p>
                                        </td>
                                        <td>
                                            <p>{ amount }</p>
                                        </td>
                                        <td>
                                            <p>{ price }</p>
                                        </td>
                                        <td>
                                            <p>{ amount * price }</p>
                                        </td>
                                    </tr>
                                )
                            }) }
                            <tr>
                                <td></td><td></td><td></td>
                                <td>
                                    <p>{ totalPrice }</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3 style={ { 'text-align': 'end' } }>*pesanan akan diantarkan ke meja { tableNumber }</h3>
                <div className='action'>
                    <button
                        type='button'
                        className='button-blue'
                        onClick={ () => setModalId('') }
                    >
                        <h2>Kembali</h2>
                    </button>
                    <Link
                        className='button-blue'
                        href={{
                            pathname: '/bill',
                            query: { order: JSON.stringify(orderArray), totalPrice, tableNumber }
                        }}
                    >
                        <h2>Pesan</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderForm