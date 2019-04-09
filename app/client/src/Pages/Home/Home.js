import React, { Component } from 'react';
import HomepageButtons from '../../components/HomePageButtons/HomePageButtons';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import AboutMeInfo from '../../components/TellMeAboutYou/TellMeAboutYou';
import LoginForm from '../../components/LoginForm/LoginForm';
import Styles from './Home.module.css';
import { Route, Link, Switch } from 'react-router-dom';
export default class Home extends Component {
  state = {
    renderedComponent: '',
    pages: {
      showLogin: false,
      showSignup: false,
      showHomepage: true,
      showAboutMeInfo: false
    }
  };

  changeVisibility = event => {
    event.preventDefault();
    console.log(event.target.value);

    let updatedPages = this.state.pages;

    for (const [nameOfPage, value] of Object.entries(updatedPages)) {
      if (value) {
        updatedPages = {
          ...updatedPages,
          [nameOfPage]: false,
          [event.target.value]: true
        };
      }
    }
    this.setState({
      pages: updatedPages
    });
  };

  onSignUpFormSubmit = event => {
    event.preventDefault();
  };

  determineRenderedComponent = () => {
    let renderedComponent;
    if (this.state.pages.showHomepage) {
      renderedComponent = (
        <HomepageButtons changeVisibility={this.changeVisibility} />
      );
    }

    if (this.state.pages.showSignup) {
      renderedComponent = (
        <SignUpForm changeVisibility={this.changeVisibility} />
      );
    }

    if (this.state.pages.showAboutMeInfo) {
      renderedComponent = (
        <AboutMeInfo changeVisibility={this.changeVisibility} />
      );
    }

    if (this.state.pages.showLogin) {
      renderedComponent = (
        <LoginForm changeVisibility={this.changeVisibility} />
      );
    }

    return renderedComponent;
  };

  render() {
    let renderedComponent = this.determineRenderedComponent();

    return (
      <div className={Styles.Home}>
        <header className={Styles.Title}>Roomie </header>
        {renderedComponent}
      </div>
    );
  }
}
