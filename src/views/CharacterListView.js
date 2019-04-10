import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    console.log(this.props);
    this.props.getCharacters();
    console.log(this.props);
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <div>Loading...</div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching
});

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getCharacters
  }
)(CharacterListView);
