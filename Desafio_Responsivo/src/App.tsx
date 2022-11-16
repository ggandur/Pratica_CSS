import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [mobileView, setMobileView] = useState(window.matchMedia("(max-width: 765px)").matches)

  useEffect(() => {
    window.addEventListener("resize", () => setMobileView(window.matchMedia("(max-width: 765px)").matches));
  }, [])

  function changeElementDisplay() {
    const element = document.getElementById("links") as HTMLElement;
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }

  return (
    mobileView ?
      <div className="homePage">
        <div className="column">
          <div className="mobileNavBar">
            <a href="#" className="active">
              <img id="logo" />
            </a>
            <div id="links">
              <a href="#">Home</a>
              <a href="#">Menu</a>
              <a href="#">Produtos</a>
              <a href="#">Lojas</a>
            </div>
            <a href="javascript:void(0);" className="icon" onClick={changeElementDisplay}>
              <img id="menuIcon" />
            </a>
          </div>
          <div className="subTitle">
            <h3>
              A Tecnologia que fará seu código decolar para o próximo nível
            </h3>
          </div>
          <div className="compreAgora">
            <button id='botaoComprar'>
              <h3>Compre Agora</h3>
            </button>
          </div>
          <div className="title">
            <h1>Great Tech<br></br>Great Code</h1>
          </div>
          <img id="img_iphone" />
        </div>
      </div>
      :
      <div className="homePage">
        <div className="column">
          <div className="header">
            <div className="logoDisplay">
              <img id="logo" />
            </div>
            <ul className="NavBar">
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Menu</a></li>
              <li><a href='#'>Produtos</a></li>
              <li><a href='#'>Lojas</a></li>
            </ul>
            <div className="compreAgora">
              <button id='botaoComprar'>
                <h3>Compre Agora</h3>
              </button>
            </div>
          </div>
          <div className="title">
            <h1>Great Tech<br></br>Great Code</h1>
          </div>
          <img id="img_iphone" />
        </div>
      </div>
  )
}

export default App
