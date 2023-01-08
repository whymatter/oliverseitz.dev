const ArticleTile = ({ headline, abstract, link }) => {
  return (
    <div class="article-container">
      <div class="article-container-background"></div>
      <h3 class="article-heading">{headline}</h3>

      <p class="article-summary">{abstract}</p>

      <div class="article-footer">
        <a class="article-link" href={link}>
          more
        </a>
      </div>
    </div>
  );
};

export default ArticleTile;
