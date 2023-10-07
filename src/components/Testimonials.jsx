import "./Testimonials.css";
export default function Testimonials() {
  const testimonials = [
    {
      name: "Abhishek Ravindram",
      position: "Senior Developer, Walmart",
      text: "This guy is incredibly awesome, I have confirmed his skills, He is indeed a great guy.",
    },
    {
      name: "Sumant Bhatia",
      position: "Manager, Digikull",
      text: "His skills with react are really good , He is one of the good devlopers wwhom I met",
    },
    {
      name: "Nishikant Giri",
      position: "SDE-2, LTI",
      text: "He was always interested in front end devlopment , now he is doing good",
    },
  ];
  return (
    <>
      <div>
        <div className="row mx-5">
          {testimonials.map((value, ind) => {
            return (
              <div key={ind} className="col-lg-4 col-sm-12 col-md-6 my-4">
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
