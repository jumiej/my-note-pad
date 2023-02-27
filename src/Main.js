import { useState } from "react";

function Main (props) {
    const{activeNote, onUpdateNote, title, setTitle, description, setDescription, input }= props
    const [selectedImage, setSelectedImage] = useState(null);
    const [textContorl, setTextControl] = useState("normal")

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,

            [key]: value,

            lastModified: Date.now(),
        });
    };

    if(!activeNote) 
    return <div className="no-active-note"> No note selected </div>;


    return (
        <div className="app-main">
            {/* {input && */}
            <div className="app-main-note-edit">
                <input className={textContorl === "italic" ? "italic" : "bold"}
                typeof="text" 
                id="title"
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                autoFocus 
                />

                <textarea 
                className={textContorl === "italic" ? "italic" : "" || textContorl === "bold" ? "bold" : "" }
                // className="italic"
                id="body" 
                placeholder="Write your note here..."
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                />

                
                <button  onClick={() => setTextControl("italic")} >
                    italic
                </button>

                <button onClick={() => setTextControl("bold")}>
                    bold
                </button>
            

            </div>
            {/* } */}

            <div className="app-main-note-preview">
                <h1 className="preview-title">UploadPicture</h1>

                
<input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
{selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

                
                

            </div>
            

        </div>
    )
    
}
export default Main;