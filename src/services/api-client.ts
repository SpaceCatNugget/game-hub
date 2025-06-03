import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6c1b05fb496341119029a2b6061a9436'
    }
})