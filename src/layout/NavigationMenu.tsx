import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const NavigationMenu: React.FC = () => (
  <Menu
        theme="dark"
        mode="horizontal"
    >
      <Menu.Item key="home">
          <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="about">
          <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="workouts">
          <Link to="/workouts">Work Outs</Link>
      </Menu.Item>
      <Menu.Item key="meals">
          <Link to="/meals">Meals</Link>
      </Menu.Item>
      <Menu.Item key="timer">
          <Link to="/timer">Timer</Link>
      </Menu.Item>
  </Menu>
);

export default NavigationMenu;