import React from "react";
import { Card } from "semantic-ui-react";
import "./BlogCard.module.css";

const BlogCard = ({ id, title, summary, onCardClick }) => {
  return (
    <Card onClick={() => onCardClick(id)}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{summary}</Card.Description>
      </Card.Content>
    </Card>
  );
};
export default BlogCard;
