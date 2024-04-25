const socket = io("http://localhost:7000")

socket.on('connect', () => {
  console.log(socket);
});

socket.on("response", data => {
  console.log(data)
})


socket.on('NEW_DATA', (data) => {
  console.log('data socket')
  console.log(data)
});