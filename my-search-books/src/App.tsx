import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thay
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <Menu attached='top'>
          <Dropdown item icon='wrench' simple>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Icon name='dropdown' />
                <span className='text'>New</span>

                <Dropdown.Menu>
                  <Dropdown.Item>Document</Dropdown.Item>
                  <Dropdown.Item>Image</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>Open</Dropdown.Item>
              <Dropdown.Item>Save...</Dropdown.Item>
              <Dropdown.Item>Edit Permissions</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Export</Dropdown.Header>
              <Dropdown.Item>Share</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Menu position='right'>
            <div className='ui right aligned category search item'>
              <div className='ui transparent icon input'>
                <input
                  className='prompt'
                  type='text'
                  placeholder='Search animals...'
                />
                <i className='search link icon' />
              </div>
              <div className='results' />
            </div>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </div>

    </div>
  );
}

export default App;
