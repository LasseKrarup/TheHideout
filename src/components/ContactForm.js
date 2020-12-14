import React from 'react';
import useViewport from '../hooks/useViewport';

const Label = ({children, className, ...rest}) => (
<   label {...rest} className={`font-heading text-md text-white ${className} overflow-hidden w-24 md:text-lg md:w-32 lg:text-xl xl:text-2xl xl:w-36`}>{children}</label>
)

const Input = (props) => {
const {width} = useViewport()
let size = 16;
if (width >= 375) size = 20;
if (width >= 640) size = 30;
if (width >= 1024) size = 40;
return(
    <input {...props} size={size} className={`bg-black text-gray-400 border-b border-solid p-2 border-gray-600 max-w-max focus:border-white focus:outline-none`}></input>
)
}
  
  const ContactForm = () => {
    const {width} = useViewport()
    return(
      <div className="flex flex-col items-center overflow-hidden mb-8">
        <form method="post" action="/success" netlify-honeypot="bot-field" data-netlify="true" name="contact-form" className="text-white bg-transparent flex flex-col">
          <span className="flex items-center"><Label htmlFor="name">name</Label><Input type="text" name="name" placeholder={`${width >= 640 ? "WRITE YOUR " : ""}NAME HERE`} required /></span>
          <span className="flex items-center"><Label htmlFor="email">email</Label><Input type="email" name="email" pattern=".+@.*\..+" placeholder={`${width >= 640 ? "WRITE YOUR " : ""}EMAIL HERE`} required/></span>
          <span className="flex items-center"><Label htmlFor="phone">phone#</Label><Input type="text" name="phone" placeholder={`${width >= 640 ? "WRITE YOUR " : ""}PHONE# HERE`} /></span>
          <textarea className="text-gray-400 mt-2 bg-black border border-gray-600 rounded-md p-2 focus:outline-none focus:border-white" name="message" placeholder="WRITE YOUR MESSAGE HERE" rows="6"></textarea>
          <input type="hidden" name="form-name" value="contact-form" />
          <button type="submit" className="rounded-md font-heading lowercase text-lg border border-white p-2 my-2 mr-auto hover:bg-white hover:text-black">Send</button>
        </form>
      </div>
    )
  }

  export default ContactForm