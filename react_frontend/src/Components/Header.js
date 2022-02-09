import React, { Component } from 'react';

class Header extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        <h4>{this.props.id}</h4>
        <input type="text" name="id" value="아이디를 입력하세요."></input>
        <h4>{this.props.password}</h4>
        <input type="text" name="password" value="비밀번호를 입력하세요."></input>
        <button></button>
      </article>
    );
  }
}

export default Header;
