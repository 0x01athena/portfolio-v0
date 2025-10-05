import { FaGithub, FaLinkedin, FaPhoneAlt, FaTelegram } from "react-icons/fa";

const contact = [
  {
    icon: <FaTelegram className="text-2xl" />,
    link: "https://t.me/pleiades0x01",
    name: "Telegram",
  },
  {
    icon: <FaGithub className="text-2xl" />,
    link: "https://github.com/0xpleiades",
    name: "0xpleiades",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="mt-16 text-sm">
      <div className="mx-auto max-w-5xl flex flex-col dark:border-t dark:border-t-gray-800 py-10">
        <div className="text-center">
          <h2 className="mb-5 text-xl font-bold text-yellow-500 dark:text-yellow-600 text-center">
            Contact Me
          </h2>
          <p className="dark:text-gray-400 mb-10">
            Lets get in touch! Feel free to reach out via email or phone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6 pb-8 px-5 rounded-lg self-center dark:text-white">
            {contact.map(({ icon, link, name }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                className="flex lg:flex-col items-center gap-4 md:gap-2 border border-gray-300 dark:border-gray-700 py-3 px-4 rounded-md hover:bg-teal-500 hover:text-white transition-all delay-75 duration-300 ease-in-out cursor-pointer"
              >
                {icon}
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
