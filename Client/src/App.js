import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
class App extends Component {
    state= {
        hello : null
    };
     componentDidMount() {
         // axiosInstance.get('/posts').then(res => {
         //     //this.setState({hello: res.data});
         //     console.log(res.data, "??????????");
         // })
         //     .catch(err => console.log(err));

         this.asyncFunction();
     }
     asyncFunction = async () => {
         await fetch('https://jsonplaceholder.typicode.com/posts')
             .then(res => res.json())
             .then(json => console.log(json, "+++++++++++++++"))
     }
    render() {
        return (
            <div>
                {/*{this.state.hello ? <div>{this.state.hello}</div> : null}*/}
            </div>
        )
    }
}

export default App;
