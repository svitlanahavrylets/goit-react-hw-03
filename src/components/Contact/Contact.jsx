import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function Contact({ id, name, number, onDeleteContact }) {
  return (
    <div key={id} className={css.contactList}>
      <p className={css.name}>
        <IoPersonSharp />
        {name}
      </p>
      <p className={css.number}>
        <FaPhoneAlt />
        {number}
      </p>
      <button
        onClick={() => onDeleteContact(id)}
        type="button"
        className={css.deleteBtn}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
