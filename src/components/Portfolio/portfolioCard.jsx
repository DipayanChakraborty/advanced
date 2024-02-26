const PortfolioCard = (props) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={props.props.image} alt="Cover" />
        <h3>{props.props.title}</h3>
        <div className="portfolio__item-cta">
          <a href={props.props.github} className="btn" target="_blank">
            Github
          </a>
          {props.props.hosted_site && (
            <a
              href={props.props.hosted_site}
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
