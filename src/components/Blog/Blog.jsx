import React from "react";
import { Grid } from "semantic-ui-react";
import BlogCard from "./BlogCard/BlogCard";
import "./Blog.css";
const Blog = ({ articles, onCardClick }) => {
  return (
    <div className="blog-container">
      <Grid container columns={3}>
        {articles.map((article) => (
          <Grid.Column key={article.id}>
            <BlogCard
              id={article.id}
              title={article.title}
              summary={article.summary}
              onCardClick={onCardClick}
            />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;
