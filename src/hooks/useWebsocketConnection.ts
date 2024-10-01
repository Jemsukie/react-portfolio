import { useEffect, useState } from 'react'

const useWebsocketConnection = (link: string): {connection: WebSocket | null, error: Event | null } => {
    const [connection, setConnection] = useState<WebSocket | null>(null)
    const [error, setError] = useState<Event | null>(null)

    useEffect(() => {
        if(location.protocol === 'http:'){
            const ws = new WebSocket(link)

            ws.onopen = () => {
                setConnection(ws)
            }
            ws.onclose = () => {
                setConnection(null)
            }
            ws.onerror = (event) => {
                setConnection(null)
                setError(event)
            }
        }
    }, [])



    return { connection, error }
}

export default useWebsocketConnection
