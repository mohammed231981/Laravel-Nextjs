

import { axiosBackend } from "@/lib/axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

  try {
      const repsone = await axiosBackend.get('/api/notifications');

      return NextResponse.json({data: repsone.data});
  }catch(error: any){
      return NextResponse.json({message: error}, {status: 201});
  }
}

export async function DELETE(request: Request) {

  try {
      const repsone = await axiosBackend.delete('/api/notifications');

      return NextResponse.json({data: repsone.data});
  }catch(error: any){
      return NextResponse.json({message: error}, {status: 201});
  }
}


