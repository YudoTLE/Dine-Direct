import MenuModel from '@/models/MenuModel'
import ConnectMongoDB from '@/libs/mongodb'
import { NextResponse } from 'next/server'

export const POST = async (
    req: any
): Promise<NextResponse> => {
    try {  
        await ConnectMongoDB()
    
        const menu = await req.json()
    
        await MenuModel.create(menu)

        return NextResponse.json(
            { message: 'Create new menu'},
            { status: 201 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error '},
            { status: 500 }
        )
    }
}

export const GET = async (
    req: any
): Promise<NextResponse> => {
    try {
        await ConnectMongoDB()

        const menus = await MenuModel.find()

        return NextResponse.json(
            menus,
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error '},
            { status: 500 }
        )
    }
}