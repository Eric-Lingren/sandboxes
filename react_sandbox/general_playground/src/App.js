import React, { Component } from 'react';
import axios from 'axios';


const baseURL = 'https://shakespeare.podium.com/api/reviews';
const token = 'H3TM28wjL8R4#HTnqk?c'

const authAxios = axios.create({
  baseURL: baseURL,
  headers: {'x-api-key': token}
});


class App extends Component {
  constructor(){
    super()
    this.state = {
        allShakespearReviews: [],
        shuffledReviews: []
    }
}

  getData = () => {
    authAxios
    .get(`${baseURL}/`)
    .then(res => {
      console.log(res.data);
      this.setState({allShakespearReviews: res.data})
    }, () => this.shuffleReviews())
    .catch(err => {throw err} );
  }
  
  shuffleReviews = () => {
    this.setState({
      shuffledReviews: shuffle(this.state.allShakespearReviews)
    })
  }
    

  getOne = (id) => {
    authAxios
    .get(`${baseURL}/${id}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {throw err} );
  }
  




  
  render(){
    return (
      <div className="App">
        App
        { this.getData() }
      </div>
    );
  }
  
}

export default App;






// constructor(){
//   super()
//   this.state = {
//    reviews: [],
//    isLoading: false,
//    single: [],
//    allShakespearReviews: [],
//    shuffledReviews: []
//   }

// // getALL
// getData = () => {
//   authAxios
//   .get(`${baseURL}/`)
//   .then(res => {
//     // console.log(res.data);
//     this.setState({
//       reviews: res.data,
//       isLoading: false,
//       allShakespearReviews: res.data
//     }, () => this.shuffleReviews())
//   })
//   .catch(err => {throw err})
// };

// // getONE
// getOne =() => {
//   //  To get the id of the firt item of the random array.
//   let id = this.state.shuffleReviews[0].id

//   authAxios
//   .get(`${baseURL}/:${id}`)
//   .then(res =>{
//     console.log(res.data)
//     this.setState({ 
//       // single: res.data,
//       allShakespearReviews: res.data,
//     })
//   }, () =>this.shuffleReviews())
//   .catch(err => {throw err});
// }

// shuffleReviews =() =>{
//   console.log(this.state.allShakespearReviews)
//   this.setState({
//     shuffledReviews: shuffle(this.state.allShakespearReviews)
//   })
// }
