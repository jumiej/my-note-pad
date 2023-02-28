import { useState } from "react";

function Main (props) {
    const{activeNote, title, setTitle, description, setDescription, }= props
    const [selectedImage, setSelectedImage] = useState(null);
    const [textContorl, setTextControl] = useState("normal")
    console.log('0000',textContorl)

    // const onEditField = (key, value) => {
     //         ...activeNote,

    //         [key]: value,

    //         lastModified: Date.now(),
    //     });
    // };

    if(!activeNote) 
    return <div className="no-active-note"> No note selected </div>;


    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input className={textContorl === "italic" ? "italic" : "bold"}
                typeof="text" 
                id="title"
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                autoFocus 
                />

                <textarea 
                className={textContorl === "italic" ? "italic" : textContorl === "bold" ? "bold" : "" }
                id="body" 
                placeholder="Write your note here..."
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                />

                <div className="buttonWrap">

                    <button id="btn" onClick={ () => setTextControl("italic")  }  >italic </button>
                    <button id="btn" onClick={() => setTextControl("bold")}>
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