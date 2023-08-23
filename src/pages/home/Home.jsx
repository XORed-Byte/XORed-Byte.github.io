import { RouteWrapper } from "../../lib";
import "./Home.css";

const Home = () => {
  const Component = (
    <>
      <div id="home">
        <div>
          <h2>Welcome to my website!</h2>
          <div>
            <h3>About</h3>
            <p>
              My name is David and I am a hobbyist reverse engineer and software
              developer from Sweden with a keen interest for the inner workings
              of the Windows kernel, binary exploitation and competing in CTFs.
              Professionally I run an IT company based in Finland which focuses
              on creating custom solutions for industrial companies. Alas, my
              heart still belongs to cyber security and I hope to be able to
              branch into said field in the foreseeable future.
            </p>
            <br />
            <br /> Some other activities I enjoy:
            <ul>
              <li>Hiking</li>
              <li>Tall ship sailing</li>
              <li>Lifting weights</li>
              <li>Driving</li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Skills 😎</h2>
          <div>
            <h3>Computer Languages & Frameworks</h3>
            <ul>
              <li>C/C++</li>
              <li>x86-64 ASM</li>
              <li>Python</li>
              <li>Javascript/Typescript</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>PHP</li>
              <li>SQL</li>
              <li>CSS/SCSS</li>
            </ul>
            <br />
            <h3>Technologies & Programs</h3>
            <ul>
              <li>IDA Pro</li>
              <li>GDB, x64dbg, WinDBG</li>
              <li>Burpsuite</li>
              <li>Windows - User</li>
              <li>Linux - User & Server</li>
            </ul>
            <br />
            <h3>Human Languages</h3>
            <ul>
              <li>Swedish - Fluent</li>
              <li>English - Fluent</li>
              <li>Finnish - Limited</li>
            </ul>
          </div>
        </div>

        <div>
          <h2>What I am currently working on</h2>
          <div>
            <p>
              Besides my normal job I also spend a substantial amount of my
              spare time doing research and working away at my own projects. As
              of writing this I am currently working on an opcode parser written
              in C++, named
              <span className="detailed"> OPalescent</span>, with the goal of
              supporting both x86 and x64 with the ability to parse everything
              from 3-byte opcodes, SSE3, ModR/M, prefixes etc. a somewhat
              complete and ready to use opcode parser so to speak. As it
              currently stands I am almost done with covering x86 and I hope to
              soon be able to tackle the bigger brother of his.
              <br />
              <br />
              The main reason for this project is to create an opcode parser
              that is light weight and only a few files big as opposed to
              projects such as Capstone Engine. Further on, I plan on using this
              for a binary obfuscator that I started working on only to realize
              the immense problem not having access to proper opcode parsing
              poses. My passion for optimized and effective code drove me to
              start working on my own opcode parser and now here we are, knees
              deep in a somewhat complex project.
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return RouteWrapper({ Component: Component });
};

export default Home;
