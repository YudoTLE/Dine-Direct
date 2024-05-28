import MenuModel from '@/models/MenuModel'
import ConnectMongoDB from '@/libs/mongodb'
import { NextResponse } from 'next/server'

export const GET = async (
    req: any,
    { params }: { params: { id: string } }
): Promise<NextResponse> => {
    try {  
        await ConnectMongoDB()
    
        const menu = await MenuModel.findOne({ _id: id })

        return NextResponse.json(item)

        return NextResponse.json(
            item,
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error '},
            { status: 500 }
        )
    }
}

export const DELETE = async (
    req: any,
    { params }: { params: { id: string } }
): Promise<NextResponse> => {
    console.log('woiowio')

    try {  
        await ConnectMongoDB()

        const { id } = params
    
        await MenuModel.deleteOne({ _id: id })

        return NextResponse.json(
            { message: 'Menu deleted successfully' },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error '},
            { status: 500 }
        )
    }
}
