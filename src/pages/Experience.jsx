import { motion } from "framer-motion";

import thirdweb from "../assets/companies/Thirdweb.png"
import gnosis from "../assets/companies/Gnosis.png"
import actinidi from "../assets/companies/Actindi Inc.png"

const Experience = () => {
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: 50 }, // Start from right (x: 50)
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="pt-10 dark:text-white" id="experience">
      <div className="mx-auto max-w-5xl mt-20 px-3">
        <h2 className="mb-5 text-xl font-bold text-yellow-500 dark:text-yellow-600 text-center">
          Experience
        </h2>

        <div className="space-y-12">
          {/* Blockchain Engineer, Thirdweb */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="space-y-2"
          >
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full bg-white">
                <img
                  src={thirdweb}
                  alt="Thirdweb"
                  className="w-[40px] rounded-full"
                />
              </div>
              <h1 className="font-bold text-[16px]">Thirdweb</h1>
            </div>
            <div className="ml-2 md:ml-12 space-y-2 border-l-2 border-red-500 pl-2">
              <div className="flex gap-2 justify-between text-[16px] text-teal-500 font-bold">
                <h1>Blockchain Engineer, Thirdweb</h1>
                <h1>2023/04 – 2025/04 • San Francisco, CA, US</h1>
              </div>
              <div>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>
                    Maintained and extended the <strong>Solidity smart contract</strong> stack, delivering secure, gas‑efficient features like internal balance accounting and <strong>ERC‑20</strong> compatible governance tokens, significantly reducing transfer gas costs.
                  </li>
                  <li>
                    Led full‑stack development of a <strong>tokenized ticketing platform</strong> using React and Solidity, enabling secure on‑chain event ticket issuance.
                  </li>
                  <li>
                    Built a <strong>loan simulation tool</strong> for DeFi applications that improved engagement and increased loan adoption by 10%.
                  </li>
                  <li>
                    Created an internal frontend <strong>reporting system</strong> for Grab’s business team, integrating real‑time analytics to support decision‑making.
                  </li>
                  <li>
                    Participated in end‑to‑end maintenance from contract development and testing (<strong>Hardhat, Foundry</strong>) to frontend integration and deployment.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Blockchain Developer, Gnosis */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <div className="flex gap-2 items-center">
              <img
                src={gnosis}
                alt="Gnosis"
                className="w-[40px] rounded-full"
              />
              <h1 className="font-bold text-[16px]">Gnosis</h1>
            </div>
            <div className="ml-2 md:ml-12 space-y-2 border-l-2 border-green-500 pl-3">
              <div className="flex gap-2 justify-between text-[16px] text-teal-500 font-bold">
                <h1>Blockchain Developer, Gnosis</h1>
                <h1>2021/10 – 2023/04 • Berlin, Germany</h1>
              </div>
              <div>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>
                    Implemented key features such as <strong>multi‑signature wallets</strong>, <strong>token vesting</strong> mechanisms, and <strong>on‑chain governance</strong> modules.
                  </li>
                  <li>
                    Developed and maintained smart contracts for DeFi and NFT platforms on <strong>Ethereum</strong> and EVM‑compatible chains using <strong>Solidity</strong>, <strong>Hardhat</strong>, and <strong>Foundry</strong>.
                  </li>
                  <li>
                    Integrated Web3 features into apps with <strong>Ethers.js</strong>, <strong>Web3.js</strong>, and <strong>The Graph</strong>, collaborating closely with frontend and backend teams.
                  </li>
                  <li>
                    Explored emerging Web3 tools, experimenting with <strong>contract automation</strong>, <strong>gas optimization</strong>, and <strong>Layer 2</strong> deployments.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Full Stack Developer, Actindi Inc */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full bg-white">
                <img
                  src={actinidi}
                  alt="Actinidi Inc"
                  className="w-[40px]"
                />
              </div>
              <h1 className="font-bold text-[16px]">Actinidi Inc</h1>
            </div>
            <div className="ml-2 md:ml-12 space-y-2 border-l-2 border-blue-500 pl-3">
              <div className="flex gap-2 justify-between text-[16px] text-teal-500 font-bold">
                <h1>Full Stack Developer, Actindi Inc</h1>
                <h1>2019/08 – 2021/10 • Osaka, Japan</h1>
              </div>
              <div>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>
                    Architected a <strong>RESTful API</strong> in Node.js/Express for accounts, checkout, and shipping logistics.
                  </li>
                  <li>
                    Built a <strong>React + Next.js</strong> frontend with dynamic filtering, order tracking, and multi‑step forms.
                  </li>
                  <li>
                    Implemented <strong>Stripe</strong> for payments and subscriptions.
                  </li>
                  <li>
                    Managed uploads to <strong>AWS S3</strong> with signed URLs for product images and receipts.
                  </li>
                  <li>
                    Built dashboards using <strong>Recharts</strong> to visualize performance and revenue trends.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Frontend Developer, Actindi Inc */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full bg-white">
                <img
                  src={actinidi}
                  alt="Actinidi Inc"
                  className="w-[40px]"
                />
              </div>
              <h1 className="font-bold text-[16px]">Actinidi Inc</h1>
            </div>
            <div className="ml-2 md:ml-12 space-y-2 border-l-2 border-purple-500 pl-3">
              <div className="flex gap-2 justify-between text-[16px] text-teal-500 font-bold">
                <h1>Frontend Developer, Actindi Inc</h1>
                <h1>2018/12 – 2019/11 • Osaka, Japan</h1>
              </div>
              <div>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>
                    Improved UX and form logic, enhancing validation and input handling to reduce errors and streamline workflows.
                  </li>
                  <li>
                    Built interactive, data‑driven interfaces by integrating RESTful APIs across modular components.
                  </li>
                  <li>
                    Collaborated with backend engineers to define API contracts, resolve integration issues, and support continuous delivery.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Intern, Actindi Inc */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full bg-white">
                <img
                  src={actinidi}
                  alt="Actinidi Inc"
                  className="w-[40px]"
                />
              </div>
              <h1 className="font-bold text-[16px]">Actinidi Inc</h1>
            </div>
            <div className="ml-2 md:ml-12 space-y-2 border-l-2 border-yellow-500 pl-3">
              <div className="flex gap-2 justify-between text-[16px] text-teal-500 font-bold">
                <h1>Intern, Actindi Inc</h1>
                <h1>2018/04 – 2018/12 • Osaka, Japan</h1>
              </div>
              <div>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>
                    Built responsive web pages using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>.
                  </li>
                  <li>
                    Translated <strong>Figma</strong> designs into pixel‑perfect, mobile‑friendly layouts.
                  </li>
                  <li>
                    Gained experience with <strong>Agile</strong> methods, morning calls, teamwork, and daily collaboration.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
