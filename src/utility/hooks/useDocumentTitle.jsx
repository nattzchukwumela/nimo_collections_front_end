import { useEffect } from 'react';

// Custom hook to manage document title, to be used in pages
export function useDocumentTitle(title) {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = title;

        // Cleanup: restore previous title, when component unmounts
        return () => {
            document.title = prevTitle;
        };
    }, [title]);
}

