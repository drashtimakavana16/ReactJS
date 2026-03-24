import React, { useState } from 'react'

const ApiFetch = () => {

    const [Data1, setData1] = useState([]);
    //Method 1
    function Method1() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((rawdata) => {
            console.log(rawdata);
            return rawdata.json();
        })
        .then((data) => {
            console.log(data);
            return setData1(Data1);
        });
        //.catch()

    }

    //Method 2

    //Method 3
  return (
    <>
    {/* Method 1 */}
    <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4  p-6 font-bold bg-green-100 '>
        <h1 className='text-center text-3xl '>Method 1 : fetch - then -then - catch</h1>
        <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 '>
        </div>

        <button className='w-36 px-4 py-2 text-center text-white bg-green-700 rounded text-xl active:bg-green-500 active:text-green-950 active:scale-95 transition-all' onClick={Method1}>Get Data 1</button>
    </section>

    {/* Method 2 */}
    <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4  p-6 font-bold bg-blue-100 '>
        <h1 className='text-center text-3xl '>Method 2 : Async - Await - Fetch</h1>
        <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 '>

        </div>
        <button className='w-36 px-4 py-2 text-center text-white bg-blue-700 rounded text-xl active:bg-blue-500 active:text-blue-950 active:scale-95 transition-all'>Get Data 2</button>
    </section>

    {/* Method 3 */}
    <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4  p-6 font-bold bg-orange-100'>
        <h1 className='text-center text-3xl '>Method 3 : Async - Await - Axios</h1>
        <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 '>

        </div>
        <button className='w-36 px-4 py-2 text-center text-white bg-orange-700 rounded text-xl active:bg-orange-500 active:text-orange-950 active:scale-95 transition-all'>Get Data 3</button>
    </section>
    </>
  );
};

export default ApiFetch