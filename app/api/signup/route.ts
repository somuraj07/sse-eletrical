import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
      const body = await req.json();
      const {name ,email,password,role}  = body;
      if(!name || !email || !password || !role){
        return NextResponse.json({message:"all fields required"},{status:400});

      }
      const exist = await prisma.user.findUnique({
        where:{email}
      });
      const hashed = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data:{
          name,
          email,
          hashedPassword:hashed,
          role
        }
      });
      return NextResponse.json({message:"user created succesfully"},{status:201});
    } catch (error) {
        return NextResponse.json({message:"Internal server in signup"},{status:500});
    }
}