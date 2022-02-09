import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Contents from './Components/Contents';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        header:{title:'ReactBBS', id: '아이디', password: '패스워드'},
        contents:{title:'게시판', desc: '로그인을 해주세요'},
        footer:{title:'-', desc: 'Copyright by ingb, snowflo'}
      }
    }
    
  render() {
    return (
      <div>
        <Header
        title={this.state.header.title}
        id={this.state.header.id}
        password={this.state.header.password}>   
        </Header>

        <Contents
        title={this.state.contents.title}
        desc={this.state.contents.desc}>
        </Contents>

        <Footer   
        title={this.state.footer.title}
        desc={this.state.footer.desc}>
        </Footer>

      </div>
    );
  }
}

export default App;