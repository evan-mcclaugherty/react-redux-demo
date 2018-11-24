import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>
    }

    return (
        <div>
            <div>{song.song.title}</div>
            <div>{song.song.duration}</div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state.selectedSong);
    return {
        song: state.selectedSong
    };
};

export default connect(mapStateToProps)(SongDetail);