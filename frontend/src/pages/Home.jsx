import { useParams, Link } from "react-router-dom"
import PostPreview from "../components/PostPreview"
function Home() {
    const { type } = useParams();   //for post preferences
    const posts = [];
    //select posts from backend based on user preferences for local(default) and global
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

export default Home