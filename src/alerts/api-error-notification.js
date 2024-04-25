/* istanbul ignore file */
import { Alert, AlertTitle, IconButton } from '@mui/material';
import useAPIError from './error-hook';
import CloseIcon from '@mui/icons-material/Close';
const APIErrorNotification = () => {
    const { error, removeError } = useAPIError();
    setTimeout(() => {
        removeError();
    }, 5000);
    return (
        <div>
            {error !== null ? (
                <Alert severity={error.status} className="alert-box ml25">
                    <div className="d-flex">
                        <AlertTitle>{error.status}</AlertTitle>
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                removeError();
                            }}
                            className="alert-close">
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    </div>
                    <div className="alert-msg">{error.message}</div>
                </Alert>
            ) : (
                <div></div>
            )}
        </div>
    );
};
export default APIErrorNotification;
