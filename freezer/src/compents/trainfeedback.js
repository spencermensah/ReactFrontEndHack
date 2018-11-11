import React, { Component } from "react";
import './bootstrap-grid.css'
import firebase from 'firebase'

class trainfeedback extends Component {
  constructor(props) {
  super();
  this.state = {
    id: [],
    messages: []
  };
}

  componentDidMount() {
    const query = firebase.firestore().collection('post');

    query.get().then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        const db = firebase.firestore().collection("post").doc(documentSnapshot.id).get();
          db.then((doc) => {
            this.setState({
              messages:[...this.state.messages, doc.get("case")],
              id:[...this.state.id, documentSnapshot.id]
            });
        }
      );
    });
  });
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
         <h1>Issues</h1>
       </div>

     </div>
     <table class="table table-striped table-bordered">
       {this.state.id.map((ref, i) =>
         <div>
           <tr>
             <th align="center">{this.state.id[i]}</th>
           </tr>
           <tr>
             <td align="center">{this.state.messages[i]}</td>
           </tr>
         </div>
      )}
      </table>
      </div>
    );
    }
  }

export default trainfeedback;
