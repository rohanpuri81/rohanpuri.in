import "./Testimonials.css";
export default function Testimonials() {
  const testimonials = [
    {
      name: "Abgishek Ravindram",
      position: "Senior Developer, Walmart",
      text: "This guy is incredibly awesome, I hired him and when He delivered, I honestly fell in love with the project. He is indeed a great guy.",
    },
    {
      name: "Sumant Bhatia",
      position: "Manager, Digikull",
      text: "This guy is incredibly awesome, I hired him and when He delivered, I honestly fell in love with the project. He is indeed a great guy.",
    },
    {
      name: "Nishikant Giri",
      position: "SDE-2, LTI",
      text: "This guy is incredibly awesome, I hired him and when He delivered, I honestly fell in love with the project. He is indeed a great guy.",
    },
  ];
  return (
    <>
      <div>
        <div className="row mx-5">
          {testimonials.map((value) => {
            return (
              <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                <div className="card shadow testimonial-card d-flex flex-column">
                  <span className="description">{value.text} </span>
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="name">{value.name}</span>
                  <span>{value.position}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
