import React, { useRef, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import swal from "sweetalert";
// import email from "../../assests/OIP-removebg-preview.png";
// import phone from "../../assests/phone-removebg-preview.png";
import { HiAnnotation } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUS = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_yr115oq",
        "template_taz1ovi",
        form.current,
        "K--Az9q41HmbSEqJv"
      )
      .then(
        (result) => {
          setButtonText("Sent");
          setTimeout(() => {
            setButtonText("Send");
          }, 3000);
          setStatus({ succes: true });
          swal("", "Mail is delivered", "success");
        },
        (error) => {
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );

    setFormDetails(formInitialDetails);
  };

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <section className="mainbody">
      <div className="c-header-container">

        <motion.div className="c_heading"
          initial={{ x: '7rem', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "tween",
            // delay:2,
          }}>
          <h2 className="orangeText">Have a Question, we didn't answered?</h2>
          <h5 className="secondaryText">Don't be shy, ask the CheekSquad!</h5>
          <hr width="150px" />
          <p>Monday-Sunday: 7:00 Am - 5:00 Pm (IST) </p>
        </motion.div>

      </div>
      <div className="c_form">
        <div className="card1">
          <motion.div className="carddesign"
            initial={{ x: '7rem', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "tween",
              delay: 0.8,
            }}
          >
            <div className="upper-carddesign">
              <p className="secondaryText">Message Here</p>
              <HiAnnotation className="design-image" size='5rem' />
            </div>
            <div className="lower-carddesign">
              <div className="cardText">
                <h6 className="orangeText">Drop a Mail</h6>
                <p className="secondaryText">Lorem ipsum dolor sit amet consectetur.</p>
                <p className="secondaryText">Lorem, ipsum dolor.</p>
              </div>

              <div className="sendingbutton">
                <button onClick={onOpenModal} className="button">
                  Submit a Request
                </button>
                <Modal open={open} onClose={onCloseModal} center classNames="modal">
                  <form ref={form} onSubmit={sendEmail} className="formbody">
                   
                   <h1 className="orangeText" >Contact Us</h1>
                    
                    
                    <div className="input1">
                      <input
                        type="text"
                        className="name"
                        placeholder="Your Name "
                        value={formDetails.name}
                        name="user_name"
                        onChange={(e) => onFormUpdate("name", e.target.value)}
                        required
                      />
                      <input
                        type="email"
                        className="email"
                        placeholder="Your Email"
                        value={formDetails.email}
                        name="user_email"
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        cols={56}
                        rows={8}
                        className="message"
                        placeholder="Write Message"
                        value={formDetails.message}
                        name="message"
                        onChange={(e) => onFormUpdate("message", e.target.value)}
                        required
                      />
                    </div>
                    <button className="sending button">{buttonText}</button>
                  </form>
                </Modal>
              </div>
            </div>

          </motion.div>
          <motion.div className="carddesign"
            initial={{ x: '7rem', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "tween",
              delay: 1.6,
            }}
          >
            <div className="upper-carddesign">
              <p className="secondaryText">Social Media</p>
              <HiAnnotation className="design-image" size='5rem' />
            </div>
            <div className="lower-carddesign">
              <div className="cardText">
                <h6 className="orangeText">Our Accounts </h6>
                <div className="mediaIcons-div">
                  <div className="social-mediaIcons">
                    <FaFacebook color="blue" size="1.1rem" />
                    <span className="secondaryText">FaceBook</span>
                  </div>
                  <div className="social-mediaIcons">
                    <FaInstagram color="blue" size="1.1rem" />
                    <span className="secondaryText">FaceBook</span>
                  </div>
                  <div className="social-mediaIcons">
                    <FaTwitter color="blue" size="1.1rem" />
                    <span className="secondaryText">FaceBook</span>
                  </div>
                  <div className="social-mediaIcons">
                    <FaYoutube color="blue" size="1.1rem" />
                    <span className="secondaryText">FaceBook</span>
                  </div>
                </div>

              </div>


            </div>

          </motion.div>
          <motion.div className="carddesign"
            initial={{ x: '7rem', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "tween",
              delay: 2.4,
            }}
          >
            <div className="upper-carddesign">
              <p className="secondaryText">Message Here</p>
              <HiAnnotation className="design-image" size='5rem' />
            </div>
            <div className="lower-carddesign">
              <div className="cardText">
                <h6 className="orangeText">Drop a Mail</h6>
                <p className="secondaryText">Lorem ipsum dolor sit amet consectetur.</p>

                <p className="secondaryText">Lorem ipsum dolor sit amet consectetur.</p>
                <p className="secondaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, expedita?</p>
              </div>


            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;

