"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: "collaboration",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
      type: "collaboration",
    });
    // Show success message
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-heading mb-12 mask-text">
          LET'S BUILD SOMETHING REAL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-off-white/80 mb-2 font-body"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-off-white/20 rounded-sm px-4 py-3 text-off-white focus:border-money-green focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-off-white/80 mb-2 font-body"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-off-white/20 rounded-sm px-4 py-3 text-off-white focus:border-money-green focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-off-white/80 mb-2 font-body"
                >
                  What's this about?
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full bg-black border border-off-white/20 rounded-sm px-4 py-3 text-off-white focus:border-money-green focus:outline-none transition-colors"
                >
                  <option value="collaboration">Collaboration</option>
                  <option value="custom">Custom Project</option>
                  <option value="beats">Beats & Audio</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-off-white/80 mb-2 font-body"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-transparent border border-off-white/20 rounded-sm px-4 py-3 text-off-white focus:border-money-green focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-money-green text-black font-heading py-3 px-8 rounded-sm uppercase tracking-wider hover:bg-gold-foil transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-heading text-off-white mb-6">
                CONNECT
              </h3>
              <div className="space-y-4">
                <p className="font-body text-off-white/80">
                  Looking to collaborate on a project or just want to connect?
                  Hit me up through the form or any of the channels below.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:info@maskon.dev"
                  className="flex items-center gap-3 text-off-white hover:text-money-green transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>info@maskon.dev</span>
                </a>

                <a
                  href="https://telegram.me/maskondev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-off-white hover:text-money-green transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 2L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>@maskondev</span>
                </a>

                <a
                  href="https://instagram.com/maskondev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-off-white hover:text-money-green transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
                  </svg>
                  <span>@maskondev</span>
                </a>
              </div>
            </div>

            <div className="mt-12 md:mt-0">
              <div className="bg-off-white/5 p-6 rounded-sm border border-off-white/10">
                <h4 className="font-heading text-xl text-money-green mb-3">
                  STUDIO HOURS
                </h4>
                <p className="text-off-white/80 font-body">
                  Monday - Friday: 10am - 7pm
                  <br />
                  Weekends: By appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
