
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../services/init";
import { Delete, completed } from "../../server/firebase";
import Link from "next/link";

export default function notCompleted() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([{}]);
  
    const showData = () => {
      const q = query(collection(db, "todos"), where("done", "==", false));
      //   UNTUK NGAMBIL SEMUA DATA PAKE USESTATE
      // SETDATA NYA DIISI SNAPSHOT YANG UDAH DIMAPPING YAAA WEYY
      onSnapshot(q, (snapshots) => {
        const res = snapshots.docs.map((doc) => ({
          // LAIN KLAI KALO MAU AMBIL DATA MINIMAL ID NYA JUGA DIBIKIN HYAA WEYYY
          // SOALNYA NANTI EDIT AMA DELETE REFERNCE NYA PAKE APA COKKK
          id: doc.id,
          ...doc.data(),
        }));

        setData(res);
        setLoading(false)
      });
    };
    showData();


  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center py-5 h-32">
          <div className="custom-loader"></div>
        </div>
      ) : (
        <div className="border border-b-0 backdrop-blur-xl">
          {data?.map((item: any) => (
            <div className="p-2 flex justify-between flex-col md:flex-row border" key={item.id}>
              <div>
                <h1 className="text-2xl font-bold text-white">{item.todos}</h1>
                <p className="text-md text-white">{item.times}</p>
              </div>
              <div className="flex gap-2 md:gap-8 mr-2 py-2">
                <button
                  className=" w-6 md:w-8 aspect-square flex items-center"
                  onClick={() => Delete(item.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" className="w-full h-full"/>
                  </svg>
                </button>
                <Link href={`/${item.id}`} className=" w-6 md:w-8 aspect-square flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" className="w-full h-full"/>
                  </svg>
                </Link>
                <button
                  onClick={() => completed(item)}
                  className="block w-6 md:w-8 aspect-square"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" className="w-full h-full" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
  // console.log(data);
}
