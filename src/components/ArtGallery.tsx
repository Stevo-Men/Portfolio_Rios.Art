import Image from 'next/image';

const artworks = [
    { src: '/media/image/GRS_Portfolio/DMV_64.png', alt: 'Artwork DMV_64' },
    { src: '/media/image/GRS_Portfolio/DMV_65.png', alt: 'Artwork DMV_65' },
    { src: '/media/image/GRS_Portfolio/DMV_67.jpg', alt: 'Artwork DMV_67' },
    { src: '/media/image/GRS_Portfolio/DMV_68.png', alt: 'Artwork DMV_68' },
    { src: '/media/image/GRS_Portfolio/DMV_69.png', alt: 'Artwork DMV_69' },
    { src: '/media/image/GRS_Portfolio/DMV_70.png', alt: 'Artwork DMV_70' },
    { src: '/media/image/GRS_Portfolio/DMV_71.png', alt: 'Artwork DMV_71' }
];

export default function ArtGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {artworks.map((art, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={art.src}
            alt={art.alt}
            width={800}
            height={600}
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}
