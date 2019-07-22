import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Redirect, Switch  } from "react-router-dom";
import { Menu, Icon, Container, Sidebar } from "semantic-ui-react";
import MainApp from './mainApp';
import SuratApp from "./suratApp";

class App extends React.Component {
  state ={
    sideVisibility: false
  }
  handleSidebarShow = () => {
    console.log("clicked");
    
    this.setState({ sideVisibility: true })
  }

  handleSidebarHide = () => this.setState({ sideVisibility: false })
  render() { 
    const sideVisibility = this.state.sideVisibility; 
    return (
      <Router
        basename="/murojaah/"
      >
      <Sidebar.Pushable>
              
        <Sidebar 
          as={Menu} 
          animation='overlay' 
          inverted 
          vertical 
          visible={sideVisibility}           
          onHide={() => this.handleSidebarHide()}               
          width='wide'
        >
        <Menu.Item onClick={this.handleSidebarHide}>
          <Icon name="sidebar" /> Menu
        </Menu.Item>        
        <NavLink to='/30utuh' className="item" onClick={this.handleSidebarHide}>Juz 30 Utuh</NavLink>
        <NavLink to='/29utuh' className="item" onClick={this.handleSidebarHide}>Juz 29 Utuh</NavLink>
        <NavLink to='/30surat' className="item" onClick={this.handleSidebarHide}>Juz 30 Surat</NavLink>
        <NavLink to='/29surat' className="item" onClick={this.handleSidebarHide}>Juz 29 Surat</NavLink>        
        <Menu.Item >Sambung Surat</Menu.Item> 
        
        
        </Sidebar>
        <Sidebar.Pusher dimmed={sideVisibility} >
        <Menu attached='top'>
          <Container>
            <Menu.Item as='a' onClick={this.handleSidebarShow}>
              <Icon name="sidebar" /> Menu
            </Menu.Item>
          </Container>
        </Menu>
        
        <Switch>
          <Route path='/29utuh' component={MainApp} />
          <Route path='/30utuh' component={MainApp} />
          <Route path='/29surat' component={SuratApp} />
          <Route path='/30surat' component={SuratApp} />
          <Route exact path='/' render= {() =>
            <Redirect to='/30utuh' />
          } />
          <Route render={({ location }) => (
            <Redirect to='/30utuh' />
          )} />
        </Switch>
        
        </Sidebar.Pusher>
      </Sidebar.Pushable>    
      
      </Router>
    );
  }
}

export default App;