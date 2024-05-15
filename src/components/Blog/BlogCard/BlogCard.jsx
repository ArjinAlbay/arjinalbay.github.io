import React from "react";
import { Card } from "semantic-ui-react";
import "./BlogCard.module.css";

const BlogCard = ({ title, summary }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{summary}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default BlogCard;
