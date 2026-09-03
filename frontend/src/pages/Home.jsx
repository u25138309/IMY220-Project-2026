import { useParams } from "react-router-dom"
import PostPreview from "../components/PostPreview"
import SearchBar from "../components/SearchBar"
function Home() {
    const { type } = useParams();   //for post preferences
    const posts = [[{ id: "101", title: "Beautiful Sunset", image: "/assets/sunset.jpg", note: "Watched an amazing sunset today!", likesNum: 24, author: { id: "1", name: "John Doe", profilePicture: "/assets/1.png" }, comments: [{ id: "c1", author: { id: "2", name: "Sarah Smith", profilePicture: "/assets/2.png" }, text: "Amazing photo!" }, { id: "c2", author: { id: "3", name: "Michael Jones", profilePicture: "/assets/3.png" }, text: "That sunset looks incredible." }] }, { id: "102", title: "Weekend Hike", image: "/assets/hike.jpg", note: "Had a great time hiking with friends.", likesNum: 17, author: { id: "1", name: "John Doe", profilePicture: "/assets/1.png" }, comments: [{ id: "c3", author: { id: "4", name: "Emily Brown", profilePicture: "/assets/4.png" }, text: "Looks like a fun hike!" }] }, { id: "103", title: "City Lights", image: "/assets/city.jpg", note: "The city looks completely different at night.", likesNum: 31, author: { id: "3", name: "Michael Jones", profilePicture: "/assets/3.png" }, comments: [{ id: "c4", author: { id: "5", name: "Daniel Williams", profilePicture: "/assets/5.png" }, text: "Great shot!" }, { id: "c5", author: { id: "1", name: "John Doe", profilePicture: "/assets/1.png" }, text: "The lighting is really nice." }] }, { id: "104", title: "Coffee Break", image: "/assets/coffee.jpg", note: "Nothing beats a good coffee while working.", likesNum: 12, author: { id: "4", name: "Emily Brown", profilePicture: "/assets/4.png" }, comments: [] }]];
    //select posts from backend based on user preferences for local(default) and global
    //lazy load posts from backend, for now just use dummy data
    return (
        <div>
            <SearchBar />
            <ul className="post-list">
                {posts.map((post) => (
                    <li className="post-list-item" key={post.id}>
                        <PostPreview post={post} />
                    </li>     
                ))}
                {posts.length === 0 && <p>No posts available</p>}
            </ul>
        </div>
    )
}

export default Home