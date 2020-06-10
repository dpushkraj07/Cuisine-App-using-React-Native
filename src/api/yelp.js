import axios from 'axios';

export default axios.create({

    baseURL :'https://api.yelp.com/v3/businesses',

    headers:{
        Authorization:
        'Bearer oxSnCm4AHFE3BUR3nsQ4Uqo4zuQTHsgJpzt84SAkAeJ3aoxqs9RL1iL-j2yCMRrriMyZ89AK6cFXtl5ClJJd9VY8x-LrQtoo_CKtz9sNcJTxHfDBILPzeiyDkgXeXnYx'
    }

});