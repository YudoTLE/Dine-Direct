'use client'

import { useState, useEffect } from 'react'

const MenuItem = ({ menu, order, trigger }) => {
    const { _id, name, category, description, price } = menu
    const [ amount, setAmount ] = useState(0)
    const reCatrgoryTag = {
        makanan: 'category-tag-red',
        minuman: 'category-tag-blue',
        sampingan: 'category-tag-green'
    }

    useEffect(() => {
        setAmount(order.has(_id) ? order.get(_id).amount : 0)
    }, [ menu ])

    const handleMinus = () => {
        if (amount <= 0)
            return

        if (amount == 1)
            order.delete(_id)
        else
            order.get(_id).amount--
        setAmount(amount - 1)
    }
    
    const handlePlus = () => {
        if (amount === 0)
            order.set(_id, { name, price, amount: 1 })
        else
            order.get(_id).amount++
        setAmount(amount + 1)
    }

    return (
        <div className='card-white'>
            <div className={ reCatrgoryTag[category] }><h3>{ category }</h3></div>
            <h1>{ name }</h1>
            <p>{ description }</p>
            <div className='action'>
                <h1>{ price }</h1>
                <div className='counter'>
                    <button
                        type='button'
                        className='button'
                        onClick={ handleMinus }
                    > -
                    </button>
                    <h2>
                        { amount }
                    </h2>
                    <button
                        type='button'
                        className='button'
                        onClick={ handlePlus }
                    > +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuItem