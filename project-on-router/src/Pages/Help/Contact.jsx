import { Form } from "react-router-dom";
import { useActionData } from "react-router-dom";

function Contact() {
  //*Don't forget to give name attribute
  const data=useActionData();
  console.log(data)
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message: </span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>Message must be over 10 words</p>}
      </Form>
    </div>
  );
}

export default Contact;
