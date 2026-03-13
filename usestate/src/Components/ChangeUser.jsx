import React from 'react'
import { useState } from 'react'

const ChangeUser = () => {

    const [Data, setData] = useState({ username: "Test_User", role: "Tester" , photo : "https://static.vecteezy.com/system/resources/thumbnails/069/822/727/small/cute-tabby-cat-relaxing-on-red-sofa-with-bokeh-lights-photo.jpg" });

    function Change() {
        if (Data.username === "Test_User") {
            let new_obj = { ...Data };
            console.log(new_obj);
            new_obj.username = "Developer_User";
            new_obj.role = "Developer";
            new_obj.photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgLo9vC_jTky9f4O_iksW-Uq2Yz5OP9aaog&s"
            setData(new_obj);
        } else {
            let new_obj = { ...Data };
            console.log(new_obj);
            new_obj.username = "Test_User";
            new_obj.role = "Tester";
            new_obj.photo = "https://static.vecteezy.com/system/resources/thumbnails/069/822/727/small/cute-tabby-cat-relaxing-on-red-sofa-with-bokeh-lights-photo.jpg"
            setData(new_obj);
        }
    }
    return (
        <>
            <div className='mx-auto mt-10 bg-[#555] rounded-xl w-full max-w-sm h-auto px-4 py-2 text-center text-2xl font-bold' >
                <img src={Data.photo} alt="" className='w-36 h-36 rounded-full object-cover my-4 mx-auto' />
                <h1 className='bg-[#222] w-full rounded-xl px-4 py-2 active:bg-orange-400 select-none mb-2'>{Data.username}</h1>
                <h3 className='bg-[#222] w-full rounded-xl px-4 py-2 active:bg-orange-400 select-none mb-2'>{Data.role}</h3>
                <button className='w-full bg-orange-500 px-4 py-2 my-2 rounded-xl font-bold hover:text-orange-100 hover:scale-105 select-none transition ' onClick={Change}>Switch User</button>
            </div>
        </>
    )
}

export default ChangeUser