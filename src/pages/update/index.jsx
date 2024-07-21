import { useEffect, useState } from "react"
import "./style.scss"
import { Link, useParams } from "react-router-dom"
import { inctance } from "../../axios"
import { toast } from "react-toastify"
import React from 'react';
import { Input } from 'antd';
export default function UpdateProd() {

    let [nomi, setNomi] = useState("")
    let [malumot, setMalumot] = useState("")
    let [last, setLast] = useState("")
    let [src, setSrc] = useState("")
    const { id } = useParams()
    useEffect(() => {
        inctance.get(`/yangiliklar/${id}`).then((res) => {
            setNomi(res.data.nomi)
            setMalumot(res.data.malumot)
            setSrc(res.data.src)
            setLast(res.data.last)
        });
    }, [])
    const UpdateProd = (e) => {
        e.preventDefault();
        inctance.put(`/yangiliklar/${id}`, {
            nomi: nomi,
            malumot: malumot,
            src: src,
            last: last,
        }).then((r) => toast.success("Successfully Updated"))
            .catch((er) => toast.error("Something went wrong"));
    };
    return (
        <div className="editDiv">
            <div className="edit">
                <div className="sp">
                    <h1 className="h11 text-black dark:text-white duration-200">Edit</h1>
                    <p className="kl flex gap-2 text-black dark:text-white duration-200">Users id: <span className="text-blue-700">{id}</span></p>
                </div>
                <form className="bForm2 dark:border-[blue] border-y-2 duration-200" onSubmit={(e) => UpdateProd(e)}>
                    <Input className="" required value={src} onChange={(e) => setSrc(e.target.value)} addonBefore={<i class="fa-regular fa-image text-black duration-300 dark:text-white"></i>} placeholder="Img src" />
                    <Input className="" required value={nomi} onChange={(e) => setNomi(e.target.value)} addonBefore={<i class="fa-regular fa-user text-black duration-300 dark:text-white"></i>} placeholder="First name" />
                    <Input className="" required value={last} onChange={(e) => setLast(e.target.value)} addonBefore={<i class="fa-regular fa-user text-black duration-300 dark:text-white"></i>} placeholder="Last name" />
                    <Input className="" required value={malumot} onChange={(e) => setMalumot(e.target.value)} addonBefore={<i class="fa-solid fa-phone text-black duration-300 dark:text-white"></i>} placeholder="Phone" />
                    <div className="links">
                        <button className="link lin bg-[#63CD6D]">Edit</button>
                        <Link className="bg-[#dc3545] li" to={"/"}><button className="link">Cencel</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}