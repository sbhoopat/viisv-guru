/* istanbul ignore file */
import axios from 'axios';
// import { Config } from '../common/Config';
import { encryptText, decryptText } from '../common/Encrypt-Decrypt';

const AxiosApis = async (url, method, data, keysContext) => {
    // let appUrl = Config().EXS_APP_URL;
    let appUrl='';
    let uri = appUrl + '/exs/';
    const SECRET_KEY = keysContext.secret_key;
    const DECODE_IV = keysContext.decode_iv;
    uri += encryptText(url, SECRET_KEY, DECODE_IV);

    if (data) {
        let str = JSON.stringify(data);
        data = { request_body: encryptText(str, SECRET_KEY, DECODE_IV) };
    }
    let config = {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json; charset=utf-8',
        'Content-Security-Policy': 'script-src-attr; self',
        'Authorization': 'Bearer '+sessionStorage.getItem('token')
    };
    method = method || 'GET';
    if (method === 'GET') {
        try {
            let encryptedResponse = await axios.get(uri, { headers: config });
            encryptedResponse.data = decryptText(encryptedResponse.data, SECRET_KEY, DECODE_IV);
            return encryptedResponse;
        } catch (error) {
            return error;
        }
    } else if (method === 'DELETE') {
        try {
            const encryptedResponse = await axios.delete(uri, data, { headers: config });
            encryptedResponse.data = decryptText(encryptedResponse.data, SECRET_KEY, DECODE_IV);
            return encryptedResponse;
        } catch (error_1) {
            return error_1;
        }
    } else if (method === 'POST') {
        try {
            const encryptedResponse = await axios.post(uri, data, { headers: config });
            encryptedResponse.data = decryptText(encryptedResponse.data, SECRET_KEY, DECODE_IV);
            return encryptedResponse;
        } catch (error_1) {
            return error_1;
        }
    } else if (method === 'PUT') {
        try {
            const encryptedResponse = await axios.put(uri, data, { headers: config });
            encryptedResponse.data = decryptText(encryptedResponse.data, SECRET_KEY, DECODE_IV);
            return encryptedResponse;
        } catch (error_1) {
            return error_1;
        }
    }
};
export default AxiosApis;
