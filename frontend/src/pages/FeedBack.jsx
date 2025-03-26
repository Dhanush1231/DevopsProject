import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    comments: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, rating, comments } = formData;

    if (name && email && rating && comments) {
      setResponseMessage("Thank you for your feedback!");
      setFormData({ name: "", email: "", rating: "", comments: "" });
    } else {
      setResponseMessage("Please fill out all fields.");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          style={styles.input}
          required
        />

        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          style={styles.input}
          required
        />

        <label style={styles.label}>Rate our services</label>
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="" disabled>
            Select Rating
          </option>
          <option value="5">Excellent</option>
          <option value="4">Good</option>
          <option value="3">Average</option>
          <option value="2">Poor</option>
          <option value="1">Very Poor</option>
        </select>

        <label style={styles.label}>Your Feedback</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Write your feedback here..."
          style={styles.textarea}
          rows="4"
          required
        ></textarea>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
      {responseMessage && (
        <p style={responseMessage.includes("Thank you") ? styles.success : styles.error}>
          {responseMessage}
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    margin: "10px 0 5px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  select: {
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  success: {
    color: "green",
    textAlign: "center",
    marginTop: "15px",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: "15px",
  },
};

export default FeedbackForm;