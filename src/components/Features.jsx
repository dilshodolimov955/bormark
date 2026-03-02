import { useState } from "react";

export default function Features() {
  const [active, setActive] = useState("simple");

  return (
    <section className="mt-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="text-gray-400 mt-4">
          Our aim is to make it quick and easy for you to access your favourite
          websites.
        </p>
        {}
        <div className="flex justify-center gap-10 mt-10 border-b">
          <button
            onClick={() => setActive("simple")}
            className={`pb-4 ${active === "simple" ? "border-b-4 border-red-500" : "text-gray-500"}`}
          >
            Simple Bookmarking
          </button>

          <button
            onClick={() => setActive("speedy")}
            className={`pb-4 ${active === "speedy" ? "border-b-4 border-red-500" : "text-gray-500"}`}
          >
            Speedy Searching
          </button>

          <button
            onClick={() => setActive("easy")}
            className={`pb-4 ${active === "easy" ? "border-b-4 border-red-500" : "text-gray-500"}`}
          >
            Easy Sharing
          </button>
        </div>
      </div>

      {}
      <div className="max-w-6xl mx-auto mt-20 flex flex-col lg:flex-row items-center px-6 gap-10">
        {}
        {active === "simple" && (
          <>
            <div className="flex-1">
              <img
                src="https://famous-pithivier-11c029.netlify.app/img/slide/simple-bokmarking.svg"
                alt=""
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Bookmark in one click
              </h3>
              <p className="text-gray-400 mb-6">
                Organize your bookmarks however you like.
              </p>
            </div>
          </>
        )}
        {}
        {active === "speedy" && (
          <>
            <div className="flex-1">
              <img
                src="https://famous-pithivier-11c029.netlify.app/img/slide/speedy-searching.svg"
                alt=""
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Intelligent search
              </h3>
              <p className="text-gray-400 mb-6">
                Our powerful search feature will help you find saved sites in no time.
              </p>
            </div>
          </>
        )}
        {}
        {active === "easy" && (
          <>
            <div className="flex-1">
              <img
                src="https://famous-pithivier-11c029.netlify.app/img/slide/easy-sharing.svg"
                alt=""
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Share your bookmarks
              </h3>
              <p className="text-gray-400 mb-6">
                Easily share your bookmarks and collections with others.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}