import PostItem from "../PostItem/PostItem";

const PostList = ({ posts, title }) => {
    return (
        <div>
            <h1 className="app__title">{title}</h1>
            {posts.map((post) => (
                <PostItem post={post} key={post.id} />
            ))}
        </div>
    );
};

export default PostList;
