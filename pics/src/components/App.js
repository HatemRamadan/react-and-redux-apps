import React from "react";
import unSplash from "../api/Unsplash";
import SearchBar from "./SearchBar";
import ImagesList from "./ImagesList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await unSplash.get("/search/photos?query=" + term);
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <ImagesList images={this.state.images}></ImagesList>
      </div>
    );
  }
}

export default App;
