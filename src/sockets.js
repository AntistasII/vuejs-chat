import auth from 'user/auth'
import socketio from "socket.io-client";
import notification from "./notifiation";

let socket = null

function Socket() {}

Socket.prototype.getInst = () => {
  return new Promise((resolve, reject) => {
    if (null === socket) {
      let token = auth.getToken()
      if (null !== token) {
        socket = socketio('http://localhost:3000/?token=' + token)
        socket.on('connect_error', (err) => {
          socket = null
          console.log('socket: connect_error', err)
          notification.send('socket connection error', 'danger')
          reject(err)
        })
        socket.on('error', (err) => {
          socket = null
          console.log('socket: error', err)
          notification.send('socket error', 'danger')
          reject(err)
        })
        socket.on('connect', () => {
          console.log('socket: successfully connected')
          resolve(socket)
        })
      }
    } else {
      resolve(socket)
    }
  })
}

let socketInst = new Socket()

export default socketInst