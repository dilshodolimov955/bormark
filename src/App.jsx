import "./App.css";
import Features from "./components/Features";
import Download from "./components/Download";

function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      {}
      <nav className="mt-10 flex items-center justify-between max-w-7xl mx-auto">
        <div className="cursor-pointer">
          <img
            src="https://famous-pithivier-11c029.netlify.app/img/logo.svg"
            alt="Bookmark Logo"
          />
        </div>

        <ul className="hidden md:flex items-center text-[15px] uppercase tracking-widest text-slate-600">
          <li className="mx-6 hover:text-red-400 cursor-pointer">
            Features
          </li>
          <li className="mx-6 hover:text-red-400 cursor-pointer">
            Pricing
          </li>
          <li className="mx-6 hover:text-red-400 cursor-pointer">
            Contact
          </li>
          <li>
            <button className="bg-[#fa5959] text-white px-8 py-2 rounded-lg border-2 border-[#fa5959] hover:bg-white hover:text-[#fa5959]">
              Login
            </button>
          </li>
        </ul>
      </nav>
      {}
      <section className="relative mt-20 pb-20">
        <div className="container mx-auto flex flex-row px-32">
          <div className="flex flex-col flex-1 items-center text-center mt-16">
            <h1 className="text-5xl font-medium mb-6">
              A Simple Bookmark <br /> Manager
            </h1>
            <p className="text-gray-400 text-lg mb-8">A clean and simple interface to organize your favourite websites.Open a new browser tab and see your sites load instantly.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#5267df] text-white px-6 py-3 rounded border-2 border-[#5267df] hover:bg-white hover:text-[#5267df]">     Get it on Chrome   </button>
              <button className="bg-gray-100 px-6 py-3 rounded hover:border-2">   Get it on Firefox </button>
            </div>
          </div>
          <div className="flex justify-center flex-1 w-full">
            <img
              src="https://famous-pithivier-11c029.netlify.app/img/tablet.svg"
              alt="Boormark logo"
              className="w-full max-w-xl"
            />
          </div>
        </div>
      </section>
      {}
      <Features />
      <Download />
    </div>
  );
}

export default App;