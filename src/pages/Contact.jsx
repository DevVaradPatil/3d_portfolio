import React, { Suspense, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import Fox from '../models/Fox'
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { socials } from '../constants'
import { Link } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const { alert, showAlert, hideAlert } = useAlert();

  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: [e.target.value]})
  };

  const handleFocus = () =>setCurrentAnimation('walk');

  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');
    emailjs.send(
      'service_2at5w1f',
      'template_qrurobu',
      {
        from_name: form.name,
        to_name: "Varad",
        from_email: form.email,
        to_email: "varadapatil123@gmail.com",
        message: form.message,
      },
      'gPSVXRIE5XamWG-UM'
    ).then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Message sent successfully!', type: 'success'})
      setTimeout(() => {
          hideAlert();
          setCurrentAnimation('idle');
          setForm({ name: "", email: "", message: "" });
      }, 3000);
    }).catch((error) => {
      setIsLoading(false);
      showAlert({ show: true, text: "I didn't recieve your message!", type: 'danger'});
      console.log(error);
      //TODO: SHOW ERROR MESSAGE
      setCurrentAnimation('idle')
      setForm({ name: "", email: "", message: "" });
    })
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-container md:h-screen">

    {alert.show && <Alert {...alert}/>}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <div className="flex gap-4 mt-4">
        {socials.map((social) => (
          <Link to={social.url} key={social.name} target="_blank" className="flex justify-center items-center transition-all duration-200 hover:scale-[1.02] hover:shadow-lg shadow-md p-2 w-10 h-10 rounded-lg">
            <img src={social.icon} alt={social.name} className="w-full h-full object-contain"/>
          </Link>
        ))}
        </div>
        <form className="w-full flex flex-col gap-7 mt-8" onSubmit={handleSubmit} ref={formRef}>
          <label className="text-black-500 font-semibold">Name
          <input
            type="text"
            name="name"
            className="input"
            placeholder="John Doe"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          </label>
          <label className="text-black-500 font-semibold">Email
          <input
            type="email"
            name="email"
            className="input"
            placeholder="john@gmail.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          </label>
          <label className="text-black-500 font-semibold">Your Message
          <textarea
            name="message"
            className="textarea"
            placeholder="Let me know how I can help you?"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          </label>

          <button type="submit" className="btn" onFocus={handleFocus} onBlur={handleBlur} disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] ">
        <Canvas
          camera={{
            position: [0,0,5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox 
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5,0.5,0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
