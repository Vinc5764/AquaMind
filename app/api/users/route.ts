/* eslint-disable camelcase */
import { connectToDB } from "@/lib/db"
import Mentee from "@/models/Mentee"
import Mentor from "@/models/Mentor"
import User from "@/models/User"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    await connectToDB();

    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

    const user = await User.findById(userId);
    console.log(user);
    
    if (!user) {
      return NextResponse.json({ message: "User not found" });
    }

    let userInfo;

    const menteeInfo = await Mentee.findOne({userId:user._id});
    // eslint-disable-next-line camelcase
    
  // eslint-disable-next-line camelcase


    if (menteeInfo) {

      userInfo = { message: "MENTEE fetched", user:  { ...user.toObject(), menteeInfo } };
    } else {
      const mentorInfo = await Mentor.findOne({userId:user._id});
      if (mentorInfo) {
        userInfo = { message: "MENTOR fetched", user:  { ...user.toObject(), mentorInfo } };
      } else {
        userInfo = { message: "Neither MENTOR nor MENTEE found" };
      }
    }

    return NextResponse.json(userInfo);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
};

