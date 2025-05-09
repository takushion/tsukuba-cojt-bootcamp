import { useState } from 'react';
import './index.css';

<<<<<<< HEAD
import Message from "./components/Message";
import CountNextMessage from "./components/CountNextMessage";

=======
>>>>>>> template/main
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React カウンター</h1>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
<<<<<<< HEAD
        増やす
      </button>
      {
        count === 5 && <p>5回クリックしたよ！</p>
      }
      <Message hoge="hoge" text="これは子コンポーネントです！" />
      <CountNextMessage count={count} />
      <button onClick={() => setCount(count - 1)}>
        減らす
      </button>
      <button onClick={() => setCount(0)}>
        リセット
      </button>

=======
        カウントアップ
      </button>
>>>>>>> template/main
    </div>
  );
}

<<<<<<< HEAD
export default App; 
=======
export default App;
>>>>>>> template/main
