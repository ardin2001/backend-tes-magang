import {
  collection,
  doc,
  setDoc,
  query,
  getDocs,
  deleteDoc,
  getDoc,
  updateDoc,
  orderBy,
  writeBatch,
} from "firebase/firestore";
import App from "./config";
import { getFirestore } from "firebase/firestore";
import { success, notFound, notImplemented } from "@/app/api/statusCode";

const db = getFirestore(App);

export async function GetOrderProductById(id: any) {
  try {
    const docSnap = await getDoc(doc(db, "order_product", id));
    if (docSnap.exists()) {
      const data = { id: docSnap.id, ...docSnap.data() };
      return { status: true, statusCode: success, data };
    }
    return { status: false, statusCode: notFound, data: null };
  } catch {
    return { status: false, statusCode: notImplemented, data: null };
  }
}

export async function PostOrderProduct(id: string, dataInput: any) {
  try {
    dataInput.map(async (data: any) => {
      await setDoc(doc(collection(db, "order_product")), {order_id:id,...data});
    });
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}

export async function GetAllOrderProduct(order: any, sort: "asc" | "desc") {
  const createQuery = (db: any, order: any, sort: "asc" | "desc") => {
    let q;
    if (order) {
      q = query(collection(db, "order_product"), orderBy(order, sort));
    } else {
      q = query(collection(db, "order_product"));
    }
    return q;
  };
  try {
    const q = createQuery(db, order, sort);
    const querySnapshot = await getDocs(q);
    const response: any = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return { status: true, statusCode: success, data: response };
  } catch {
    return { status: false, statusCode: notImplemented, data: null };
  }
}

export async function DeleteOrderProduct(id: any) {
  try {
    await deleteDoc(doc(db, "order_product", id));
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}

export async function UpdateOrderProduct({
  id,
  dataUpdate,
}: {
  id: string;
  dataUpdate: any;
}) {
  try {
    await updateDoc(doc(db, "order_product", id), dataUpdate);
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}
