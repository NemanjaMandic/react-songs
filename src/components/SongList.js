import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component{

  gimmeSongs(){
    return this.props.songs.map( (li, index) => {

    return(
      <div className="item" key={index}>
        <div className="right floated content">
          <button className="ui button primary">Select</button>
        </div>

        <div className="content">
          <p>{ li.title }</p>
        </div>
      </div>
    );

    })
  }
  render(){
    console.log(this.props.songs.map(iks => iks.title));


    return(
      <div className="ui divided list">

          { this.gimmeSongs() }

      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return { songs: state.songs };

}

export default connect(mapStateToProps)(SongList);
