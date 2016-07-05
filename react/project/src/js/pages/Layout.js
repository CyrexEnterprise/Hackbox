import React from "react";
import { Link } from "react-router";

import Header from "../components/layout/Header";

export default class Layout extends React.Component {
  
  render() {
    const { location } = this.props;

    return (
      <div>        
        <section id="main-content">
          <div class="loading-ui"></div>
          <div class="tl-split-view">
            <div class="tl-split-content">
              <div class="tl-header-container">
                <div class="tl-header">
                  <div class="tl-header-logo">
                    <a href="#" id="home">
                      <img src="images/tl_logo.png"/>
                    </a>
                  </div>
                  <div class="tl-header-right">
                    <div class="header-title"></div>
                    <div class="muted smaller header-subtitle"></div>
                  </div>
                </div>
                <div class="tl-header-menu">
                  <ul class="menu-items">zi menu</ul> 
                </div>
              </div>
              <div class="tl-split-body-wrapper no-footer">
                {this.props.children}
              </div>
            </div>
            <div class="tl-split-bg"></div>
          </div>
        </section>
      </div>
    );
  }
}