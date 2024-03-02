"use client";
import { addNew } from "./server/firebase";
import Completed from "./components/clients/completed";
import NotCompleted from "./components/clients/not-completed";
import AddNewPage from "./components/AddNew";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <h1 className="text-3xl text-center mt-2 font-semibold">
        Welcome to our To Do List
      </h1>
     <AddNewPage/>
      <div className="border rounded-xl">
        <h1 className="text-3xl text-center mt-2 font-semibold">
          Uncompleted Tasks
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
        <NotCompleted />
        </Suspense>
      </div>
      <div className="border rounded-xl">
        <h1 className="text-3xl text-center mt-2 font-semibold">
          Completed Tasks
        </h1>
        <Completed />
      </div>
    </div>
  );
}
