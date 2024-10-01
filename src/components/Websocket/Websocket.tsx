import React, { useEffect,  useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Websocket: React.FC = () => {
    const [searchParams] = useSearchParams()
    const wsLink = searchParams.get('wsLink')

    const [socket, setSocket] = useState<WebSocket | null>(null)
    const [connectionStatus, setConnectionStatus] = useState<string>('Disconnected')
    const websocketUrl = wsLink || '192.168.5.45:8080'  // Your server IP and port
    const wsPrefix = 'ws://'
    const wssPrefix = 'wss://'

    // Function to create WebSocket connection
    const createWebSocket = (url: string): void => {
        const newSocket = new WebSocket(url)

        newSocket.onopen = () => {
            setConnectionStatus('Connected')
            console.log('WebSocket connection established:', url)
        }

        newSocket.onmessage = (event: MessageEvent) => {
            console.log('Message from server:', event.data)
        }

        newSocket.onerror = (error: Event) => {
            console.error('WebSocket error:', error)
            // Handle connection error and switch to secure connection if needed
            if (url.startsWith(wsPrefix)) {
                console.log('Attempting to connect with secure WebSocket (wss)')
                createWebSocket(url.replace(wsPrefix, wssPrefix)) // Switch to wss
            }
        }

        newSocket.onclose = () => {
            setConnectionStatus('Disconnected')
            console.log('WebSocket connection closed')
        }

        setSocket(newSocket) // Set the new WebSocket instance to state
    }

    useEffect(() => {
        // Start by trying to connect using ws
        createWebSocket(`${wsPrefix}${websocketUrl}`)

        // Cleanup on component unmount
        return () => {
            socket?.close() // Close the WebSocket connection if it exists
        }
    }, [])

    return (
        <div>
            <h1>WebSocket Connection Status: {connectionStatus}</h1>
        </div>
    )
}

export default Websocket
