import { useParams } from "react-router-dom"
import PostPreview from "../components/PostPreview"
function Album() {
    const { id } = useParams();
    const album = { posts: [] }; //based on album id, get album info from backend
    //like home but only shows pics of album also includes a button to add images to album
    //lazy load posts from backend, for now just use dummy data
    function handleAddImages() { // Add images to album functionality will be implemented later.
    }

    return (
        <>
            <h1>{album.title}</h1>
            <ul className="post-list">
                <button type="button" onClick={handleAddImages}> Add Images </button>
                {album.posts.map((post) => (
                    <li className="post-list-item" key={post.id}>
                        <PostPreview post={post} />
                    </li>
                ))}
                {album.posts.length === 0 && <p>No posts available</p>}
            </ul>
        </>
    )
}

export default Album
