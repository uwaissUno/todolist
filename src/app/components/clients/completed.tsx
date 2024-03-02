import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../services/init";
import { Delete } from "../../server/firebase";

export default function Completed() {
  const [loading, setLoading] = useState(true);
  const [completedData, setCompletedData] = useState([{}]);
 
    const completeData = () => {
      const q = query(collection(db, "todos"), where("done", "==", true));
      onSnapshot(q, (snapshots) => {
        setCompletedData(
          snapshots.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
        setLoading(false);
      });
    };
    completeData();

  return (
    <div className="border">
      {loading ? (
        <div className="flex justify-center items-center py-5 h-32">
          <div className="custom-loader"></div>
        </div>
      ) : (
        completedData?.map((item: any) => (
          <div className="p-2 flex justify-between" key={item.id}>
            <div>
              <h1 className="text-2xl font-bold">{item.todos}</h1>
              <p className="text-md">{item.times}</p>
            </div>
            <div className="flex gap-16">
              <button
                className="block w-8 aspect-square"
                onClick={() => Delete(item.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
              </button>
              
              {/* <button onClick={() => completed(item)} className="block w-8 aspect-square">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
         
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </button> */}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
