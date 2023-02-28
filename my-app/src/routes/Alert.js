import React, { useEffect } from 'react';
import io from 'socket.io-client';
import Swal from 'sweetalert2';
const socket = io('ws://localhost:3501');

function Alert() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });
    socket.on('data', (data) => {
        console.log(`Message received: ${data}`);
      });
   
    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket');
    });
  }, []);

  return (
    0
  );
}

export default Alert;