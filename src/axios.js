import axios from "axios";

export const inctance = axios.create(
    {
        baseURL: "https://crudcrud.com/api/c05c4f86f4d64df0b3aaa960a1bc06d3",
    }
);