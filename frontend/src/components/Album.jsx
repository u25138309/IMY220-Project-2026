import { useParams, Link } from "react-router-dom"
import PostPreview from "../components/PostPreview"
function Album() {
    const { id } = useParams();   //for post preferences
    const posts = [];   //based on album id, get posts from backend
    //like home but only shows pics of album also includes a button to add images to album
    //lazy load posts from backend, for now just use dummy data
    return (
        <ul className="post-list">
            {posts.map((post) => (
                <Link to={`/post/${post.id}`} key={post.id}>
                    <li className="post-list-item">
                        <PostPreview post={post} />
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default Album
