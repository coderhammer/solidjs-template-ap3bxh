import './App.css';
import { io } from 'socket.io-client';

const socket = io('ws://localhost:3000');

socket.on('connect', () => {
  console.log('connected!');
});

// send a message to the server
socket.emit('hello from client', 5, '6', { 7: Uint8Array.from([8]) });

// receive a message from the server
socket.on('hello from server', (...args) => {
  // ...
  console.log(...args);
});

function App() {
  return (
    <div class="App">
      <textarea
        name="code"
        id=""
        cols="30"
        rows="10"
        placeholder="Code goes here"
      ></textarea>
      <button>Play</button>
      <button>Next</button>
      <button>Stop</button>
      <h1>Variables</h1>
      <ul>
        <li>Variable 1</li>
      </ul>
      <label htmlFor="">
        <input type="text" placeholder="debug" />
      </label>
      <h1>Console</h1>
      <div>Console content</div>
    </div>
  );
}

export default App;
