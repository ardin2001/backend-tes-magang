import { NextRequest, NextResponse } from "next/server";
import VerifyToken from "@/app/function/VerifyToken";
import {
  internalServerError,
  unauthorized,
  success,
} from "../../statusCode";

export async function GET(req: NextRequest) {
  try {
    const { status, data } = VerifyToken(req.headers.get("authorization"));
    if (status) {
      return NextResponse.json(
        {
          status,
          statusCode: success,
          message: "Token verified",
          data,
        },
        {
          status: success,
        }
      );
    } else {
      return NextResponse.json(
        {
          status,
          statusCode: unauthorized,
          message: "Invalid token JWT",
          data: null,
        },
        {
          status: unauthorized,
        }
      );
    }
  } catch {
    return NextResponse.json(
      {
        status: false,
        statusCode: internalServerError,
        message: "Internal Server Error",
        data: null,
      },
      {
        status: internalServerError,
      }
    );
  }
}
