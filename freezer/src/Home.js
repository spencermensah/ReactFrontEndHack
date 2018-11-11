import React, { Component } from 'react';
import './bootstrap-grid.css';
import './Home.css';
import axios from 'axios';
import firebase from './firebase'



class Home extends Component {
  constructor(props) {
  super(props);

  this.state = {
    imgurl1: "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_.jpg",
    imgurl2: "https://cdn.shopify.com/s/files/1/2096/4023/products/infinity-war-cover-6.jpg?v=1521728092",
    imgurl3: "http://nitecrwrmoviereviews.files.wordpress.com/2011/03/accidental-husband.jpg",
    alx: null,
    aly: null,
    alz: null,
    gx: null,
    gy: null,
    gz: null,
    user: null,
    res: null
  };
}



handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

onSubmit = (e) => {
    e.preventDefault();
    firebase.firestore().collection('post').add({
      case: this.state.case
    }).then(ref => {
      console.log('Added document with ID: ', ref.id);
    }).then(reload =>{
      window.location.reload();
    });

 }

componentDidMount() {
  let  self = this;

  axios.get(`http://8435475d.ngrok.io/api/v1/motion_data/retrieve?x=0.234&y=0.234&z=0.234`)
    .then(responce => {
      self.setState({
        res: responce
      });
    })


  if ('DeviceMotionEvent' in window) {
    var onDeviceMotion = function (eventData) {
    accelerationHandler(eventData.acceleration);
    rotationHandler(eventData.rotationRate);
    }
    window.addEventListener('devicemotion', onDeviceMotion, false);
  }

  function rotationHandler(rotation) {
    self.setState({
      gx: rotation.alpha.toFixed(9),
      gy: rotation.beta.toFixed(9),
      gz: rotation.gamma.toFixed(9)
    });
  }

  function accelerationHandler(acceleration) {

    self.setState({
      alx: acceleration.x.toFixed(9),
      aly: acceleration.y.toFixed(9),
      alz: acceleration.z.toFixed(9)
    });
  }




}

render() {

    return (
      <div class="container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <div class="row">
          <div class="col-sm-4" align="center">
            <h1> Home </h1></div>
        </div>


        <div class="row">
          <div class="col-sm-4" align="center">
            <h2> Status: {this.state.res}</h2></div>
        </div>

        <div class="row">
          <div class="col-sm-4" align="center">
            <table class="table table-striped table-bordered">
              <tr>
                <th>TimeIn</th>
                <th>TimeOut</th>

              </tr>
              <tr>
                <td>12:00</td>
                <td>13:00</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4" align="center">
            <p> Price Paid: <strong>£8.00</strong> </p></div>
        </div>

        <br></br>

        <div class="row">
          <div class="col-sm-4">
            <div class="parallax" style={{backgroundImage: `url(${this.state.imgurl1})`}}></div>
          </div>
        </div>


        <br></br>

        <div class="row">
          <div class="col-sm-4 vcenter ">
            <div class="parallax" style={{backgroundImage: `url(${this.state.imgurl2})`}}></div>
          </div>
        </div>


        <div class="row">
          <div class="col-sm-4" align="center">
            <h2>Was that right</h2>
            <p> Location: <strong>Oxford</strong> </p>
            <button class="leftbtm">Yes</button>
            <button class="rightbtm">No</button>
          </div>
        </div>

        <br></br>

        <div class="row">
          <div class="col-sm-4 vcenter ">
            <div class="parallax" style={{backgroundImage: `url(${this.state.imgurl3})`}}></div>
          </div>
        </div>

          <br></br>

          <div class="row">
            <div class="col-sm-4" align="center">
              <h1>Any on board issues?</h1>
              <form>
                <textarea class="big" name="case" cols="40" rows="5"
                  onChange={e => this.handleChange(e)}></textarea>
              </form>
              <button onClick={(e) => this.onSubmit(e)}>Submit</button>
            </div>
          </div>

          <br></br>

        <div class="row">
          <div class="col-sm-4" align="center">
            <p>Acceleration</p>
            <table class="table table-striped table-bordered">
              <tr>
                <th align="center">x</th>
                <th align="center">y</th>
                <th align="center">z</th>
              </tr>
              <tr>
                <td align="center">{this.state.alx}</td>
                <td align="center">{this.state.aly}</td>
                <td align="center">{this.state.alz}</td>
              </tr>
            </table>
          </div>
        </div>


      </div>
    );
  }
}

export default Home;
