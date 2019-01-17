import React, { Component } from 'react';
import './App.css';


const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
      </a>
    </li>
  );
}


class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  changeDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"
          onClick={(e) => { this.changeDropdown(e) }}>
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    )
  }
}


class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">OneRoad</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <NavItem path="/" name="Home" />
            <NavItem path="/page2" name="Page2" />
            <NavItem path="/page3" name="Disabled" disabled="true" /> */}


            <NavDropdown name="Toolbox">
              <a className="dropdown-item" href="/">Client Matrices</a>
              <a className="dropdown-item" href="/">Comments</a>
              <a className="dropdown-item" href="/">Phone Numbers</a>
              <a className="dropdown-item" href="/">Send LocateMe Link</a>
            </NavDropdown>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

class ScriptBar extends Component {
  render() {
    const scripts = {
      stateFarm: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat erat vel interdum tempor. Maecenas ornare" +
        "mollis diam quis dignissim. Pellentesque nulla dolor, dignissim eleifend maximus nec, rutrum eu eros. Praesent in erat orci." +
        "Sed ultrices mattis turpis, et porttitor magna efficitur et. Etiam mollis efficitur felis, ornare semper sem bibendum ac. " +
        "Cras sagittis sem purus, id volutpat erat vehicula in. Etiam odio risus, pharetra id est sed, fermentum dignissim tellus. " +
        "Pellentesque non molestie orci, interdum porttitor lorem. Pellentesque id velit consectetur, vehicula nisi ac, hendrerit nisi. " +
        "Cras eu imperdiet leo. Curabitur rhoncus enim et enim ullamcorper elementum. Pellentesque habitant morbi tristique senectus et " +
        "netus et malesuada fames ac turpis egestas. Nulla id mollis diam. Mauris tincidunt malesuada sodales."
    }
    const cardBodyStyle = {
      padding: '0px 5px',
    };
    return (
      <div className="card">
        <div className="header-custom card-header" style={cardBodyStyle}>
          Scripts
        </div>
        <div className="card-body card-custom" style={cardBodyStyle}>
          {scripts[this.props.name]}
        </div>
      </div>
    );
  }
}

const Card = props => {
  var style = { "background-color": props.color, "margin": "5px", "font-size": "15px", "text-align":"center" };
  if (props.name === "CVD") {
    style["border"] = "solid green";
  }
  return (
    <div className="col-sm" style={style}>
      {props.name}
    </div>
  );
}

class WorkflowBar extends Component {
  render() {
    const steps = [{ id: 1, name: 'Start Call' }, { id: 2, name: 'CVD' }, { id: 3, name: 'Disablement Location' }, { id: 4, name: 'Coverage&Dispatch' }, { id: 5, name: 'Service Provider' }, { id: 6, name: 'Case Wrapup' }];
    const stepItems = steps.map((step) =>
      <Card key={step.id} name={step.name} color="#8fdbe7" />
    );
    return (
      <div className="card">
        <div className="row" style={{ "padding-left": "15px", "padding-right": "15px" }}>
          {stepItems}
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <NavBar />
        <ScriptBar name="stateFarm" />
        <WorkflowBar />
      </div>
    );
  }
}

export default App;
