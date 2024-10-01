import React, { useEffect, useState } from 'react'

const Websocket: React.FC = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null)
    const [connectionStatus, setConnectionStatus] = useState<string>('Not Connected')
    const websocketUrl = '192.168.5.45:8080' // Your server IP and port
    const wsPrefix = 'ws://'

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
        }

        newSocket.onclose = () => {
            setConnectionStatus('Disconnected')
            console.log('WebSocket connection closed')
        }

        setSocket(newSocket) // Set the new WebSocket instance to state
    }

    useEffect(() => {
        // Only connect via WebSocket if the page is served over HTTP
        if(!socket){
            if (window.location.protocol === 'http:') {
                console.log('Page loaded over HTTP, attempting WebSocket connection...')
                createWebSocket(`${wsPrefix}${websocketUrl}`)
            } else {
                console.log('Page loaded over HTTPS, WebSocket connection not allowed.')
            }
        }

        // Cleanup on component unmount
        return () => {
            socket?.close() // Close the WebSocket connection if it exists
        }
    }, [socket]) // Add socket as a dependency to ensure cleanup works correctly

    return (
        <div>
            <h1>WebSocket Connection Status: {connectionStatus}</h1>
        </div>
    )
}

export default Websocket
