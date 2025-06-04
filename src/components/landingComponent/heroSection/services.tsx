// import Image from "react/image";

import { Image } from "@mantine/core";

const Products = () => {
  const categories = [
    {
      name: "Nuts",
      image: "/images/svg/nuts.svg",
      products: [
        "Almonds",
        "Brazil Nuts",
        "Cashews",
        "Chestnuts",
        "Hazel Nuts (Filberts)",
        "Macadamia",
        "Peanuts",
      ],
    },
    {
      name: "Dried Fruits",
      image: "/images/svg/fruits.svg",
      products: [
        "Apple Rings",
        "Apricots (Turkish)",
        "Banana Chips",
        "Blue Berries",
        "Cherries",
        "Coconut Macaroons",
        "Cranberries",
      ],
    },
    {
      name: "Spices",
      image: "/images/svg/species.svg",
      products: [
        "Aniseed",
        "Annatto Seeds/Powder",
        "Bay Leaves/Seeds",
        "Black Pepper Seeds/Powder",
        "Cardamom Pods/Seeds",
        "Chamomile Flower",
        "Chillies (Arbol, Ancho)",
      ],
    },
    {
      name: "Seeds",
      image: "/images/svg/seeds.svg",
      products: [
        "Chia Seeds",
        "Flax Seed",
        "Pumpkin Seeds (Pepitas)",
        "Sesame Seeds (Natural and Hulled)",
        "Soy Beans",
        "Sun Flower Kernel Seeds",
      ],
    },
  ];
  return (
    <section>
      <div className="relative bg-black text-white py-[12em]">
        <div className="absolute inset-0">
          <Image
            src="/images/png/greenplant.png"
            alt="Farms background"
            layout="fill"
            objectFit="cover"
            className="opacity-25"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-goldColor font-br-bold text-lg">Our Products</h3>
          <h2 className="text-3xl font-bold mt-2">Some of our Products</h2>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="lg:w-[77%] mx-auto px-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 my-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={700}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>

              <div className="w-full md:w-1/2 flex justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <ul className="list-disc pl-5 text-textColor mt-3">
                    {category.products.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className="px-6 py-2 bg-buttonColor text-white font-br-bold rounded-md hover:bg-buttonColorGreenHoover hover:text-black transition self-end"
                >
                  See more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
