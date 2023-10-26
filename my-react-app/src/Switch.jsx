import React from "react";

//const rrtrsty = () => {
  //return (
    //<React.Fragment>
      //<h1>first example</h1>
      //<p>my first paragraph</p>
      //</React.Fragment>
  //);
//};

//export default Main;


const Main = ({title, handleButtonClick}) => {
  const [name, setName] = React.useState("");
  const handleSumbmit = (event) => {
      event.preventDefault()
      console.log(event)
      setName("")

  }
  return (
      <React.Fragment>
          <h1>{title}</h1>
          <p>{name}</p>
          <form>
              <label htmlFor="name">Name</label>
              <input id="name" value={name} onChange={(event) => {
                  setName(event.target.value)
              }}></input>
              <label htmlFor="email">Email Address</label>
              <input id="email"></input>
              <button type="submit" onClick={(event) => {
                  handleSumbmit(event)
              }}>Submit</button>
          </form>
          <p>My First Paragraph</p>
          <button onClick={() =>
            handleButtonClick(name)
          }>Click Me</button>
      </React.Fragment>
  )
}

export default Main
