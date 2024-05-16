import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import FullArticle from "../components/FullArticle/FullArticle";
import { loadArticles, loadArticleContent } from "../utils/articleLoader";

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const articles = loadArticles();
    setArticles(articles);
  }, []);

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Blog articles={articles} onCardClick={handleCardClick} />}
      />
      <Route path=":id" element={<FullArticle articles={articles} />} />
    </Routes>
  );
};
export default BlogPage;
