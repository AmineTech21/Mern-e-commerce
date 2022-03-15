import axios from "axios";

const BASE_URL = "https://amine-mern-stack-e-commerce.herokuapp.com/api/"
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjFmYTlhZGEzMTZiZTRhZDU0NTc3NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzEzNzQ2MywiZXhwIjoxNjQ3Mzk2NjYzfQ.7R3EvH8COwlgK3wqc4r4Q09YGc-hgWPX9WBan627Xo0"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:  `Bearer ${TOKEN}`}
})