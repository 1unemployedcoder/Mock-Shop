import axios from "axios";

export class PostService {
    static async getPosts(limit, page){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getImg(limit, page){
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos/', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }
}