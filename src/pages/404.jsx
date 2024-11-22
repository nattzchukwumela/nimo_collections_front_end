import { useDocumentTitle } from "../utility/hooks/useDocumentTitle"

export function NotFound() {
    useDocumentTitle('404 - Nimo Collections')
    return (<div> <h1>404</h1> </div>)
}