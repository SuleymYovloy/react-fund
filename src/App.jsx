import { useRef, useState } from "react";
import "./styles/App.scss";
import PostList from "./components/PostList/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", body: "Description" },
        { id: 2, title: "JavaScript 2", body: "Description 2" },
        { id: 3, title: "JavaScript 3", body: "Description 3" },
    ]);

    const [title, setTitle] = useState({ name: "22", age: "Tom" });
    console.log(title);

    const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault();
    };

    return (
        <div className="App">
            <form>
                <MyInput
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Название поста"
                />

                <MyInput type="text" placeholder="Описание поста" />
                <MyButton
                    onClick={(e) => {
                        addNewPost(e); // Передаём `event`, чтобы `preventDefault()` работал
                        setTitle((prev) => ({ ...prev, age: "Garry" }));
                    }}
                >
                    Создать пост
                </MyButton>
            </form>
            <PostList posts={posts} title="Список постов 1" />
        </div>
    );
}

export default App;
