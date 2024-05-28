import axios from 'axios'

const MenuItem = ({ menu }) => {
    const { _id, name, category, description, price } = menu
    const reCatrgoryTag = {
        makanan: 'category-tag-red',
        minuman: 'category-tag-blue',
        sampingan: 'category-tag-green'
    }

    const handleDeletion = async (): Promise<void> => {
        const response = await axios.delete(`http://localhost:3000/api/menu/${ _id }`)
        if (!response.ok)
            return
    }

    return (
        <form className='card-white'>
            <div className={ reCatrgoryTag[category] }><h3>{ category }</h3></div>
            <h1>{ name }</h1>
            <p>{ description }</p>
            <h2>{ price }</h2>
            <div className='action'>
                <button
                    className='button-blue'
                    onClick={ handleDeletion }
                >
                    <h2>Hapus</h2>
                </button>
            </div>
        </form>
    )
}

export default MenuItem