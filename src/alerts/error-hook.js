/* istanbul ignore file */
import { useContext } from 'react';
import { APIErrorContext } from './alerts';

const useAPIError = () => {
    const { error, showAlert, removeError } = useContext(APIErrorContext);
    return { error, showAlert, removeError };
};

export default useAPIError;
