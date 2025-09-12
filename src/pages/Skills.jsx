import { FaGit, FaGithub } from "react-icons/fa";
import {
  SiTensorflow,
  SiRust,
  SiGo,
  SiHaskell,
  SiVuedotjs,
  SiNodedotjs,
  SiDjango,
  SiGraphql,
  // SiBlitz,
  SiSolidity,
  SiIpfs,
  SiSnowflake,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiApacheairflow,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  // SiD3dotjs,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";

const techSkills = [
  "AI Scripting / TensorFlow",
  "Rust",
  "Go (Golang)",
  "Haskell",
  "Vue.js",
  "Node.js",
  "Django",
  "GraphQL",
  "Blitz.js / Next.js",
  "Solidity / Smart Contracts",
  "IPFS / Decentralized Storage",
  "Snowflake",
  "Docker",
  "Kubernetes",
  "NGINX",
  "Apache Airflow",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "D3.js",
  "Prisma",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

const skills = [
  { icon: <SiTensorflow className="text-orange-500 w-8 h-8" />, name: "TensorFlow" },
  { icon: <SiRust className="text-orange-700 w-8 h-8" />, name: "Rust" },
  { icon: <SiGo className="text-sky-500 w-8 h-8" />, name: "Go" },
  { icon: <SiHaskell className="text-purple-600 w-8 h-8" />, name: "Haskell" },
  { icon: <SiVuedotjs className="text-green-500 w-8 h-8" />, name: "Vue.js" },
  { icon: <SiNodedotjs className="text-green-600 w-8 h-8" />, name: "Node.js" },
  { icon: <SiDjango className="text-green-700 w-8 h-8" />, name: "Django" },
  { icon: <SiGraphql className="text-pink-500 w-8 h-8" />, name: "GraphQL" },
  // { icon: <SiBlitz className="text-yellow-500 w-8 h-8" />, name: "Blitz.js" },
  { icon: <RiNextjsFill className="text-black w-8 h-8 dark:text-white" />, name: "Next.js" },
  { icon: <SiSolidity className="text-gray-600 w-8 h-8 dark:text-gray-300" />, name: "Solidity" },
  { icon: <SiIpfs className="text-teal-500 w-8 h-8" />, name: "IPFS" },
  { icon: <SiSnowflake className="text-blue-500 w-8 h-8" />, name: "Snowflake" },
  { icon: <SiDocker className="text-blue-600 w-8 h-8" />, name: "Docker" },
  { icon: <SiKubernetes className="text-blue-500 w-8 h-8" />, name: "Kubernetes" },
  { icon: <SiNginx className="text-green-600 w-8 h-8" />, name: "NGINX" },
  { icon: <SiApacheairflow className="text-cyan-600 w-8 h-8" />, name: "Apache Airflow" },
  { icon: <SiMysql className="text-orange-500 w-8 h-8" />, name: "MySQL" },
  { icon: <SiMongodb className="text-green-400 w-8 h-8" />, name: "MongoDB" },
  { icon: <SiPostgresql className="text-blue-600 w-8 h-8" />, name: "PostgreSQL" },
  // { icon: <SiD3dotjs className="text-orange-600 w-8 h-8" />, name: "D3.js" },
  { icon: <SiPrisma className="text-gray-700 w-8 h-8 dark:text-gray-300" />, name: "Prisma" },
  { icon: <SiTailwindcss className="text-cyan-500 w-8 h-8" />, name: "Tailwind CSS" },
  { icon: <FaGit className="text-red-500 w-8 h-8" />, name: "Git" },
  { icon: <FaGithub className="w-6 h-6 text-black dark:text-white" />, name: "GitHub" },
];

const Skills = () => {
  const duplicatedSkills = [...skills, ...skills, ...skills]; // Duplicating skills to ensure continuous scrolling

  return (
    <section className="px-3 lg:px-0 pt-32" id="skills">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-5 text-xl font-bold text-yellow-500 dark:text-yellow-600 text-center">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2 text-sm mb-4">
          {techSkills.map((item, index) => (
            <span
              key={item + index}
              className="rounded-md px-2 py-1 bg-purple-800 dark:bg-purple-950 hover:bg-purple-800 text-gray-200 text-semibold"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="py-2 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
          <motion.div
            className="flex gap-x-8 py-2"
            animate={{ x: [0, -1000] }} // Adjust x values based on your content width
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-2 items-center justify-center">
                <span>{skill.icon}</span>
                <span className={`dark:text-gray-400 text-xs font-semibold`}>
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
