import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      textControl: "normal"
    };
  }

  render() {
    const { activeNote, title, setTitle, description, setDescription } = this.props;
    const { selectedImage, textControl } = this.state;

    if (!activeNote) return <div className="no-active-note"> No note selected </div>;

    return (
      <div className="app-main">
        <div className="app-main-note-edit">
          <input
            className={textControl === "italic" ? "italic" : "bold"}
            typeof="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />

          <textarea
            className={
              textControl === "italic" ? "italic" : textControl === "bold" ? "bold" : ""
            }
            id="body"
            placeholder="Write your note here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="buttonWrap">
            <button id="btn" onClick={() => this.setState({ textControl: "italic" })}>
              italic
            </button>
            <button id="btn" onClick={() => this.setState({ textControl: "bold" })}>
              bold
            </button>
          </div>
        </div>

        <div className="app-main-note-preview">
          <h1 className="preview-title">UploadPicture</h1>

          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              this.setState({ selectedImage: event.target.files[0] });
            }}
          />
          {selectedImage && (
            <div>
              <img
                className="pic"
                alt="not found"
                // width={"250px"}
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <button onClick={() => this.setState({ selectedImage: null })}>Remove</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Main;
