import axios from 'axios'




export const loginUser = async(user)=>{
    let data = await axios({method: 'POST', url: `${process.env.REACT_APP_BACKEND_URL}/auth/login`, data: {...user}})
    return data.data
}
