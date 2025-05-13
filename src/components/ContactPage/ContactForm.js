"use client";
import image from "@/constant/Images/image";
import { sendContactForm } from "@/lib/api";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import Image from "next/image";
import { useState } from "react";

const initValues = {
  name: "",
  email: "",
  number: "",
  service: "",
  message: "",
};
const initState = { values: initValues };

export default function ContactForm({ heading, color, paragraph }) {
  const [state, setState] = useState(initState);
  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    await sendContactForm(values);
  };

  return (
    <section className={`${color}`}>
      <div className="app__container flex justify-center items-center gap-12 py-16 md:py-32 mt-8 md:mt-0">
        {/* <div className="my-auto">
          <Image src={image.getInTouch} alt="contact Us" />
        </div> */}
        <form className="w-full md:w-[60%] mb-6">
          <div className="">
            <div className="pb-1">
              <div className="text-center">
                <h2
                  className="text-3xl primary-heading leading-7 capitalize pb-2 text-gray-900"
                  dangerouslySetInnerHTML={{ __html: heading }}
                />
                <p className="my-2 text-gray-700 max-w-3xl mx-auto">{paragraph}</p>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-orange-200"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-orange-200"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="number"
                      id="number"
                      value={values.number}
                      onChange={handleChange}
                      autoComplete="number"
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-orange-200"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="form-services"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    What are your requirements?
                  </label>
                  <div className="mt-2">
                    <select
                      id="form-services"
                      name="service"
                      value={values.service}
                      onChange={handleChange}
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-orange-200"
                    >
                      <option value="">Select</option>
                      <option value="website">Website</option>
                      <option value="seo">SEO</option>
                      <option value="smo">SMO</option>
                      <option value="campaign">Paid Campaign</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      cols="50"
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-orange-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <button
              type="submit"
              disabled={
                !values.name ||
                !values.email ||
                !values.number ||
                !values.service ||
                !values.message
              }
              onClick={onSubmit}
              className="primary-btn"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
