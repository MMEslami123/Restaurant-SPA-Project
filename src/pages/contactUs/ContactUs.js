import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import MyNavbar from "../../components/navbar/MyNavbar";
import SectionTitles from "../../components/sectionTitles/SectionTitles";
import LeafletMap from "../../components/LeafletMap";
import "./ContactUs.css";
import { IoLocationOutline } from "react-icons/io5";
import { BsClock, BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import MyButton from "../../components/button/MyButton";
import Footer from "../../components/footer/Footer";
function ContactUs() {
  return (
    <>
      <div className="contact-container bg-light-black w-100">
        <MyNavbar />
        <Container>
          <SectionTitles subject={"ABOUT"} subSubject={"About Us"} />
          <div className="about-text text-white opacity-75">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates reprehenderit incidunt quas cum deleniti, labore
              perferendis quibusdam omnis quasi suscipit ut, ratione eveniet
              iure fugit nobis laudantium. Sed, blanditiis similique. Dolore
              consequatur molestiae aperiam quam vitae, cupiditate fugiat facere
              autem dignissimos aut quod, numquam voluptatem cum. Vero in
              possimus cupiditate commodi. Necessitatibus animi unde praesentium
              iure possimus quaerat ducimus harum.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, cupiditate quibusdam. Minima debitis quidem
              exercitationem sunt! Eligendi, porro! Doloremque eum sequi qui
              molestiae quo accusantium commodi porro iure aut quasi? Nam
              asperiores quae expedita hic ab minus, earum est magnam porro
              aliquam doloremque provident enim delectus eveniet autem
              veritatis? Excepturi quidem, numquam neque non ad fuga odio
              accusamus at itaque? Autem dolorum temporibus nisi nostrum, unde
              corporis a alias sequi quis itaque voluptatibus expedita sit,
              dolor molestiae cum illo iste veritatis quasi. Ad totam obcaecati
              reprehenderit repellendus minus repellat omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              neque quisquam nulla eligendi iure facilis vel, voluptatibus porro
              unde inventore? Facere velit nam excepturi officia provident at ad
              eligendi quia!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              quis ex pariatur impedit libero praesentium autem vero modi
              doloremque perferendis blanditiis, corporis molestiae harum porro
              voluptas! Doloremque, alias cupiditate. Quam! Ad autem sed beatae
              ut, culpa expedita dolore cupiditate ipsa laboriosam natus velit
              totam molestiae ratione, dolores possimus eaque excepturi
              assumenda asperiores fuga quisquam! Ipsam possimus accusamus
              corporis quaerat beatae? Ipsa, voluptas cum beatae consequatur nam
              nesciunt optio iusto nemo magni odit culpa eum, tempora quod,
              rerum ratione corporis? Saepe rerum corrupti modi quo quibusdam
              laboriosam consectetur ducimus amet recusandae. Vitae,
              accusantium? Rerum quasi nam sapiente numquam dicta iusto
              recusandae a nulla accusamus molestiae consequuntur culpa suscipit
              tempora ipsa voluptatum, repellat beatae repellendus obcaecati?
              Ipsam nihil id amet recusandae? Accusantium?
            </p>
          </div>
          <SectionTitles subject={"CONTACT"} subSubject={"Contact Us"} />
          <LeafletMap />
          <Row className="mt-5">
            <Col lg="3" className="text-white">
              <div className="icon-container">
                <IoLocationOutline />
                <div>
                  <h6 className="playFair-font-semi">location</h6>
                  <p>Iran, Tehran, first street, 4th alley, 111</p>
                </div>
              </div>
              <div className="icon-container">
                <BsClock />
                <div>
                  <h6>Open Hours</h6>
                  <p>Monday-Saturday:</p>
                  <p> 11:00 AM - 2300 PM</p>
                </div>
              </div>
              <div className="icon-container">
                <BsTelephone />
                <div>
                  <h6>Call Us</h6>
                  <p>+989123003000</p>
                </div>
              </div>
              <div className="icon-container">
                <TfiEmail />
                <div>
                  <h6>Email Us</h6>
                  <p>info@example.com</p>
                </div>
              </div>
            </Col>
            <Col lg="9" className="contact-form">
              <Row>
                <Col md="6" sm="12">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Your Name"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="your name" />
                  </FloatingLabel>
                </Col>
                <Col md="6" sm="12">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Your Email"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Col>
              </Row>
              <FloatingLabel
                controlId="floatingInput"
                label="Subject"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="your subject" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Message"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "150px", resize: "none" }}
                />
              </FloatingLabel>
              <div className="mybutton mt-3 text-center">
                <MyButton text={"Send Message"} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
