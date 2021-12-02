import React, { useState } from 'react';
import "./App.css"
import profileImage from './profileImage.png'
  
class App extends React.Component {
  state = {
    Person: {
      fullName: "Adam Azouz",
      bio: "This is my bio",
      imgSrc: {profileImage},
      profession: "FullStack Developper"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  

  render() {
    return (
      <>
        {this.state.show && (
          <>
          <img style={{width:"100px"}}
            //src={this.state.Person.imgSrc} 
            src= "https://image.noelshack.com/fichiers/2021/48/4/1638451035-profile-icon-png-916.png"
            alt="Photo de profil">

            </img>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio} ......</h1>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}
  
export default App;