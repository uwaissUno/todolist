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

export const addNew = async (e: any) => {
  e.preventDefault();
  const todos = e.target.todos.value;
  const times = e.target.times.value;
  await addDoc(collection(db, "todos"), {
    todos: todos,
    times: times,
    timestamp: serverTimestamp(),
    done: false,
  });
  e.target.reset();
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
export const Edit = async (e: any, id: string, {date , task} : any) => {
  e.preventDefault();
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
