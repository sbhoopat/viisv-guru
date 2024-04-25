/* istanbul ignore file */

import React, { createContext, useState, useCallback } from 'react';
export const APIErrorContext = createContext({
    error: null,
    showAlert: () => {},
    removeError: () => {}
});
export default function APIErrorProvider({ children }) {
    const [error, setError] = useState(null);
    const removeError = () => setError(null);
    const showAlert = (message, status) => setError({ message, status });
    const contextValue = {
        error,
        showAlert: useCallback((message, status) => showAlert(message, status), []),
        removeError: useCallback(() => removeError(), [])
    };
    return <APIErrorContext.Provider value={contextValue}>{children}</APIErrorContext.Provider>;
}
