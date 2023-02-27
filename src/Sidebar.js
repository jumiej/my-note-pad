function Sidebar({ 
    notes, 
    onAddNote, 
    onDeleteNote, 
    activeNote, 
    setActiveNote,
    title,
    showInput,
 }) {
    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified);


    return(
       <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Jumie's Note</h1>
            <button onClick={onAddNote}>Add</button>
        </div>

        <div className="app-sidebar-notes">
            {sortedNotes.map((note) => (
                <div className={`app-sidebar-note active ${note.id === activeNote && ' active'}`} 
                onClick={() => setActiveNote(note.id)}>

                <div className="sidebar-note-title">
                    <stonge>{title}</stonge>
                    <button onClick={ () => onDeleteNote(note.id)}>DELETE</button>
                    
                </div>

                <p>{note.body && note.body.substr(0.100) + "..." }</p>

                <small className="note-meta">
                    Last modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
                        hour : "2-digit",
                        minute: "2-digit",
                    } )}</small>
            </div>

            ))}
            
        </div>
       </div>
    )

}
export default Sidebar;