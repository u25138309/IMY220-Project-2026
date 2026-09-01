import PostPreview from "../components/PostPreview"
function Home() {
    const posts = [];
    //select posts from backend based on user preferences for local(default) and global
    //lazy load posts from backend, for now just use dummy data
    return (
        <ul className="post-list">
            {posts.map((post) => (
                <li className="post-list-item" key={post.id}>
                    <PostPreview key={post.id} post={post} />
                </li>
            ))}
        </ul>
    )
}

export default Home