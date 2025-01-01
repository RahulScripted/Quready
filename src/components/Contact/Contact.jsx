import React, { useState } from 'react';
import { delay, motion } from 'framer-motion';
import asset from '../../assets/asset';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    reason: '',
    email: '',
    message: ''
  });

  const [result, setResult] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [typeImage,setTypeImage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult(""); // Clear previous result
    setIsLoading(true); // Show the loader

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("reason", formData.reason);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key","2bfd616f-a72b-43ee-aa32-ff8f1b5f2f2f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: '',reason: '', email: '', message: '' });
      } 
      else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
      setTypeImage(true)
    }
    finally{
        setIsLoading(false)
        setIsPopupVisible(true)
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const childLeft ={
    hidden:{opacity:0,x:-50},
    visible:{opacity:1,x:0, transition:{duration:0.5,delay:0.9}}
  }
  const childRight ={
    hidden:{opacity:0,x:50},
    visible:{opacity:1,x:0, transition:{duration:0.5,delay:0.9}}
  }

  return (
    <div className="w-full flex items-center justify-center md:justify-between gap-8 text-black px-4 sm:px-7 md:px-10">

        {/* Image */}
        <motion.img  src={asset.contact} alt="contact" className='w-[35vw] hidden md:block'
            variants={childLeft}
            initial="hidden"
            animate="visible"
        />

        {/* Form */}
        <motion.form onSubmit={onSubmit} className='flex flex-col gap-5 w-full'
          variants={childRight}
          initial="hidden"
          animate="visible"
        >
            
            {/* Title */}
            <h1 className='text-3xl sm:text-5xl bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent text-center font-semibold'>Contact Us</h1>

          <div>
            {/* Name */}
            <label htmlFor="name" className="block text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-transparent rounded-lg focus:outline-none border border-neutral-700"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Reason */}
          <div>
            <label htmlFor="reason" className="block text-lg">Reason</label>
            <select
                name="reason" 
                id="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-transparent rounded-lg focus:outline-none border border-neutral-700 text-gray-400 cursor-pointer"
                placeholder="Enter your name"
                required>
                    <option className='bg-white' value="">Select reason</option>
                    <option className='text-gray-700' value="support">Support</option>
                    <option className='text-gray-700' value="inquiry">Inquiry</option>
                    <option className='text-gray-700' value="feedback">Feedback</option>
            </select>
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-transparent rounded-lg focus:outline-none border border-neutral-700"
              placeholder="Enter your email"
              required
            />
          </div>
          
          {/* Message Box */}
          <div>
            <label htmlFor="message" className="block text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-transparent rounded-lg focus:outline-none border border-neutral-700 resize-none"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-700 transition-all duration-300">
            Submit
          </motion.button>
        </motion.form>

        {/* Loader */}
        {isLoading && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                <div className='loader border-4 border-t-violet-600 rounded-full w-16 h-16 animate-spin'></div>
            </div>
        )}

        {/* Pop up */}
        {isPopupVisible && (
          <div
            className="fixed inset-0 bg-[#151421] bg-opacity-50 flex flex-col justify-center items-center text-white">
            <div className="bg-[#151421] p-6 rounded-lg shadow-lg max-w-sm w-full text-center flex items-center justify-center flex-col gap-5">
              <h3 className="text-lg font-semibold">{result}</h3>

              <button
                onClick={closePopup}
                className="mt-4 px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-700 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
    </div>
  );
}

export default Contact;