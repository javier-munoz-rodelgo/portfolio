"use client";
import Image from "next/image";

interface Item {
  text: string;
  logo: string;
}

interface Tecnology {
  title: string;
  items: Item[];
}

export default function Technologies({ dict }: { dict: any }) {
  return (
    <section
      id="technologies"
      className="min-h-dvh flex flex-col justify-center items-center p-6 py-12 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
          {dict.title}
        </h2>

        <p className="mb-6" dangerouslySetInnerHTML={{ __html: dict.p1 }}></p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {dict.technologies.map((tecnology: Tecnology, index: number) => (
            <div className="" key={index}>
              <h3 className="text-2xl font-bold mb-6 text-gray-600">
                {tecnology.title}
              </h3>
              <ul className="grid grid-cols-3 gap-4">
                {tecnology.items.map((item: Item, index: number) => (
                  <li
                    className="flex flex-col items-center gap-1 p-1"
                    key={index}
                  >
                    <Image
                      src={item.logo}
                      alt={item.text}
                      width={50}
                      height={50}
                      style={{ height: "50px" }}
                    />
                    <span className="text-xs">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
