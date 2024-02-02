import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import PostList from "./pages/PostList";
import NewPost from "./pages/NewPost";
import ModifyPost from "./pages/ModifyPost";
import { NotFound } from "./pages/NotFound";
import PostProvider from "./PostProvider";
import { CanvasLoadImage } from "./pages/CanvasLoadImage";
import { ImageZoom } from "./pages/ImageZoom";
import { ImageZoomAdvanced } from "./pages/ImageZoomAdvanced";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">hw3: PostList</Link>
          </li>
          <li>
            <Link to="/canvas">hw4: Canvas load/rotate/blur Image</Link>
          </li>
          <li>
            <Link to="/imagezoom">hw5: Image zoom in/out</Link>
          </li>
          <li>
            <Link to="/imagezoomadvanced">hw5: Image zoom in/out (advanced)</Link>
          </li>
        </ul>
      </nav>
      <PostProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canvas" element={<CanvasLoadImage />} />
          <Route path="/imagezoom" element={<ImageZoom />} />
          <Route path="/imagezoomadvanced" element={<ImageZoomAdvanced />} />
          <Route path="/posts">
            <Route index element={<PostList />} />
            <Route path={`/posts/modify/:id`} element={<ModifyPost />} />
            <Route path="new" element={<NewPost />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PostProvider>
    </>
  );
}

export default App;
