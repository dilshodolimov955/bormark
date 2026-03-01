export default function Download() {
  return (
    <section className="mt-32 mb-20 text-center px-6">
      <h2 className="text-3xl font-bold">
        Download the extension
      </h2>

      <p className="text-gray-400 mt-4">Weve got more browsers in the pipeline. Please do let us know if   you’ve got a favourite you’d like us to prioritize. </p>

      <div className="flex flex-col md:flex-row justify-center gap-10 mt-16">
        {}
        <div className="shadow-lg p-8 rounded-lg w-72">
          <img
            src="https://famous-pithivier-11c029.netlify.app/img/browser/chroome.svg"
            alt=""
            className="mx-auto mb-6"
          />
          <h4 className="font-bold">Add to Chrome</h4>
          <p className="text-gray-400 text-sm mb-6">   Minimum version 62 </p>
          <button className="bg-[#5267df] text-white px-6 py-2 rounded w-full">  Add & Install Extension</button>
        </div>
        {}
        <div className="shadow-lg p-8 rounded-lg w-72 md:mt-10">
          <img
            src="https://famous-pithivier-11c029.netlify.app/img/browser/firefox.svg"
            alt=""
            className="mx-auto mb-6"
          />
          <h4 className="font-bold">Add to Firefox</h4>
          <p className="text-gray-400 text-sm mb-6">Minimum version 55</p>
          <button className="bg-[#5267df] text-white px-6 py-2 rounded w-full"> Add & Install Extension </button>
        </div>
        {}
        <div className="shadow-lg p-8 rounded-lg w-72 md:mt-20">
          <img
            src="https://famous-pithivier-11c029.netlify.app/img/browser/opera.svg"
            alt=""
            className="mx-auto mb-6"
          />
          <h4 className="font-bold">Add to Opera</h4>
          <p className="text-gray-400 text-sm mb-6"> Minimum version 46</p>
          <button className="bg-[#5267df] text-white px-6 py-2 rounded w-full"> Add & Install Extension</button>
        </div>
      </div>
    </section>
  );
}