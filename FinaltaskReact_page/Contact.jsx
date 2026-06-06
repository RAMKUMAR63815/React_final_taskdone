import { useState, useRef } from "react";

function Contact() {

  const inputRef = useRef();

  const [name, setName] = useState("");

  const submitHandler = (e) => {

    e.preventDefault();

    if (name === "") {
      alert("Name Required");
      inputRef.current.focus();
      return;
    }

    alert("Form Submitted");
  };

  return (
    <form
      className="form-container"
      onSubmit={submitHandler}
    >

      <input
        ref={inputRef}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button className="btn">
        Submit
      </button>

    </form>
  );
}

export default Contact;