import { NextRequest, NextResponse } from "next/server";
import {
  GetOrderById,
  UpdateOrder,
  DeleteOrder,
} from "@/app/lib/firebase/orders";
import {
  notFound,
  internalServerError,
  notImplemented,
} from "../../statusCode";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status, statusCode, data } = await GetOrderById(params.id);
    if (status) {
      return NextResponse.json(
        {
          status: true,
          statusCode,
          message: "Successfully get detail order data",
          data: data,
        },
        {
          status: statusCode,
        }
      );
    } else {
      if (statusCode == notFound) {
        return NextResponse.json(
          {
            status: false,
            statusCode,
            message: "Failed get detail order data",
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

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const dataUpdate = await req.json();
    const { status, statusCode }: any = await GetOrderById(params.id);
    if (status) {
      const { status, statusCode }: any = await UpdateOrder({
        id: params.id,
        dataUpdate,
      });

      if (status) {
        return NextResponse.json(
          {
            status,
            statusCode,
            message: "Successfully update order data",
            data: null,
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
            message: "Failed update order data",
            data: null,
          },
          {
            status: statusCode,
          }
        );
      }
    } else {
      if (statusCode == notFound) {
        return NextResponse.json(
          {
            status,
            statusCode,
            message: "Order not found",
            data: null,
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status, statusCode } = await GetOrderById(params.id);
    if (status) {
      const { status, statusCode } = await DeleteOrder(params.id);
      if (status) {
        return NextResponse.json(
          {
            status,
            statusCode,
            message: "Successfully delete order data",
            data: null,
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
    } else {
      if (statusCode == notFound) {
        return NextResponse.json(
          {
            status,
            statusCode,
            message: "Order not found",
            data: null,
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
