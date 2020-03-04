import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: props.age
        }
    }

    birthday = () => {
        this.setState({
            age: this.state.age + 1
        })
    }


    render(){
        const {lastName, firstName, age, hairColor} = this.props;
        // const Button = (prop)
        return(
            <div>
                <h1>{lastName},{firstName} </h1>
                <h2>Age: {this.state.age}</h2>
                <h2>Hair Color: {hairColor}</h2>
                <button onClick={this.birthday}> {firstName} {lastName} just had a birthday</button>
                
      
            </div>
        )
    }
}

export default PersonCard