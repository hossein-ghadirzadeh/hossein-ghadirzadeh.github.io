import Image from "next/image";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import avatar from "../public/avatar.jpg";

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <div className="mx-auto p-10 py-10">
          <div className="flex flex-col-reverse gap-10 lg:flex-row">
            <div className="flex-grow max-lg:text-center lg:w-1/6">
              <h2 className="text-5xl py-2 max-md:text-3xl text-teal-600">
                Hossein Ghadirzadeh
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl">
                Full-stack developer.
              </h3>
              <p className="text-md py-5 text-gray-800 whitespace-normal">
                Welcome to my corner of the web! With over{" "}
                <span className="font-burtons">7</span> years of experience, I'm
                a seasoned full-stack developer with a passion for crafting
                dynamic and interactive web applications. My toolkit includes
                JavaScript, TypeScript, React.js, Next.js, Node.js, and Nest.js.
                Whether it's building robust backend services or crafting
                seamless user interfaces, I thrive on turning ideas into
                reality.
              </p>

              <div className="py-5">
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-6 py-2 border-none rounded-md"
                  href="https://www.canva.com/design/DAFmudAVFgg/VESPyUwceWuteN2NKz5Rfg/view?website#2"
                  target="_blank"
                >
                  Resume
                </a>
              </div>

              <p className="text-md py-5 text-gray-800 whitespace-normal">
                <span className="font-burtons">Join me</span> down below and
                let's <span className="font-burtons">get cracking</span> on your
                next project!
              </p>

              <div className="text-5xl flex justify-center lg:justify-start gap-16 max-lg:gap-6 py-3 text-gray-600">
                <a
                  href="https://www.linkedin.com/in/hossein-ghadirzadeh"
                  target="_blank"
                >
                  <AiOutlineLinkedin />
                </a>
                <a href="mailto:hossein.ghadirzadeh@gmail.com">
                  <HiOutlineMail />
                </a>
                <a href="tel:+971527809028">
                  <FiPhoneCall />
                </a>
                <a
                  href="https://github.com/hossein-ghadirzadeh"
                  target="_blank"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
            <div className="flex-grow">
              <div className="mx-auto rounded-full w-40 h-40 relative overflow-hidden lg:h-96 lg:w-96">
                <Image src={avatar} layout="fill" objectFit="cover" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
