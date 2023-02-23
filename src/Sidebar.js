function Sidebar() {
    return(
       <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Jumie's Note</h1>
            <button>Add</button>
        </div>

        <div className="app-sidebar-notes">
            <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <stonge>TITTLE</stonge>
                    <button>Delete</button>
                    
                </div>

                <p>Note Preview</p>

                <small className="note-meta">Last modified [date]</small>
            </div>
        </div>
       </div>
    )

}
export default Sidebar;