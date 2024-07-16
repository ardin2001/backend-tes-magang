import { NextRequest, NextResponse } from "next/server";
import { GetAllOrder, PostOrder } from "@/app/lib/firebase/orders";
import { PostOrderProduct } from "@/app/lib/firebase/order_products";
import {
  notFound,
  internalServerError,
  notImplemented,
  conflict,
} from "../statusCode";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limits: number = Number(searchParams.get("limit")) || 10;
  const order = searchParams.get("order");
  const sort: any = searchParams.get("sort") || "asc";
  const page: number = Number(searchParams.get("page")) || 1;
  try {
    let { status, statusCode, data } = await GetAllOrder(order, sort);
    if (status) {
      return NextResponse.json(
        {
          status,
          statusCode,
          message: "Success get all orders data",
          data: data.splice((page - 1) * limits, limits),
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
            message: "failed get all orders data",
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
    const { status, statusCode, id }: any = await PostOrder(dataInput);
    if (status) {
      const { status, statusCode } = await PostOrderProduct(
        id,
        dataInput.order_products
      );
      if (status) {
        return NextResponse.json(
          {
            status,
            statusCode,
            message: "Successfully post orders data",
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
            message: "Input invalid",
            data: null,
          },
          {
            status: statusCode,
          }
        );
      }
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
