import { addNew } from "@/app/server/firebase";

export default function AddNewPage(){
    return(
        <form onSubmit={(e) => addNew(e)} className="p-2">
        <h3>Add your task here</h3>
        <div className="flex flex-col">
          <label htmlFor="todos">To Do Lists</label>
          <input type="text" name="todos" className="ring-2 ring-red-300 rounded-md focus:ring-red-500 p-1" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="times">To Do Lists</label>
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