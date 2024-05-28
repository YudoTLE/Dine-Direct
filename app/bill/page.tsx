'use client'

import { useSearchParams } from 'next/navigation'
import './styles.css'

const Bill = () => {
    const searchParams = useSearchParams()
    const order = JSON.parse(searchParams.get('order'))
    const totalPrice = searchParams.get('totalPrice')
    const tableNumber = searchParams.get('tableNumber')

    return (
        <div className='container'>
            <main>
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
                                { order.map(([ _id, { name, amount, price } ], index) => {
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
                </div>
            </main>
        </div>
    )
}

export default Bill