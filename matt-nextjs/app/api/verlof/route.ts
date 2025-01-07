

import { axiosBackend } from "@/lib/axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

  try {
      const repsone = await axiosBackend.get('/api/verlof/verlofkaart');

      return NextResponse.json({data: repsone.data});
  }catch(error: any){
      return NextResponse.json({message: error}, {status: 201});
  }
}


export async function POST(request: Request) {

  try {
    const data  = await request.json();
    

  console.log(data)
      const repsone = await axiosBackend.post('/api/verlof/verlofkaart', data);

      return NextResponse.json({data: repsone.data});
  }catch(error: any){
      return NextResponse.json({message: error}, {status: 201});
  }
}
