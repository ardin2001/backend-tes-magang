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
  addDoc,
} from "firebase/firestore";
import App from "./config";
import { getFirestore } from "firebase/firestore";
import { success, notFound, notImplemented } from "@/app/api/statusCode";

const db = getFirestore(App);

export async function GetOrderById(id: any) {
  try {
    const docSnap = await getDoc(doc(db, "orders", id));
    if (docSnap.exists()) {
      const data = { id: docSnap.id, ...docSnap.data() };
      return { status: true, statusCode: success, data };
    }
    return { status: false, statusCode: notFound, data: null };
  } catch {
    return { status: false, statusCode: notImplemented, data: null };
  }
}

export async function PostOrder(dataInput: any) {
  try {
    // await setDoc(doc(collection(db, "orders")), dataInput);
    const docRef = await addDoc(collection(db, "orders"), {id : dataInput.user_id});
    if(docRef.id){
      return { status: true, statusCode: success, id: docRef.id };
    }
  } catch {
    return { status: false, statusCode: notImplemented, id: null };
  }
}

export async function GetAllOrder(order: any, sort: "asc" | "desc") {
  const createQuery = (db: any, order: any, sort: "asc" | "desc") => {
    let q;
    if (order) {
      q = query(collection(db, "orders"), orderBy(order, sort));
    } else {
      q = query(collection(db, "orders"));
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

export async function DeleteOrder(id: any) {
  try {
    await deleteDoc(doc(db, "orders", id));
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}

export async function UpdateOrder({
  id,
  dataUpdate,
}: {
  id: string;
  dataUpdate: any;
}) {
  try {
    await updateDoc(doc(db, "orders", id), dataUpdate);
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}
