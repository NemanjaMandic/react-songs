import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends Component{


  gimmeSongs(){
    return this.props.songs.map( (song, index) => {

    return(
      <div className="item" key={index}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => this.props.selectSong(song) }>Select</button>
        </div>

        <div className="content">
          <p>{ song.title }</p>
        </div>
      </div>
    );

    })
  }
  render(){
    //console.log(this.props.songs.map(iks => iks.title));

    return(
      <div className="ui divided list">

          { this.gimmeSongs() }

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
}
const mapStateToProps = (state) => {
  console.log(state)
  return { songs: state.songs };

}

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
