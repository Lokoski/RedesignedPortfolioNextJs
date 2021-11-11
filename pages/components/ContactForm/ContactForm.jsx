import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.scss";

function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_kg3yLgNkUstEO86KHoLJY";

  const onSubmit = (data, reset) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.fullName,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      userID
    );
    reset.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Thank you!");
      })
      .catch((err) => `Something went wrong! ${err}`);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.nameAndEmail}>
          <div>
            <input
              placeholder="Full name"
              name="fullName"
              type="text"
              {...register("fullName", { required: "Please enter your name" })}
            />{" "}
            <div className={styles.line}></div>
            <span>{errors.fullName && errors.fullName.message}</span>
          </div>

          {/* register an input */}
          <div>
            <input
              placeholder="Email"
              className={styles.emailInput}
              type="text"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]{2,}$/i,
                  message: "Invalid email",
                },
              })}
            />
            <div className={styles.lineWithMargin}></div>
            <span className={styles.errorWithMargin}>
              {errors.email && errors.email.message}
            </span>
          </div>
        </div>
        <div className={styles.subject}>
          <div>
            <input
              placeholder="Subject"
              type="text"
              {...register("subject", { required: "Please add a subject" })}
            />
            <div className={styles.line}></div>
          </div>
          <span>{errors.subject && errors.subject.message}</span>
        </div>
        <div className={styles.textarea}>
          <textarea
            placeholder="What can I help you with?"
            type="text"
            {...register("message", { required: "Please add a message" })}
          />
        </div>
        <span>{errors.message && errors.message.message}</span>
        <span>{successMessage}</span>
        <div className={styles.button}>
          <button type="submit">Contact Me</button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
