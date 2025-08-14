import Image from "next/image";

function Card({
  title,
  img,
}: {
  title: string;
  img?: string;
}) {
  return (
    <div className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Image container must be relative for fill to work */}
      <div className="relative h-40 w-full bg-neutral-100">
        <Image
          src={img ?? "/fallback.jpg"} // fallback if no img
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
      </div>
    </div>
  );
}

export default function NewProductsGrid() {
  const items = [
    {
      title: "Knotless Braids",
      img: "/headerImage.JPG",
    },
    {
      title: "Silk Press",
      img: "/headerImage1.JPG",
    },
    {
      title: "Weave Install",
      img: "/headerImage2.JPG",
    },
    {
      title: "Color & Tone",
      img: "/headerImage3.JPG",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((it) => (
        <Card
          key={it.title}
          title={it.title}
          img={it.img}
        />
      ))}
    </div>
  );
}
