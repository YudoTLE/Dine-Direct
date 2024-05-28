'use client'

import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './styles.css'
import SearchBar from '@/components/SearchBar' 
import MenuItemAdmin from '@/components/MenuItemAdmin'
import NewMenuForm from '@/components/NewMenuForm'

const Admin = () => {
    const [ keyword, setKeyword ] = useState('')
    const [ menus, setMenus ] = useState([])
    const [ submit, setSubmit ] = useState(false)

    const fetchMenus = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/search',
                                { keyword })
            
            setMenus(response.data)
        }
        catch(error) {
            
        }
    }
    
    useEffect(() => {
        fetchMenus()
    }, [ keyword, submit ])

    return (
        <div className='container'>
            <header>
                <SearchBar hook={ [keyword, setKeyword ] } />
            </header>
            <aside>
                <NewMenuForm hook={ [ submit, setSubmit ] } />
            </aside>
            <main>
                { menus.map((menu, index) => {
                    return (
                        <MenuItemAdmin
                            key={ index }
                            menu={ menu }
                        />
                    )
                }) }
            </main>
        </div>
    )
}

export default Admin