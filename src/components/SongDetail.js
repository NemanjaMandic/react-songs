import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongDetail = ({ song }) => {
  if(!song){
    return <p>Nema pesme</p>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: { song.title }</p>
      <p>Duration: { song.duration }</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);
