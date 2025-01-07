

import { axiosBackend } from "@/lib/axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  try {
    const data  = await request.json();
      const repsone = await axiosBackend.post('/api/search', data);

      return NextResponse.json({data: repsone.data});
  }catch(error: any){
      return NextResponse.json({message: error}, {status: 201});
  }
}



