import { addNew } from "@/app/server/firebase";

export default function AddNewPage(){
    return(
        <form action={addNew} className="mt-4 border rounded-xl p-4 mb-2">
        <h3 className="font-roboto text-xl">Add your task here</h3>
        <div className="flex flex-col">
          <label htmlFor="todos" className="font-roboto">To Do Lists</label>
          <input type="text" name="todos" className="ring-1 ring-red-300 rounded-md focus:outline-red-500 p-1 bg-transparent backdrop-blur-md" />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="times" className="font-roboto">Date</label>
          <input type="date" name="times" className="ring-2 ring-red-300 rounded-md focus:ring-red-500 p-1" />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
    )
}