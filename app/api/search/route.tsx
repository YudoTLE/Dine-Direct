import MenuModel from '@/models/MenuModel'
import ConnectMongoDB from '@/libs/mongodb'
import { NextResponse } from 'next/server'
const fuzz = require('fuzzball')

export const POST = async (
    req: any
): Promise<NextResponse> => {
    try {
        await ConnectMongoDB()

        const { keyword, filter } = await req.json()
        const subkeyword = keyword.split(' ')
        
        const findParams = {}
        if (filter)
            findParams.category = filter
        const menus = await MenuModel.find(findParams)

        let result = []
        for (let i = 0; i < menus.length; i++) {
            const { _id, name, category, description, price } = menus[i]
            const subname = name.split(' ')

            let maxSimilarity = 0
            if (keyword) {
                for (let j = 0; j < subname.length; j++)
                    for (let k = 0; k < subkeyword.length; k++) 
                {
                    const similarity = fuzz.ratio(subname[j], subkeyword[k])
                    maxSimilarity = Math.max(maxSimilarity, similarity)                
                }
            } else {
                maxSimilarity = 100
            }

            if (maxSimilarity >= 70)
            {
                result.push({ _id, name, category, description, price, maxSimilarity })
            }
        }
        result.sort((a, b) => b.maxSimilarity - a.maxSimilarity)

        return NextResponse.json(
            result,
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error '},
            { status: 500 }
        )
    }
}