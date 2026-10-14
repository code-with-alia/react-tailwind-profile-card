import portfolioImg from "../assets/portfolioimg.jpg";

const Layout = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-sky-100 via-white to-indigo-100 flex items-center justify-center p-5">

      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Profile Image */}
        <div className="rounded-full p-1 border-4 border-sky-200 shadow-md">
          <img
            src={portfolioImg}
            alt="Alia Liaqat"
            className="w-36 h-36 rounded-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="mt-5 text-2xl font-bold text-gray-800">
          Alia Liaqat
        </h1>

        {/* Role */}
        <p className="mt-1 text-sky-600 font-semibold">
          Web UI Developer
        </p>

        {/* Description */}
        <p className="mt-4 text-sm leading-6 text-gray-500">
          I am a passionate Web UI Developer skilled in HTML, CSS,
          JavaScript, Bootstrap, Tailwind CSS, and React. I enjoy
          creating responsive and user-friendly websites.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-medium">
            HTML & CSS
          </span>

          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
            JavaScript
          </span>

          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
            React
          </span>
        </div>

        {/* Buttons */}
        <div className="flex w-full gap-3 mt-7">
          <a
            href="https://github.com/code-with-alia"
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-sky-500 text-white py-2.5 rounded-lg font-medium transition duration-300 hover:bg-sky-600 hover:shadow-md"
          >
            Follow
          </a>

          <a
            href="https://www.linkedin.com/in/alia-liaqat-7a02a6370/"
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center border border-sky-500 text-sky-600 py-2.5 rounded-lg font-medium transition duration-300 hover:bg-sky-500 hover:text-white"
          >
            Message
          </a>
        </div>
       
       <div className="mt-3 w-full flex gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=touseefliaqatali14@gmail.com&su=Contact%20from%20My%20Portfolio"
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-white text-green-700 py-2.5  border-green-800 border   rounded-lg font-bold transition duration-300 hover:bg-green-800 hover:text-white hover:shadow-md"
          >
            Email me
          </a>

        <a
            href="https://github.com/code-with-alia?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-blue-200 text-blue-700 py-2.5 rounded-lg font-bold transition duration-300 hover:bg-blue-400 hover:text-white hover:shadow-md"
          >
            View my Projects
          </a>
         
       
       </div>

        {/* Footer */}
        <p className="mt-6 text-xs text-gray-400">
          Building creative web experiences ✨
        </p>

      </div>
    </section>
  );
};

export default Layout;