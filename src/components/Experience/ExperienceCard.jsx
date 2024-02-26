import { BsPatchCheckFill } from "react-icons/bs";

const ExperienceCard = (props) => {
  console.log(props);
  return (
    <div className="experience__category">
      <h3>{props.props.title}</h3>
      <div className="experience__content">
        {props.props.data?.map((ele) => {
          return (
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{ele}</h4>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceCard;
