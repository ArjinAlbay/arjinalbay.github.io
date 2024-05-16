import React from "react";
import { useParams } from "react-router-dom";
import "./FullArticle.css";
import { loadArticleContent } from "../../utils/articleLoader";

const FullArticle = ({ articles }) => {
  const { id } = useParams();
  const [articleContent, setArticleContent] = useState("");
  const [tags, setTags] = useState([]);
  const article = articles.find((article) => article.id === parseInt(id));

  useEffect(() => {
    if (article) {
      loadArticleContent(article.filePath).then(({ content, tags }) => {
        setArticleContent(content);
        setTags(tags);
      });
    }
  }, [article]);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-container">
      <h1>{article.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: articleContent }}
      />
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FullArticle;
