import { useEffect } from "react";
import { PostItem } from "./components/postItem";
import { useState } from "react";

export function Post(props) {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex gap-14">
        <div className="w-1/2">
          {post.map((p) => (
            <PostItem title={p.title} text={p.body} key={p.id} />
          ))}
        </div>
        <div className="p-4 flex gap-1 h-min">
          <input
            type="text"
            className="border border-slate-400  w-3/4 placeholder:p-1 focus:outline-none p-1"
            placeholder="write..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            className="bg-sky-400 p-1 w-16 text-white rounded-sm hover:bg-white hover:text-sky-400 hover:border-sky-400 border transition-all"
            onClick={async () => {
              const res = await fetch("http://localhost:3000/posts", {
                method: "POST",
                body: JSON.stringify({
                  title: "foo",
                  body: inputValue,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              });
              const data = await res.json();
              const newData = [...post, data];
              setPost(newData)
              // console.log(newPost);
              // console.log(data);
            }}
          >
            valide
          </button>
        </div>
      </div>
    </>
  );
}
