'use client'

import { useState } from 'react'

const TableNumberForm = ({ tableNumberHook, modalHook }) => {
    const [ tableNumber, setTableNumber ] = tableNumberHook
    const [ modalId, setModalId ] = modalHook
    const [ formData, setFormData ] = useState({
        'table-number': tableNumber
    })
    let prv = false

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e): Promise<null> => {
        e.preventDefault()

        if (formData['table-number'] == '') {
            return
        }

        setTableNumber(formData['table-number'])
        setModalId('')
    }

    return (
        <div className='modal'>
            <form className='card-form' onSubmit={ handleSubmit }>
                <h1>Ganti Nomor Meja</h1>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='table-number'>
                                    Nomor Meja
                                </label>
                            </td>
                            <td>
                                <input
                                    type='number'
                                    id='table-number'
                                    name='table-number'
                                    value={ formData['table-number'] }
                                    onChange={ handleChange }
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='action'>
                    <button className='button-blue'>
                        <h2>Ganti</h2>
                    </button>
                </div>
            </form>

        </div>
    )
}

export default TableNumberForm