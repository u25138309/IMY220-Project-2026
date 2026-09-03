import { Link } from "react-router-dom";

function PostPreview({ post }) {
    return (
        <Link to={`/post/${post.id}`}>
            <div className="postPreview">
                <div className="postPreview-segment">
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} />
                    <p>{post.note}</p>
                </div>
                <div className="postPreview-segment">
                    <div className="postPreview-Likes"> 👍 {post.likesNum}</div>
                </div>
            </div>
        </Link>
    )
}

export default PostPreview