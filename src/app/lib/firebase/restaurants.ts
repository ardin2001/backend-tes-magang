import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  or,
  getDoc,
  updateDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import App from "./config";
import { getFirestore } from "firebase/firestore";
import { success, notFound, notImplemented } from "@/app/api/statusCode";

const db = getFirestore(App);

export async function GetRestaurantById(id: any) {
  try {
    const docSnap = await getDoc(doc(db, "restaurants", id));
    if (docSnap.exists()) {
      const data = { id: docSnap.id, ...docSnap.data() };
      return { status: true, statusCode: success, data };
    }
    return { status: false, statusCode: notFound, data: null };
  } catch {
    return { status: false, statusCode: notImplemented, data: null };
  }
}

export async function GetRestaurantBy(inputUser: any) {
  try {
    const q = query(
      collection(db, "restaurants"),
      or(
        where("name", "==", inputUser.name)
        //   where("fullname", "==", inputUser.fullname)
      )
    );
    try {
      const querySnapshot = await getDocs(q);
      const response: any = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      if (response.length == 0) {
        return { status: false, statusCode: notFound, data: null };
      }
      return { status: true, statusCode: success, data: response[0] };
    } catch {
      return { status: false, statusCode: notImplemented, data: null };
    }
  } catch {
    return { status: false, statusCode: notImplemented, data: null };
  }
}

export async function PostRestaurant(dataInput: any) {
  try {
    dataInput.created_at = serverTimestamp();
    await setDoc(doc(collection(db, "restaurants")), dataInput);
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}

export async function GetAllRestaurant( order : any, sort:"asc" | "desc") {
  const createQuery = (db:any, order:any, sort:"asc" | "desc") => {
    let q;
    if (order) {
      q = query(collection(db, "restaurants"), orderBy(order, sort),orderBy("created_at", "desc"));
    } else {
      q = query(collection(db, "restaurants"),orderBy("created_at", "desc"));
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

export async function DeleteRestaurant(id: any) {
  try {
    await deleteDoc(doc(db, "restaurants", id));
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}

export async function UpdateRestaurant({
  id,
  dataUpdate,
}: {
  id: string;
  dataUpdate: any;
}) {
  try {
    await updateDoc(doc(db, "restaurants", id), dataUpdate);
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}
