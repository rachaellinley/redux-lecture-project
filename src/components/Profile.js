import React, {Component} from 'react';
import {connect } from 'react-redux';
import { updateCharacters } from "../redux/reducer"

class Profile extends Component {
    componentDidMount(){
        this.props.updateCharacters();
    }

    render() {
        return(
            <div>
                <input placeholder="Favorite Show" />
                <input placeholder="Favorite Movie" />
                <input placeholder="Favorite Color" />
                <input placeholder="Favorite Food" />
                <input placeholder="Favorite Band" />
                <br/>
                <h1>{this.props.username}</h1>
                {this.props.loading === true ? <h1>Loading...</h1> : null}
               
                {this.props.characters.map(char => {
                    return (

                        <div>
                    <h1>{char.name}</h1>
                    <img src={char.img}/>
                    <h2>{char.nickname}</h2>
                    </div>
                    )
                })}
            </div>
        );
    }
}

//mapStateToProps >> going through something and doing something to each item
//go through each element in state, decide if we're going to put them in the component or
// leave them in the store

function mapStateToProps(reduxState){
    return {
        username: reduxState.username,
        characters: reduxState.characters,
        loading: reduxState.loading
    }

}

export default connect(mapStateToProps, {updateCharacters})(Profile);
//invoking connect and passing profile