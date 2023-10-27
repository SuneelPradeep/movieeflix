import dbConnect from '@/app/utils/dbConnection'
import Contact from '@/app/models/contactBackend'
import { NextResponse } from 'next/server'


export async function POST(req,res){
     try {
        let body = await req.json()
        //console.log('db00 connected',body);
        await dbConnect()
        //console.log('db connected',body);
        await Contact.create(body)
        return NextResponse.json({
            message : "Message sent successfully"
        },{
            status : 200
        })
     } catch (error) {
        return NextResponse.json(
         {message : error.message
        },{status : 500})
     }
}