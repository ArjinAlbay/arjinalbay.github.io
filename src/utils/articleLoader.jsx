import { marked } from "marked";

export const loadArticles = () => {
  // Normally, you might fetch these dynamically or load them from a config file
  return [
    // {
    //   id: 1,
    //   title: "Example Article 1",
    //   summary:
    //     "This is the summary of example article 1. It covers the main points and provides an overview of the content.",
    //   filePath: "../../public/articles/article1.md",
    // },
    {
      id: 2,
      title: "Understanding Golang Interfaces",
      summary:
        "Golang interfaces define behavior without specific implementations, enabling polymorphism and modular, testable code through implicit satisfaction, dependency injection, and mocking.",
      filePath: "../../public/articles/article2.md",
    },
  ];
};
export const loadArticleContent = async (filePath) => {
  const response = await fetch(filePath);
  const text = await response.text();
  const contentHtml = marked(text);

  // Extract tags from the last heading
  const tagsMatch = contentHtml.match(/<h2>Tags<\/h2>\s*<p>(.*?)<\/p>/);
  const tags = tagsMatch
    ? tagsMatch[1].split(",").map((tag) => tag.trim())
    : [];

  // Remove tags section from content
  const contentWithoutTags = contentHtml.replace(
    /<h2>Tags<\/h2>\s*<p>.*?<\/p>/,
    ""
  );

  return { content: contentWithoutTags, tags };
};
