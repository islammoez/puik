import "./about.css";
import aboutimg from "../images/about-img.jpg"
function About() {
  return (
    <section className="container row m-auto mt-5 myabout">
      <div className="col-lg-7">
        <h4 className="border-top border-bottom border-black mb-3">ABOUT US</h4>
        <p className="mb-5">
          After meeting during their studies, Freek Claessen and Daan Gescher
          started puik in 2012 to put up-and-coming Dutch design talent in the
          spotlight. Since then, the company has grown from a lone candle holder
          to a solid range of furniture and accessories with a twist.
          Conveniently, ‘puik’ is old Dutch for ‘excellent or ‘great’.<br/> Freek: We
          want the products in our range to be as timeless and sustainable as
          possible. When we decide to include a new design, we intend to keep it
          in the collection for a minimum of ten years.<br/> Daan: We ask the
          designers we collaborate with to create ‘wow’ items that are so iconic
          that people remember them. For example, if you put our Dost chair in
          the room, everybody remembers the chair that feels and looks like a
          hug. And I really hope that people get a special feeling about all our
          products.<br/> Freek: Daan is responsible for transforming a sketch into a
          real-life product, while I look after sales and marketing. We are
          complementary, I believe that is what makes puik great.<br/> Daan: For me
          the best part is working with our great team. All the designers are
          like friends to us. We all have the same vision, but everybody is
          specialized in their own area.
        </p>
      </div>
      <div className="col-lg-5">
        <img className="aboutimg" src={aboutimg}/>
      </div>
    </section>
  );
}

export default About;
