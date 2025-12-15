import "./Gallery.css";

import img1 from "../../assets/gallery/img1.jpeg";
import img2 from "../../assets/gallery/img2.jpeg";
import img3 from "../../assets/gallery/img3.jpeg";
import img4 from "../../assets/gallery/img4.jpeg";
import img5 from "../../assets/gallery/img5.jpeg";
import img6 from "../../assets/gallery/img6.jpeg";

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <p>Explore the gothic elegance and timeless atmosphere of Hotel Dorian.</p>
      </div>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
