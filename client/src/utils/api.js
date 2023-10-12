import axios from "axios";
// require('dotenv').config()

const apik = '2c32cc22084a5604fe3236bdb78e5b025ba9f901d7d86a9dda6802401f25351cf4631d4273167bc918ab58def2585ff01058af2061b12e4ae5adc5409a5d54d85e244e74f157be40da55d2d1230e87c71ed515a0286bace4fd7f5192ed22a0df32f10c6c2ee194c2dd72e51fda42140dac53342a1f51cf241c6bb3f2b0c562b3';

// const apik = process.env.REACT_APP_STRIPE_APP_KEY;

const params = {
    headers: {
        Authorization: "bearer " + apik,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        // const newUrl =  process.env.REACT_APP_STRIPE_APP_DEV_URL + url ;
        const newUrl = 'http://localhost:1337' + url ;
        // console.log(newUrl);
        const { data } = await axios.get(
            // apik + url,
            newUrl,
            params
        );
        // console.log("data  -> ",data);
        return data;
    } catch (err) {
        // console.log(err);
        return err;
    }
};

export const makePaymentRequest = axios.create({
    baseUrl: 'http://localhost:1337',
    // baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
    headers: {
        Authorization: "bearer " + apik,
    },
});
