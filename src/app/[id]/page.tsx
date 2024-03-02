"use client";
import { useRef } from "react";
import { Edit } from "../server/firebase";
import { useRouter } from "next/navigation";

export default function EditPage({ params }: { params: any }) {
  console.log(params);
  const date = useRef(null)
  const input = useRef(null)
  const {push} = useRouter()
  const handleEdit = (e: any) => {
   
    const data = {
      date:date.current?.value,
      task:input.current?.value
    }
    Edit(e, params.id, data)
    
    push("/")
  }
  return (
    <form
      className="max-w-sm mx-auto border-sky-500 p-4"
      onSubmit={(e) => handleEdit(e)}
    >
      <h1 className="text-center text-3xl font-bold">
        Edit your to do list here
      </h1>
      <p className="text-xl mt-2">New Task</p>
      <input
        type="text"
        className="p-2 ring-2 rounded-md ring-pink-500 focus:outline-pink-500 mt-2 w-full border-pink-400"
        name="task"
        ref={input}
        required
      />
      <p className="text-xl mt-4">New Date</p>
      <input
        type="date"
        className="p-2 ring-2 rounded-md ring-pink-500 border-pink-400  focus:outline-pink-500 mt-2 w-full "
        name="date"
        ref={date}
        required
      />
      <button
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
