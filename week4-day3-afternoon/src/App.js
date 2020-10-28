import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav-bar nav-bar-expand-lg nav-bar-dark fixed-top" id="mainNav">
        <div className="container">
            <a class="nav-bar-brand js-scroll-trigger" href="#page-top">
                <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt=""/>
            </a>
            <button class="nav-bar-toggle nav-bar-toggle-right" type="button">Menu</button>
            <div className="collapse nav-bar-collapse" id ="nav-bar-responsive">
                <ul class="nav-bar-nav">
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#team">TEAM</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="subheader1">Welcome To Our Studio!</div>
          <div className="subheader2">IT'S NICE TO MEET YOU</div>
            <a class="btn" href="#services">TELL ME MORE</a>
        </div>
      </div>
    </div>
  );
}

export default App;
