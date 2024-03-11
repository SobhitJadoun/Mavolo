/* eslint-disable react/prop-types */
const Card = (props) => {
  const { heading, content} = props;

  return (
    <div className="card mt-5">
      <div className="top">
        <h4>{heading}</h4>
      </div>
      <div className="main">
        <p className="mt-4 text-center">{content}</p>
      </div>
      <button className="text-center text-dark"><a href="#">Learn More</a></button>
    </div>
  );
};

export default Card;
