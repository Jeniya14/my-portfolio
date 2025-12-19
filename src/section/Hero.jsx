import { useState } from "react";
const Hero = () => {
   const [copied, setCopied] = useState(false);
   const handleCopy = () => {
    navigator.clipboard.writeText("yourmail@gmail.com");
    setCopied(true);

    // reset after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
     <section className="pt-10 sm:py-30 text-gray-300 flex items-center justify-center px-5 sm:px-8 md:px-20 " id="home">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16">
        {/* Left Side */}
        <div className="space-y-2 ">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Jeniya
          </h1>
          <h2 className="text-2xl font-medium sm:text-gray-400 text-white">
            Frontend Developer
          </h2>
          <p className="sm:text-gray-400 text-gray-200  leading-relaxed max-w-md text-md sm:text-lg py-4">
            Frontend Developer crafting clean, responsive, and user-focused web experiences
          </p>
          <div className="flex">
            <button onClick={handleCopy} className={`font-semibold py-2 px-4 border rounded-full transition-all duration-300 w-[150px] text-center  ${copied ? "sm:bg-green-600 sm:border-green-600" : "bg-transparent hover:border-navbtn text-white hover:bg-navbtn"}`}>
                    {copied ? "Copied!" : "Copy my mail"}
           </button>
           <div className="flex gap-5 items-center ps-3">
            <a href='https://github.com/Jeniya14'  target='_blank' rel='noreferrer'>
                    <img src="/assets/github.svg" alt="github" className="w-6" />
            </a>
            <a href='https://www.linkedin.com/in/jeniyaselvam/'  target='_blank' rel='noreferrer'>
                    <img src="/assets/lin.png" alt="Linkedin" className="w-6" />
            </a>
           </div>
          </div>
          
        </div>

        {/* Right Side */}
        <div className="space-y-4 sm:text-gray-400 text-gray-200 ">
          <div className="text-white text-2xl font-bold sm:hidden block"> ABOUT ME</div>
          <div  className="text-[17px] sm:text-lg space-y-4">
            <p >
            I enjoy transforming ideas into smooth, user-friendly digital experiences. With a solid foundation in HTML, CSS, JavaScript, and React, I build websites that are both functional and aesthetically pleasing. I love working with modern tools like Three.js and 3D web development.
          </p>
          <p>
            As a perfectionist, I pay attention to the smallest details to ensure everything feels polished and consistent. I’ve developed projects like e-commerce platforms, food delivery apps, and dynamic UI components. I also have freelancing experience in designing and developing
          </p>
          <p>
            I’m constantly learning and improving, expanding my skills to stay updated in  and <i>Every day, I aim to become a better developer and create work I can be proud of</i>.
          </p>
          </div>
          
            
          
        </div>
      </div>
    </section>
  )
}

export default Hero