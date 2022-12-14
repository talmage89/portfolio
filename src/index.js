// Packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Components
import App from './App';
import Home from './components/home/Home';
import Contact from './components/misc/Contact';
import Projects from './components/projects/Projects';
import Blog from './components/blog/Blog';
import Posts from './components/blog/Posts';
import Post from './components/blog/Post';

// Styles
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blog' element={<Blog />}>
            <Route index element={<Posts />}></Route>
            <Route exact path='/blog/:postId/:postName' element={<Post />}></Route>
          </Route>
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);