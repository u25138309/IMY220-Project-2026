import { useParams } from "react-router-dom";
import ProfilePreview from "../components/ProfilePreview"
import PostComments from "../components/PostComments";
function PostPage() {
    const { id } = useParams();
    const post = { id: id, title: "Beautiful Sunset", image: "/assets/sunset.jpg", note: "Watched an amazing sunset today!", likesNum: 24, author: { id: "1", name: "John Doe", profilePicture: "/assets/1.png" }, comments: [] }; //based on post id, get post info from backend

    return (
        <div className="post-page">
            <div className="post-segment">
                <ProfilePreview user={post.author} />   { /* depends on db structure */}
                <h1>{post.title}</h1>
                <img src={post.image} alt="Post" />
                <p>{post.note || "No note provided."}</p>
            </div>
            <div className="post-segment">
                {post.author.id === Number(localStorage.getItem("userId")) ? (
                    <>
                        <button onClick={() => {/* Handle edit post */ }}>Edit Post</button>
                        <button onClick={() => {/* Handle delete post */ }}>Delete Post</button>
                    </>
                ) : (
                    <button onClick={() => {/* Handle report post */}}>Report Post</button>
                )}
                <button onClick={() => {/* Handle comment */ }}>Comment</button>
                <div className="form-popup" hidden>
                    <form id="commentForm">
                        <label htmlFor="comment">Comment:</label>
                        <input id="comment" name="comment" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <PostComments post={post} />
            </div>
        </div>
    )
}

export default PostPage