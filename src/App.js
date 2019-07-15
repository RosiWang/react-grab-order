import React from 'react';
import logo from './logo.svg';
import './App.css';
import displayImg from './img/test.JPG'
import { Button, Input } from 'antd'

class App extends React.Component {

  state = {
    username: ''
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
    const { username } = this.state;

    // fetch('http://localhost:7002/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=UTF-8'
    //   },
    //   data:{username}

    // }).then(response => response.json()).then(res => {
    //   console.log("post:", res)
    // })

    let postData = {username};
    console.log('login:',JSON.stringify(postData));
    fetch('http://localhost:7002/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(postData)
    }).then(function (res) {
      console.log(res.code);
    });


  }

  inputChange = (value) => {
    this.setState({ username: value });
  }



  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <img src={displayImg} style={{ height: 400 }} />
        <div>  TEstTest </div>
        <div>
          <Button onClick={this.postTestHandler}>  测试 </Button>
        </div>
        <div style={{ marginTop: 16 }}>
          <Input value={username} onChange={e => this.inputChange(e.target.value)} />
          <Button onClick={this.loginClick} >登录post</Button>
        </div>

      </div>
    );
  }
}

export default App;
