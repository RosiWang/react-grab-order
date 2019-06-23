import React from 'react';
import logo from './logo.svg';
import './App.css';
import displayImg from './img/test.JPG'
import {Button} from 'antd'

class App extends React.Component{

  state = {

  }

  componentDidMount(){
    console.log('start...');
    fetch('http://localhost:7002/httpinit',{
      method:'GET',
      headers:{
        'Content-Type':'application/xhtml+xml;charset=UTF-8'
      },
      mode:'cors',
      cache:'default'
    }).then(res=>{
      console.log('get html res',res);
    })

    fetch('http://ng56.nisco.cn/transrev/list?moduleListNavId=Transrev&_=1561286375733',{
      method:'GET',
      headers:{
        'Content-Type':'text/html'
      },
    }).then(res=>{
      console.log('get html res2222:',res);
    })


  }

  postTestHandler = ()=>{

    fetch('http://localhost:7002/post',{
      method:'POST',
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      }

    }).then(response => response.json()).then(res => {
      console.log("post:",res)
  })
  }
  

  render (){
    return (
      <div className="App">
        <img src={ displayImg } style={{height:400}}/>
        <div>  TEstTest </div>

        <Button onClick={this.postTestHandler}>  测试 </Button>
      </div>
    );
  }
}

export default App;
