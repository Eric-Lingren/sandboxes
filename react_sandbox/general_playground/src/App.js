import React, { Component } from 'react';
import axios from 'axios';
import './App.css'


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
      <div className="Blog-post-wrapper">
        {/* App
        { this.getData() } */}

        <h1 className='blog-post-header'>Survey fatigue is real, insight from Twitter can help</h1>
        <p clasName='author'>by <a className='author-link'>Joey</a> </p>

        <p className='blog-paragraph'>  "Survey finds 95% of people don't like taking surveys," could be the headline of your favourite satirical website, which wouldn't be far from the truth. Overwhelmed by the increasing number of requests for feedback, consumers are avoiding surveys all together which is impacting response rates. The telephone survey, for example, has seen a steep decline in response rates since the mid-90s, dropping from 36% in 1997 to just 6% in 2018, according to Pew Research1. Of course, many variables are at play when it comes to response rates across different types of surveys, but the reality is that survey fatigue is real and it impacts both the volume and quality of feedback received. The insight they provide is also limited to the questions asked. So, is there another way?     </p>
        <p className='blog-paragraph'>  "Survey finds 95% of people don't like taking surveys," could be the headline of your favourite satirical website, which wouldn't be far from the truth. Overwhelmed by the increasing number of requests for feedback, consumers are avoiding surveys all together which is impacting response rates. The telephone survey, for example, has seen a steep decline in response rates since the mid-90s, dropping from 36% in 1997 to just 6% in 2018, according to Pew Research1. Of course, many variables are at play when it comes to response rates across different types of surveys, but the reality is that survey fatigue is real and it impacts both the volume and quality of feedback received. The insight they provide is also limited to the questions asked. So, is there another way?     </p>
        <p className='blog-paragraph'>  "Survey finds 95% of people don't like taking surveys," could be the headline of your favourite satirical website, which wouldn't be far from the truth. Overwhelmed by the increasing number of requests for feedback, consumers are avoiding surveys all together which is impacting response rates. The telephone survey, for example, has seen a steep decline in response rates since the mid-90s, dropping from 36% in 1997 to just 6% in 2018, according to Pew Research1. Of course, many variables are at play when it comes to response rates across different types of surveys, but the reality is that survey fatigue is real and it impacts both the volume and quality of feedback received. The insight they provide is also limited to the questions asked. So, is there another way?     </p>
        <p className='blog-paragraph'>  "Survey finds 95% of people don't like taking surveys," could be the headline of your favourite satirical website, which wouldn't be far from the truth. Overwhelmed by the increasing number of requests for feedback, consumers are avoiding surveys all together which is impacting response rates. The telephone survey, for example, has seen a steep decline in response rates since the mid-90s, dropping from 36% in 1997 to just 6% in 2018, according to Pew Research1. Of course, many variables are at play when it comes to response rates across different types of surveys, but the reality is that survey fatigue is real and it impacts both the volume and quality of feedback received. The insight they provide is also limited to the questions asked. So, is there another way?     </p>
        
      </div>
    );
  }
  
}

export default BlogPost;






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
