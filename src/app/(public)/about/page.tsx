import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vodiy Parfum | About",
  description: "You can find information about our website",
};

const AboutPage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          With us you can get your quality products quickly and easily
        </h1>
        <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          With us you can get your quality products
          <br />
          quickly and easily
        </h2>
        <div
          className="flex pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3"
          style={{ gap: "20px", paddingBlock: "50px" }}>
          <div className="ktq4">
            <h3 className="pt-3 font-semibold text-lg">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="pt-2 value-text text-md  fkrr1">
              Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
              Nullam vehicula, libero at euismod tristique, neque ligula
              faucibus urna, quis ultricies massa enim in nunc. Vivamus
              ultricies, quam ut rutrum blandit, turpis massa ornare velit, in
              sodales tellus ex nec odio.
            </p>
          </div>
          <div className="ktq4">
            <h3 className="pt-3 font-semibold text-lg">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="pt-2 value-text text-md  fkrr1">
              Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
              Nullam vehicula, libero at euismod tristique, neque ligula
              faucibus urna, quis ultricies massa enim in nunc. Vivamus
              ultricies, quam ut rutrum blandit, turpis massa ornare velit, in
              sodales tellus ex nec odio.
            </p>
          </div>
        </div>
        {/* <div className="ml-6 text-center">
          <a
            className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
            href="/">
            <div className="flex text-lg">
              <span className="justify-center">View All Products</span>
            </div>
          </a>
          <a
            className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
            href="/">
            <div className="flex text-lg">
              <span className="justify-center">Purchase</span>
            </div>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default AboutPage;
