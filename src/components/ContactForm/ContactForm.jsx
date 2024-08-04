import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const INITIAL_VALUES = {
  contactName: "",
  contactNumber: "",
};

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ContactValidationSchema = Yup.object().shape({
  contactName: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
  contactNumber: Yup.string()
    .matches(phoneRegExp, "The phone number must match the format 'xxx-xx-xx'")
    .required("Required"),
});
const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.contactName,
      number: values.contactNumber,
    };
    onAddContact(contactObject);

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ INITIAL_VALUES }}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
    >
      {({ errors }) => (
        <Form>
          <label>
            <span>Name</span>
            <Field type="text" name="contactName" placeholder="" />
            <ErrorMessage
              className={css.errorText}
              name="contactName"
              component="span"
            />
          </label>
          <label>
            <span>Phone</span>
            <Field type="tel" name="contactNumber" placeholder="" />
            <ErrorMessage
              className={css.errorText}
              name="contactNumber"
              component="span"
            />
          </label>
          <button disabled={Object.keys(errors).length > 0} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
