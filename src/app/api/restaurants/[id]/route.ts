import { NextRequest, NextResponse } from "next/server";
import {
  GetRestaurantById,
  UpdateRestaurant,
  DeleteRestaurant,
} from "@/app/lib/firebase/restaurants";
import {
  notFound,
  internalServerError,
  notImplemented,
  unauthorized
} from "../../statusCode";
import VerifyToken from "@/app/function/VerifyToken";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
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

  try {
    const { status, statusCode, data } = await GetRestaurantById(params.id);
    if (status) {
      return NextResponse.json(
        {
          status: true,
          statusCode,
          message: "Successfully get detail restaurants data",
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
            message: "Failed get detail restaurants data",
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
    const { status, statusCode }: any = await GetRestaurantById(params.id);
    if (status) {
      const { status, statusCode }: any = await UpdateRestaurant({
        id: params.id,
        dataUpdate,
      });

      if (status) {
        return NextResponse.json(
          {
            status,
            statusCode,
            message: "Successfully update restaurants data",
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
            message: "Failed update restaurants data",
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
            message: "Product not found",
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
    const { status, statusCode } = await GetRestaurantById(params.id);
    if (status) {
      const { status, statusCode } = await DeleteRestaurant(params.id);
      if (status) {
        return NextResponse.json(
          {
            status,
            statusCode,
            message: "Successfully delete restaurants data",
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
            message: "Restaurants not found",
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
