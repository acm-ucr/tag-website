import { IMAGES } from "@/data/gallery";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="w-[90%] h-full flex flex-col my-3 items-center mx-auto">
      {Object.entries(IMAGES).map(([year, images]) => (
        <div key={year} className="my-5 w-full">
          <h2 className="text-2xl font-bold mb-4">{year}</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="flex justify-center items-center overflow-hidden"
                style={{ height: "300px", width: "100%" }}
              >
                <Image
                  width={500}
                  height={500}
                  src={img.image}
                  alt={`Gallery image ${index + 1} of ${year}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
