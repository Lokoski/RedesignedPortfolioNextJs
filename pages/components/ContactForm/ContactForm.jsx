import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.scss";

function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.nameAndEmail}>
          <input
            placeholder="Full name"
            name="fullName"
            type="text"
            {...register("fullName", { required: true })}
          />{" "}
          {/* register an input */}
          <input
            placeholder="Email"
            type="text"
            {...register("email", { required: true })}
          />
          {errors.lastName && <p>Email is required.</p>}
        </div>
        <div className={styles.subject}>
          <input
            placeholder="Subject"
            type="text"
            {...register("subject", { pattern: "" })}
          />
        </div>
        <div className={styles.textarea}>
          <textarea
            placeholder="What can I help you with?"
            type="text"
            {...register("message")}
          />
        </div>
        <div className={styles.button}>
          <button type="submit">Contact Me</button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
