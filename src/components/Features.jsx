export default function Features() {
  return (
    <section className="mt-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="text-gray-400 mt-4">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        {}
        <div className="flex justify-center gap-10 mt-10 border-b">
          <button className="pb-4 border-b-4 border-red-500">  Simple Bookmarking</button>
          <button className="pb-4 text-gray-500">  Speedy Searching</button>
          <button className="pb-4 text-gray-500">   Easy Sharing </button>
        </div>
      </div>
      {}
      <div className="max-w-6xl mx-auto mt-20 flex flex-col lg:flex-row items-center px-6 gap-10">
        <div className="flex-1">
          <img
            src="https://famous-pithivier-11c029.netlify.app/img/tablet.svg"
            alt=""
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl font-bold mb-4">    Bookmark in one click </h3>
          <p className="text-gray-400 mb-6">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <button className="bg-[#5267df] text-white px-6 py-2 rounded">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}