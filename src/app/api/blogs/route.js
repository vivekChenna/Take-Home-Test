import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      "https://65b790e246324d531d54efe3.mockapi.io/blogs"
    );


    return NextResponse.json(
      {
        data : response.data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch data",
      },
      {
        status: 500,
      }
    );
  }
}
