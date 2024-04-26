import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Поиск юзеров</h1>
        <br></br>
        <svg>
         <symbol id="icon-search"  viewBox="0 0 17 18"  xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9276 12.7748L15.37 17.0644" stroke="white" strokeLinecap="round"/>
          <circle cx="8.48533" cy="8.48526" r="5.5" transform="rotate(-38.7469 8.48533 8.48526)" stroke="white"/>
         </symbol>
         </svg>
        <input
         type="search"
         placeholder="Поиск"
         name="search"></input>

        <p>Здесь будет актуальный список пользователей</p>
      </header>
    </div>
  );
}

export default App;
