import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "In a sky", duration: "4:05" },
    { title: "All of me", duration: "2:40" },
    { title: "Hello", duration: "3:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
