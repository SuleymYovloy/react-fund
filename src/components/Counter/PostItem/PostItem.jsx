import "./index.scss";

const PostItem = (props) => {
    console.log(props);
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>1. JavaScript</strong>
                    <div>JavaScript - Programming language</div>
                </div>
                <div className="post__btns">
                    <button>Delete Post</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
