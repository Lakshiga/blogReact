import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogNav from './components/BlogNav';
import Posts from './components/Posts';
import Post1 from './components/Post1';
import Post2 from './components/Post2';
import Post3 from './components/Post3';
import Post4 from './components/Post4';

function App() {
  return (
    <Router>
      <div>
        <BlogNav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post1" element={<Post1 />} />
          <Route path="/post2" element={<Post2 />} />
          <Route path="/post3" element={<Post3 />} />
          <Route path="/post4" element={<Post4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
