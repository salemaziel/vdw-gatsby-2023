import React from "react"
import { NetlifyForm, Honeypot } from "react-netlify-forms"

const ContactForm2 = () => {
  return (
    <NetlifyForm
      name="Contact"
      action="/thanks"
      honeypotName="bot-field"
      data-netlify-recaptcha="true"
      className="mx-0 mt-0 mb-8 overflow-x-hidden"
      onSuccess={(response, context) => {
        console.log("Successfully sent form data to Netlify Server")
        context.formRef.current.reset()
      }}
    >
      {({ handleChange, success, error }) => (
        <>
          <Honeypot />
          {success && (
            <p sx={{ variant: "alerts.success", p: 3 }}>
              Thanks for contacting us!
            </p>
          )}
          {error && (
            <p sx={{ variant: "alerts.muted", p: 3 }}>
              Sorry, we could not reach servers. Because it only works on
              Netlify, our GitHub demo does not provide a response.
            </p>
          )}
          {/* Name */}
          <div className="flex flex-wrap m-auto">
            <div className="w-full mb-4 sm:w-11/12">
              <label
                htmlFor="name"
                sx={{ variant: "forms.label" }}
                className="hidden mx-0 mt-0 mb-4 text-sm font-bold leading-8 text-gray-600 cursor-default"
              >
                Name:
              </label>
              <input
                onChange={handleChange}
                sx={{ variant: "forms.input" }}
                type="text"
                name="name"
                id="name"
                aria-label="Name"
                placeholder="Name*"
                required
                className="block overflow-visible py-8 px-4 m-0 w-full h-10 text-base leading-6 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-primary-600 focus:outline-offset-2 outline-none"
              />
            </div>
          </div>
          {/* End Name */}
          {/* Email */}
          <div className="flex flex-wrap m-auto">
            <div className="w-full mb-4 sm:w-11/12">
              <label
                htmlFor="email"
                sx={{ variant: "forms.label" }}
                className="hidden mx-0 mt-0 mb-4 text-sm font-bold leading-8 text-gray-600 cursor-default"
              >
                Email:
              </label>
              <input
                onChange={handleChange}
                sx={{ variant: "forms.input" }}
                type="email"
                name="email"
                id="email"
                aria-label="Email"
                placeholder="Email*"
                required
                className="block overflow-visible py-8 px-4 m-0 w-full h-10 text-base leading-6 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-primary-600 focus:outline-offset-2 outline-none"
              />
            </div>
          </div>
          {/* End Email */}
          {/* Phone */}
          <div className="flex flex-wrap m-auto">
            <div className="w-full mb-4 sm:w-11/12">
              <label
                htmlFor="tel"
                sx={{ variant: "forms.label" }}
                className="hidden mx-0 mt-0 mb-4 text-sm font-bold leading-8 text-gray-600 cursor-default"
              >
                Phone:
              </label>
              <input
                onChange={handleChange}
                sx={{ variant: "forms.input" }}
                type="tel"
                name="phone"
                id="phone"
                aria-label="Phone"
                placeholder="Phone*"
                required
                className="block overflow-visible py-8 px-4 m-0 w-full h-10 text-base leading-6 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-primary-600 focus:outline-offset-2 outline-none"
              />
            </div>
          </div>
          {/* End Phone */}
          {/* Current Website */}
          <div className="flex flex-wrap m-auto">
            <div className="w-full mb-4 sm:w-11/12">
              <label
                htmlFor="CurrentWebsite"
                sx={{ variant: "forms.label" }}
                className="hidden mx-0 mt-0 mb-4 text-sm font-bold leading-8 text-gray-600 cursor-default"
              >
                Current Website:
              </label>
              <input
                onChange={handleChange}
                sx={{ variant: "forms.input" }}
                type="text"
                name="currentwebsite"
                id="currentwebsite"
                aria-label="Current Website"
                placeholder="Current Website*"
                required
                className="block overflow-visible py-8 px-4 m-0 w-full h-10 text-base leading-6 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-primary-600 focus:outline-offset-2 outline-none"
              />
            </div>
          </div>
          {/* End Current Website */}

          {/* Message */}
          <div className="flex flex-wrap m-auto">
            <div className="w-full mb-4 sm:w-11/12">
              <label
                htmlFor="textarea"
                sx={{ variant: "forms.label" }}
                className="hidden mx-0 mt-0 mb-4 text-sm font-bold leading-8 text-gray-600 cursor-default"
              >
                Message:
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                rows="4"
                onChange={handleChange}
                sx={{ variant: "forms.textarea" }}
                aria-label="Message"
                placeholder="Message"
                className="block overflow-visible py-20 px-4 m-0 w-full h-10 sm:h-14 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-primary-600"
              />
            </div>
          </div>
          {/* End Message */}
          <div data-netlify-recaptcha="true"></div>
          {/* Submit */}

          <div /*sx={{ pt: 3 }}*/ className="w-full mb-4 sm:w-11/12">
            <ul
              className="flex flex-col w-full p-0 my-0 mr-0 -ml-4 list-none cursor-default"
              /*style={{ listStyle: "none" }}*/
            >
              <li
                /*style={{ listStyle: "none" }}*/
                className="flex-grow flex-shrink w-full py-0 pl-4 pr-0 text-center align-middle list-none cursor-default"
              >
                <button
                  type="submit"
                  sx={{ variant: "buttons.success" }}
                  aria-label="Submit"
                  value="Send Message"
                  className="inline-block w-full h-auto px-20 py-3 mx-0 mt-8 mb-0 font-black text-white normal-case truncate transition duration-300 ease-in-out rounded cursor-pointer hover:text-white focus:bg-green-600 focus:text-white delay-0 focus:outline-none focus:shadow-outline bg-gradient-to-r from-[#543ab7] to-[#00acc1] hover:from-green-600 hover:to-green-600 list-outside list-none"
                  style={{
                    fontSize: "128%",
                    textDecoration: "none",

                    /*listStyle: "outside none none",*/
                  }}
                >
                  Submit
                </button>
              </li>
            </ul>
            {/*<button type="reset" sx={{ variant: "buttons.danger" }}>
                Reset
              </button>*/}
          </div>
          {/* End Submit */}
        </>
      )}
    </NetlifyForm>
  )
}

export default ContactForm2
