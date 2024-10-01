import React, {   useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Websocket: React.FC = () => {
    const [searchParams] = useSearchParams()
    const wsLink = searchParams.get('wsLink')

    const [connectionStatus, setConnectionStatus] = useState<string>('Disconnected')

    const ws = new WebSocket(wsLink || 'wss://192.168.5.52:8080')

    ws.onopen = () => {
      console.log('Connected to WebSocket server')
      setConnectionStatus('Connected')
    }

    ws.onmessage = event => {
      const li = document.createElement('li')
      li.textContent = event.data
    }

    return (
        <div>
            <h1>WebSocket Connection Status: {connectionStatus}</h1>
        </div>
    )
}

export default Websocket
