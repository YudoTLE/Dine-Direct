import mongoose, { Schema } from 'mongoose'

const MenuSchema = new Schema({
    name: String,
    category: String,
    description: String,
    price: Number
})

const MenuModel = mongoose.models.Menu || mongoose.model('Menu', MenuSchema, 'Menu')

export default MenuModel