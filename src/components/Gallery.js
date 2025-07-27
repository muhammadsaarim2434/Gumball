import GalleryCard from "./GalleryCard";

export default function Gallery() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="gallery_head">OUR WORK</p>
          <h1 className="gallery_head_one">
            Gumball <span>Feature Project</span>
          </h1>
        </div>
      </div>

      <div className="row">
        {Array.from({ length: 6 }).map((_, index) => (
          <GalleryCard key={index} />
        ))}
      </div>
    </div>
  );
}
