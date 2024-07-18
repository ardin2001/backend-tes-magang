import { NextRequest, NextResponse } from "next/server";
import {
  GetAllRestaurant,
  PostRestaurant,
  GetRestaurantBy,
} from "@/app/lib/firebase/restaurants";
import {
  notFound,
  internalServerError,
  notImplemented,
  conflict,
  unauthorized,
} from "../statusCode";
import VerifyToken from "@/app/function/VerifyToken";

export async function GET(req: NextRequest) {
  const {status} = VerifyToken(req.headers.get("authorization"))
  if (!status) {
    return NextResponse.json(
      {
        status: false,
        statusCode: unauthorized,
        message: "Invalid token JWT",
        data: null,
      },
      {
        status: unauthorized,
      }
    );
  }
  const { searchParams } = new URL(req.url);
  const category:any = searchParams.get("category");
  try {
    let { status, statusCode, data } = await GetAllRestaurant(category);
    if (status) {
      return NextResponse.json(
        {
          status,
          statusCode,
          message: "Success get all restaurants data",
          data,
        },
        {
          status: statusCode,
        }
      );
    } else {
      if (statusCode == notFound) {
        return NextResponse.json(
          {
            status,
            statusCode,
            message: "failed get all restaurants data",
            data,
          },
          {
            status: statusCode,
          }
        );
      } else if (statusCode == notImplemented) {
        return NextResponse.json(
          {
            status,
            statusCode,
            message: "Error Server API",
            data: null,
          },
          {
            status: statusCode,
          }
        );
      }
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

export async function POST(req: NextRequest) {
  try {
    const dataInput = await req.json();
    const { status, statusCode }: any = await GetRestaurantBy(dataInput);
    if (status) {
      return NextResponse.json(
        {
          status: false,
          statusCode: conflict,
          message: "Restaurants name available",
          data: null,
        },
        {
          status: conflict,
        }
      );
    } else {
      if (statusCode == notFound) {
        const { status, statusCode } = await PostRestaurant(dataInput);
        if (status) {
          return NextResponse.json(
            {
              status,
              statusCode,
              message: "Successfully post restaurants data",
              data: dataInput,
            },
            {
              status: statusCode,
            }
          );
        } else {
          return NextResponse.json(
            {
              status,
              statusCode,
              message: "Error Server API",
              data: null,
            },
            {
              status: statusCode,
            }
          );
        }
      } else if (statusCode == notImplemented) {
        return NextResponse.json(
          {
            status,
            statusCode,
            message: "Error Server API",
            data: null,
          },
          {
            status: statusCode,
          }
        );
      }
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
