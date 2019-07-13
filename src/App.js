import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Redirect  } from "react-router-dom";
import { Menu, Icon, Container, Sidebar } from "semantic-ui-react";
import MainApp from './mainApp';
import juz29utuh from "./juz29utuh";

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
      <Router>
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
        <NavLink to='/30utuh' className="item">Juz 30 Utuh</NavLink>
        <NavLink to='/29utuh' className="item">Juz 29 Utuh</NavLink>
        <Menu.Item >Juz 30 Surat</Menu.Item> 
        <Menu.Item >Juz 29 Surat</Menu.Item> 
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
        
        
        <Route path='/29utuh' component={MainApp} />
        <Route path='/30utuh' component={MainApp} />
        <Route exact path='/' render= {() =>
          <Redirect to='/30utuh' />
        } />
        
        </Sidebar.Pusher>
      </Sidebar.Pushable>    
      
      </Router>
    );
  }
}

export default App;