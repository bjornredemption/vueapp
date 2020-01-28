const axios = require('axios');

exports.getData = async ({ path }) => {


        const resp = await axios.get(path);
        if (resp.status === 200){
            return resp.data;
        } 
    };
