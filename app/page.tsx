'use client'

import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './styles.css'
import SearchBar from '@/components/SearchBar' 
import FilterMenu from '@/components/FilterMenu'
import MenuItem from '@/components/MenuItem'
import TableNumber from '@/components/TableNumber'
import TableNumberForm from '@/components/TableNumberForm'
import Order from '@/components/Order'
import OrderForm from '@/components/OrderForm'

const Home = () => {
    const [ keyword, setKeyword ] = useState('')
    const [ filter, setFilter ] = useState('')
    const [ menus, setMenus ] = useState([])
    const [ newMenuTrigger, setNewMenuTrigger ] = useState(false)
    const [ tableNumber, setTableNumber ] = useState(2)
    const [ modalId, setModalId ] = useState('')
    const order = useRef(new Map())
    
    const fetchMenus = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/search',
                                { keyword, filter })
            
            setMenus(response.data)
        }
        catch(error) {
            
        }
    }

    useEffect(() => {
        fetchMenus()
    }, [ keyword, filter ])

    return (
        <>
        <div className='container'>
            <header>
                <SearchBar hook={ [keyword, setKeyword ] }/>
            </header>
            <aside>
                <FilterMenu hook={ [ filter, setFilter ] } />
                <TableNumber
                    tableNumber={ tableNumber }
                    hook={ [ modalId, setModalId ] }
                />
                <Order
                    hook={ [ modalId, setModalId ] }
                />
            </aside>
            <main>
                { menus.map((menu, index) => {
                    return (
                        <MenuItem
                            key={ index }
                            menu={ menu }
                            order={ order.current }
                        />
                    )
                }) }
            </main>
        </div>
        
        { modalId === 'table-number-edit' ? 
            <TableNumberForm
                tableNumberHook={ [ tableNumber, setTableNumber ] }
                modalHook={ [ modalId, setModalId ] }
            /> : null
        }
        { modalId === 'order-finalize' ? 
            <OrderForm
                order={ order.current }
                tableNumber={ tableNumber }
                hook={ [ modalId, setModalId ] }
            /> : null
        }
        </>
    )
}

export default Home