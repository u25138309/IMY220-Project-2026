import ProfilePreview from "./ProfilePreview";
function PostComments({ post }) {
    const comments = post.comments || []; //probably will need to fetch comments from backend, but for now just using post.comments. Will also need to handle
    //popup depending on if post preview or post page
    return (
        <div className="post-comments">
            {comments.map(comment => (
                <div key={comment.id} className="comment">
                    <ProfilePreview user={comment.author} />
                    <p>{comment.text}</p>
                </div>
            ))}
            {comments.length === 0 && <p>No Comments</p>}
        </div>
    )
}

export default PostComments