import { useEffect, useState } from "react"
import { inctance } from "../../axios"
import "./style.scss"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Create from "../create";

export default function Productlar() {
    let [news, setNews] = useState([]);
    // const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        inctance.get("/yangiliklar").then((r) => setNews(r.data));
    }, []);
    const delProd = (id) => {
        // const confirmed = window.confirm("Delete?");
        // if (confirmed) {
        //     setIsDeleted(true);
        // }
        inctance.delete(`/yangiliklar/${id}`)
            .then((r) => toast.success("Successfully Deleted"))
            .catch((er) => toast.error("Something went wrong"));
    }
    return (
        <div className="bg-mainBg">
            <Create />
            <div className="users">
                <div className="cards">
                    <span>
                        <p className="photoP pp1 pp">Photo</p>
                        {news.map((yangilik) => (
                            <div key={yangilik._id} className="photo">
                                <img src={yangilik.src} alt="" />
                            </div>
                        ))}
                    </span>
                    <span className="spans">
                        <p className="pp">First name</p>
                        {news.map((yangilik) => (
                            <h1 key={yangilik._id} className="hh dark:text-white duration-200">{yangilik.nomi}</h1>
                        ))}
                    </span>
                    <span className="spans">
                        <p className="pp">Last name</p>
                        {news.map((yangilik) => (
                            <h1 key={yangilik._id} className="hh dark:text-white duration-200">{yangilik.last}</h1>
                        ))}
                    </span>
                    <span className="spans">
                        <div className="ps">
                            <p>Phone</p>
                            <p>Actions</p>
                        </div>
                        {news.map((yangilik) => (
                            <div className="endCard" key={yangilik._id}>
                                <h1 className="dark:text-white duration-200">{yangilik.malumot}</h1>
                                <div>
                                    <Link to={`/update/${yangilik._id}`}><h4 className="linkP dark:text-white duration-200">EDIT</h4></Link>
                                    <button className="dark:text-white duration-200" onClick={() => delProd(yangilik._id)}>DEL</button>
                                </div>
                            </div>
                        ))}
                    </span>
                </div>
                <div className="cards2">
                    {news.map((yangilik) => (
                        <div key={yangilik._id} className="card">
                            <img src={yangilik.src} alt="" />
                            <span>
                                <h1>{yangilik.nomi}</h1>
                                <h1>{yangilik.last}</h1>
                            </span>
                            <p>{yangilik.malumot}</p>
                            <div>
                                <Link className="linkP" to={`/update/${yangilik._id}`}>EDIT</Link>
                                <button onClick={() => delProd(yangilik._id)}>DEL</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* {!isDeleted && (
                
            )} */}
        </div >
    )
}