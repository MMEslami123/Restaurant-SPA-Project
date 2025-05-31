import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./Home.css";
import MyButton from "../../components/button/MyButton";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import WhyUsCard from "../../components/cards/whyUsCards/WhyUsCard";
import MenuCard from "../../components/cards/menuCards/MenuCard";
import SectionTitles from "../../components/sectionTitles/SectionTitles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import EventCard from "../../components/cards/eventCards/EventCard";
import TestimonialsCard from "../../components/cards/testimonialsCards/TestimonialsCard";
import ChefsCard from "../../components/cards/chefsCards/ChefsCard";
import Footer from "../../components/footer/Footer";
import { use, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Special from "../../components/specials/Special";
import { myContext } from "../../App";
function Home() {
  const sectionTitles = [
    { subject: "WHY US", subSubject: "Why Choose Our Restaurant" },
    { subject: "MENU", subSubject: "Check Our Tasty Menu" },
    { subject: "SPECIALS", subSubject: "Check Our Specials" },
    { subject: "TESTIMONIALS", subSubject: "What they're saying about us" },
    { subject: "TEAM", subSubject: "Necessitatibus eius consequatur" },
  ];
  const whyUsCards = [
    {
      number: "01",
      title: "Lorem Ipsum",
      desc: "Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat",
    },
    {
      number: "02",
      title: "Repellat Nihil",
      desc: "Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest",
    },
    {
      number: "03",
      title: "Ad ad velit qui",
      desc: "Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis",
    },
  ];
  const eventCards = [
    {
      id: 1,
      image: "/images/events-slider-1.jpg",
      title: "Birthday Parties",
      price: "$189",
      featuresTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        {
          featureId: 1,
          icon: <IoMdCheckmarkCircleOutline />,
          text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          featureId: 2,
          icon: <IoMdCheckmarkCircleOutline />,
          text: "Duis aute irure dolor in reprehenderit in voluptate velit.",
        },
        {
          featureId: 3,
          icon: <IoMdCheckmarkCircleOutline />,
          text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
      desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      id: 2,
      image: "/images/events-slider-2.jpg",
      title: "Private Parties",
      price: "$290",
      featuresTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        {
          featureId: 1,
          icon: <IoMdCheckmarkCircleOutline />,
          text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          featureId: 2,
          icon: <IoMdCheckmarkCircleOutline />,
          text: "Duis aute irure dolor in reprehenderit in voluptate velit.",
        },
        {
          featureId: 3,
          icon: <IoMdCheckmarkCircleOutline />,
          text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
      desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      id: 3,
      image: "/images/events-slider-3.jpg",
      title: "Custom Parties",
      price: "$99",
      featuresTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        {
          featureId: 1,
          icon: <IoMdCheckmarkCircleOutline />,
          text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          featureId: 2,
          icon: <IoMdCheckmarkCircleOutline />,
          text: "Duis aute irure dolor in reprehenderit in voluptate velit.",
        },
        {
          featureId: 3,
          icon: <IoMdCheckmarkCircleOutline />,
          text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
      desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
  ];
  const testimonialsCards = [
    {
      id: 1,
      idea: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      image: "/images/testimonials-1.jpg",
      fullName: "Saul Goodman",
      expert: "Ceo & Founder",
    },
    {
      id: 2,
      idea: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      image: "/images/testimonials-2.jpg",
      fullName: "Sara Wilsson",
      expert: "Designer",
    },
    {
      id: 3,
      idea: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      image: "/images/testimonials-3.jpg",
      fullName: "Jena Karlis",
      expert: "Store Owner",
    },
    {
      id: 4,
      idea: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      image: "/images/testimonials-4.jpg",
      fullName: "Matt Brandon",
      expert: "Freelancer",
    },
    {
      id: 5,
      idea: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      image: "/images/testimonials-5.jpg",
      fullName: "John Larson",
      expert: "Entrepreneur",
    },
  ];
  const chefsCards = [
    {
      id: 1,
      image: "/images/chefs-1.jpg",
      fullName: "Walter White",
      expert: "Master Chef",
    },
    {
      id: 2,
      image: "/images/chefs-2.jpg",
      fullName: "Sarah Jhonson",
      expert: "Patissier",
    },
    {
      id: 3,
      image: "/images/chefs-3.jpg",
      fullName: "William Anderson",
      expert: "Cook",
    },
  ];
  const subjects = [
    "Modi sit est",
    "Unde praesentium sed",
    "Pariatur explicabo vel",
    "Nostrum qui quasi",
    "Iusto ut expedita aut",
  ];
  const specials = [
    {
      image: "/images/specials-1.png",
      title: "Architecto ut aperiam autem id",
      subTitle:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      desc: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
    },
    {
      image: "/images/specials-2.png",
      title: "Et blanditiis nemo veritatis excepturi",
      subTitle:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      desc: "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
    },
    {
      image: "/images/specials-3.png",
      title: "Impedit facilis occaecati odio neque aperiam sit",
      subTitle:
        "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
      desc: "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae",
    },
    {
      image: "/images/specials-4.png",
      title:
        "Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore",
      subTitle:
        "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
      desc: "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
    },
    {
      image: "/images/specials-5.png",
      title: "Est eveniet ipsam sindera pad rone matrelat sando reda",
      subTitle: "Omnis blanditiis saepe eos autem qui sunt debitis porro quia.",
      desc: "Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel",
    },
  ];
  const [specialBtn, setSpecialBtn] = useState(0);
  const [menuCards, setMenuCards] = useState([]);
  // const { pack } = useContext(myContext);
  // const [isLoopEnabled, setIsLoopEnabled] = useState(false);
  // useEffect(() => {
  //   setIsLoopEnabled(true);
  // }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3004/menuCards")
      .then((res) => setMenuCards(res.data));
  }, []);
  const activeBtn = (index) => {
    setSpecialBtn(index);
  };
  return (
    <>
      {/* header */}
      <header>
        <div className="overlay">
          <MyNavbar />
          <Container>
            <Row className="align-content-center vh-100 text-center text-lg-start">
              <h1 className="playFair-font-semi text-white" data-aos="fade-up">
                Welcome to <span className="dark-gold">Restaurantly</span>
              </h1>
              <p
                className="text-white opacity-75 fs-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Delivering great food for more than 18 years!
              </p>
              <div
                className="d-flex gap-3 justify-content-center justify-content-lg-start"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <MyButton text={"OUR MENU"} />
                <MyButton text={"BOOK A TABLE"} />
              </div>
            </Row>
          </Container>
        </div>
      </header>
      {/* main */}
      <main>
        {/* description section */}
        <section className="desc">
          <div className="overlay">
            <Container data-aos="fade-up">
              <Row className="min-vh-100 align-items-center">
                <Col lg="6" md="12" className="text-light py-3 order-last">
                  <h3 className="playFair-font-semi">
                    Voluptatem dignissimos provident
                  </h3>
                  <p className="text-white-50 fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="text-white opacity-75 d-flex align-items-center gap-2 my-4">
                    <LiaCheckDoubleSolid className="dark-gold" />
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                  <div className="text-white opacity-75 d-flex align-items-center gap-2 my-4">
                    <LiaCheckDoubleSolid className="dark-gold" />
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </div>
                  <div className="text-white opacity-75 d-flex align-items-center gap-2 my-4">
                    <LiaCheckDoubleSolid className="dark-gold" />
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure
                  </div>
                  <div
                    className="text-white opacity-75"
                    style={{ textAlign: "justify" }}
                  >
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident
                  </div>
                </Col>
                <Col
                  lg="6"
                  md="12"
                  className="px-lg-5 py-5 order-first order-lg-last"
                >
                  <img
                    className="about-img img-fluid border border-5 border-white border-opacity-25"
                    src={"/images/about.jpg"}
                    alt=""
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        {/* whyUs section */}
        <section className="why-choose bg-black pt-5 pb-1">
          <Container>
            <SectionTitles {...sectionTitles[0]} />
            <Row className="my-5" data-aos="fade-up" data-aos-delay="100">
              {whyUsCards.map((card) => (
                <Col lg="4" md="6" sm="12" className="my-3" key={card.number}>
                  <WhyUsCard {...card} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        {/* menu section */}
        <section className="bg-light-black py-5">
          <Container>
            <SectionTitles {...sectionTitles[1]} />
            <Row data-aos="fade-up" data-aos-delay="200">
              {menuCards.map((card) => (
                <Col
                  lg="6"
                  md="12"
                  className="d-flex align-items-center"
                  key={card.id}
                >
                  <MenuCard {...card} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        {/* specials section */}
        <section className="bg-black py-5">
          <Container>
            <SectionTitles {...sectionTitles[2]} />
            <Row className="mt-5" data-aos="fade-up" data-aos-delay="100">
              <Col lg="3" className="pe-4">
                <ul className="special-subjects p-0">
                  {subjects.map((subject, index) => (
                    <li key={index}>
                      <button
                        onClick={() => activeBtn(index)}
                        className={specialBtn == index ? "active-btn" : ""}
                      >
                        {subject}
                      </button>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col lg="9">
                <Special {...specials[specialBtn]} />
              </Col>
            </Row>
          </Container>
        </section>
        {/* events section  */}
        <section className="event">
          <div className="overlay">
            <Container>
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                spaceBetween={30}
                className="eventSwiper"
                data-aos="flip-up"
                data-aos-offset="400"
              >
                {eventCards.map((eventCard) => (
                  <SwiperSlide key={eventCard.id}>
                    <EventCard {...eventCard} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Container>
          </div>
        </section>
        {/* Testimonials section */}
        <section className="bg-black py-5">
          <Container>
            <SectionTitles {...sectionTitles[3]} />
            <Swiper
              modules={[Autoplay, Pagination, EffectCards]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              effect={"cards"}
              grabCursor={true}
              // loop={isLoopEnabled}
              loopAdditionalSlides={3}
              className="TestimonialsSwiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {testimonialsCards.map((testimonialsCard) => (
                <SwiperSlide key={testimonialsCard.id}>
                  <TestimonialsCard {...testimonialsCard} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </section>
        {/* Team section */}
        <section className="bg-light-black py-5">
          <Container>
            <SectionTitles {...sectionTitles[4]} />
            <Row className="pt-5">
              {chefsCards.map((chefsCard) => (
                <Col
                  lg="4"
                  className="mt-4"
                  key={chefsCard.id}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <ChefsCard {...chefsCard} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
      {/* footer */}
      <Footer />
    </>
  );
}

export default Home;
