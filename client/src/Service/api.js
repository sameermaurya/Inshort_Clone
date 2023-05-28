import axios from'axios';

 const getNews = async () =>{
    const URL='http://localhost:8000/news';
    try{
        console.log('Successfully fetched news from server');
        return await axios.get(`${URL}`);
    } catch(error){
        console.log('Error while calling get news api', error);
    }
}
export default getNews;