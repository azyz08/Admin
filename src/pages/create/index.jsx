import { useState } from "react";
import { inctance } from "../../axios"
import "./style.scss"
import { toast } from "react-toastify";
// import { Input } from "@material-tailwind/react";
import React from 'react';
import { Input } from "antd";
export default function Create() {

    let [src, setSrc] = useState("")
    let [nomi, setNomi] = useState("")
    let [last, setLast] = useState("")
    let [malumot, setMalumot] = useState("")

    const createProd = (e) => {
        e.preventDefault();
        inctance.post("/yangiliklar", {
            nomi: nomi,
            malumot: malumot,
            last: last,
            src: src,
        })
            .then((r) => toast.success("Successfully Created"))
            .catch((er) => toast.error("Something went wrong"))
    };

    return (
        <div>
            <div className="create">
                <div className="top">
                    <h1 className="dark:text-white duration-200">Users</h1>
                    <label className="check check3" htmlFor="c"><i class="fa-solid fa-user-plus"></i> Add User</label>
                </div>
                <input type="checkbox" id="c" />
                <div className="shadow">
                    <form className="bForm" onSubmit={(e) => createProd(e)}>
                        <div className="topData">
                            <p className="text-black">Add user</p>
                            <label className="check4 text-black" htmlFor="c"><i class="fa-solid fa-xmark"></i></label>
                        </div>
                        <Input value={src} onChange={(e) => setSrc(e.target.value)} addonBefore={<i class="fa-regular fa-image"></i>} required placeholder="Img src" />
                        <Input value={nomi} onChange={(e) => setNomi(e.target.value)} addonBefore={<i class="fa-regular fa-user"></i>} required placeholder="First name" />
                        <Input value={last} onChange={(e) => setLast(e.target.value)} addonBefore={<i class="fa-regular fa-user"></i>} required placeholder="Last name" />
                        <Input type="number" value={malumot} onChange={(e) => setMalumot(e.target.value)} addonBefore={<i class="fa-solid fa-phone"></i>} required placeholder="Phone" />
                        <button>ADD</button>
                    </form>
                </div>
            </div>
        </div>
    )
}