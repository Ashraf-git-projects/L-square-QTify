import React from "react";
import "./FeedbackModal.css";

function FeedbackModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="feedback-overlay">
      <div className="feedback-modal">
        <div className="modal-header">
          <h3>Feedback</h3>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        <form className="feedback-form">
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email ID" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Description" rows="4" required />
          <button type="submit" className="submit-btn">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackModal;
