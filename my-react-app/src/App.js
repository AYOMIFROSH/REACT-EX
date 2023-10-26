import Main from './Switch';
import './App.css';
import logo from './logo.svg';

function App() {
  let title1 = "First example"
  let title2 = "React shit"

  const alertName = (name) => {
    alert(`hello ${name}`)

  } 

  const acceptInput = (name) => {
    let address = prompt("Enter your address!")
    console.log(address, name)

  }
  return (
    <div className="App">
      <Main  handleButtonClick={alertName}/>
      <Main title={title2} handleButtonClick={acceptInput}/>
      <Main  title ={"Example"}handleButtonClick={alertName}/>
    </div>
  );
}

export default App;
