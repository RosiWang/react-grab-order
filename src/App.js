import React from 'react';
import logo from './logo.svg';
import './App.css';
import displayImg from './img/test.JPG'

class App extends React.Component{

  state = {

  }

  componentDidMount(){
    console.log('start...');
    fetch('http://localhost:7002/getdata',{
      method:'GET',
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      },
      mode:'cors',
      cache:'default'
    }).then(res=>{
      console.log('fetch res',res);
    })

  }
  

  render (){
    return (
      <div className="App">
        <img src={ displayImg } style={{height:400}}/>
        <div>  TEstTest </div>
      </div>
    );
  }
}

export default App;
