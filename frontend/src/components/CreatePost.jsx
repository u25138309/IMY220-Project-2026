function CreatePost() {

    //popup
    return (
        <div className="form-popup">
            <form id="createPostForm">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" placeholder="Title" required />

                <label htmlFor="image">Image</label>
                <input type="file" id="image" placeholder="Image" accept="image/*" required />

                <label htmlFor="note">Note</label>
                <textarea id="note" placeholder="Note"></textarea>

                <button type="submit">Create Post</button>
            </form>
        </div>
    )
}

export default CreatePost