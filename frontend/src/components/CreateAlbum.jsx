import PostPreview from "./PostPreview"
function CreateAlbum({ user }) {

    //popup, i want to have a selection of all of their posts and a title.
    const posts = [];   //determine from db

    return (
        <div className="form-popup">
            <form id="createAlbum">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
                <h2>Select Posts</h2>
                <div className="post-list" id="post-list">
                    {posts.map((post) => (
                        <label className="post-list-item" key={post.id}>
                            <input type="checkbox" value={post.id} />
                            <PostPreview post={post} />
                        </label>
                    ))}
                    { posts.length === 0 && <p>No posts available</p> }
                </div>
                <button type="submit">Create Album</button>
            </form>
        </div >
    )
}

export default CreateAlbum