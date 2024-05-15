import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import BlogCard from "./BlogCard/BlogCard";
import "./Blog.module.css";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  // Mock data for demonstration purposes
  useEffect(() => {
    const mockArticles = [
      {
        id: 1,
        title: "Article 1",
        summary:
          "This is the summary of article 1. It covers the main points and provides an overview of the content.",
      },
      {
        id: 2,
        title: "Article 2",
        summary:
          "This is the summary of article 2. It covers the main points and provides an overview of the content.",
      },
      {
        id: 3,
        title: "Article 3",
        summary:
          "This is the summary of article 3. It covers the main points and provides an overview of the content.",
      },
      {
        id: 4,
        title: "Article 4",
        summary:
          "This is the summary of article 4. It covers the main points and provides an overview of the content.",
      },
      {
        id: 5,
        title: "Article 5",
        summary:
          "This is the summary of article 5. It covers the main points and provides an overview of the content.",
      },
      {
        id: 6,
        title: "Article 6",
        summary:
          "This is the summary of article 6. It covers the main points and provides an overview of the content.",
      },
    ];
    setArticles(mockArticles);
  }, []);

  return (
    <div className="blog-container">
      <Grid container columns={3}>
        {articles.map((article) => (
          <Grid.Column key={article.id}>
            <BlogCard title={article.title} summary={article.summary} />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;
