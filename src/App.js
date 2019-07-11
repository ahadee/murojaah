import React from 'react';
import './App.css';
import { Menu, Icon, Container, Sidebar, Segment } from "semantic-ui-react";
import MainApp from './mainApp';

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
      <div>
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
        <Menu.Item>Juz 30 Utuh</Menu.Item>
        <Menu.Item>Juz 30 Utuh</Menu.Item>
        <Menu.Item>Juz 30 Utuh</Menu.Item>
        <Menu.Item>Juz 30 Utuh</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={sideVisibility} >
        <Menu attached='top'>
          <Container>
            <Menu.Item as='a' onClick={this.handleSidebarShow}>
              <Icon name="sidebar" /> Menu
            </Menu.Item>
          </Container>
        </Menu>
        <MainApp></MainApp>
        </Sidebar.Pusher>
      </Sidebar.Pushable>    
      
      </div>
    );
  }
}

export default App;