import React from 'react';
import logo from './logo.svg';
import './App.css';
import displayImg from './img/test.JPG'
import { Button } from 'antd'

class App extends React.Component {

  state = {

  }

  componentDidMount() {
    console.log('start...');
    fetch('http://localhost:7002/httpinit', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/xhtml+xml;charset=UTF-8'
      },
      mode: 'cors',
      cache: 'default'
    }).then(res => {
      console.log('get httpinit', res);
    })

    fetch('http://entapay.杨欢.cn/transrev/list?moduleListNavId=Transrev&_=1561286375733', {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html'
      },
    }).then(res => {
      console.log('直接获取', res);
    })


  }

  postTestHandler = () => {

    fetch('http://localhost:7002/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }

    }).then(response => response.json()).then(res => {
      console.log("post:", res)
    })
  }

  loginClick = () => {

    fetch('http://localhost:7002/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }

    }).then(response => response.json()).then(res => {
      console.log("post:", res)
    })

  }



  render() {
    return (
      <div className="App">
        <img src={displayImg} style={{ height: 400 }} />
        <div>  TEstTest </div>
        <div>
          <Button onClick={this.postTestHandler}>  测试 </Button>
        </div>
        <div>
          <Button onClick={this.loginClick} >登录post</Button>
        </div>

      </div>
    );
  }
}

export default App;
