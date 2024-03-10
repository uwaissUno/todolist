import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../services/init";

export const addNew = async (formdata: FormData) => {

  const todos = formdata.get("todos");
  const times = formdata.get("times");
  await addDoc(collection(db, "todos"), {
    todos: todos,
    times: times,
    timestamp: serverTimestamp(),
    done: false,
  });

};
export const Delete = async (id: any) => {
  await deleteDoc(doc(db, "todos", id));
  console.log("done");
};
export const completed = async (item: any) => {
  await setDoc(doc(db, "todos", item.id), {
    done: true,
    todos: item.todos,
    timestamp: item.timestamp,
    times: item.times,
  });
};
export const Edit = async ( id: string, {date , task} : any) => {

  console.log(id);
  try {
    const docRef = doc(db, "todos", id);
    const snapshot = await getDoc(docRef);
    console.log(snapshot.data());
    const data = snapshot.data();
    console.log(data);
    await updateDoc(docRef, {
      done: data?.done,
      times: date,
      todos: task,
      timestamp: data?.timestamp,
    });
   
  } catch {
    return new Error("error");
  }
};
