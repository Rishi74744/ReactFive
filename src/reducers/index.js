import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Marcena', duration: '2:45' },
        { title: 'All Stars', duration: '3:40' },
        { title: 'I Want It That Way', duration: '6:20' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});