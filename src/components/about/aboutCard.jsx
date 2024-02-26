const AboutCard = (props) => {
  //   console.log(props);
  return (
    <article className="about__card">
      <div className="about__icon">{props.props.icon}</div>
      <h5>{props.props.title}</h5>

      {props.props.data?.map((ele) => (
        <small>
          <ul>
            <li>
              {ele.title}
              <br />
              {ele.timeline && (
                <span className="year_of_graduation">{ele.timeline}</span>
              )}
            </li>
          </ul>
        </small>
      ))}
    </article>
  );
};

export default AboutCard;
