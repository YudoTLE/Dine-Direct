'use client'

import { useState } from 'react'
import axios from 'axios'

const NewMenuForm = ({ hook }) => {
    const [ trigger, setTrigger ] = hook
    const [ formData, setFormData ] = useState({
        name: '',
        category: '',
        description: '',
        price: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e): Promise<null> => {
        if (formData.name === '' || formData.category === '' || formData.description === '' || formData.price === '') {
            return
        }

        const response = await axios.post('http://localhost:3000/api/menu', formData)
        if (!response.ok)
            return

        setTrigger(trigger + 1)
    }

    return (
        <form className='card-white' onSubmit={ handleSubmit }>
            <input
                type='text'
                name='name'
                value={ formData.name }
                onChange={ handleChange }
                placeholder='name'
            />
            <select
                name='category'
                value={ formData.category }
                onChange={ handleChange }
            >
                <option value=''>
                    Pilih Kategori
                </option>
                <option value='makanan'>
                    makanan
                </option>
                <option value='minuman'>
                    minuman
                </option>
                <option value='sampingan'>
                    sampingan
                </option>
            </select>
            <textarea
                name='description'
                value={ formData.description }
                onChange={ handleChange }
                placeholder='description'
            >
            </textarea>
            <input
                type='number'
                name='price'
                value={ formData.price }
                onChange={ handleChange }
                placeholder='price'
            />
            <button
                className='button-blue'
            >
                Tambahkan Baru
            </button>
        </form>
    )
}

export default NewMenuForm