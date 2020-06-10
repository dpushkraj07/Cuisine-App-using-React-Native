import {useEffect , useState} from 'react';
import yelp from '../api/yelp';

export default()=>{
    const [results,setResults] = useState([]);
    const [errorMessage,seterrorMessage] = useState('');

    const searchApi = async(searchTerm)=>{

        try{        
            const response = await yelp.get('/search',{
            params: {
                limit:50,
                term:searchTerm,
                location:'san jose'
            }
        });
        setResults(response.data.businesses);
        }
        catch(err){
            seterrorMessage('Something went Wrong');
        }
    };

    useEffect(()=>{

        searchApi('Spanish');

    },[]);

    return [searchApi,results,errorMessage];
}