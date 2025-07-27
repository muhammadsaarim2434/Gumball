import Image from "next/image";

export default function GalleryCard() {
  return (
    <div className="col-lg-4 col-12">
      <div className="card card-radius dark_bg">
        <div className="dark_bg" style={{ position: "relative" }}>
          <Image src="/Card.png" className="img-fluid" alt="card" width={500} height={300} />
          <div>
            <div className="development rounded-pill px-3 py-1">Development</div>
          </div>
          <div
            className="d-flex justify-content-center align-item-center gap-2 m-2"
            style={{ position: "absolute", left: 0, bottom: 0 }}
          >
            <div className="circle"></div>
            <div>
              <button className="btn text-black font_sb button_cm rounded-pill px-4 py-2" type="submit">
                Beradrome
              </button>
            </div>
          </div>
        </div>
        <div className="card-body card-radius dark_bg">
          <p style={{ color: "#fff" }}>
            We're eliminating the friction and bias of traditional financing,{" "}
            <span style={{ color: "#84889A" }}>
              connecting business builders to quick, easy capital, and helping small to mid-size
              businesses build something bigger.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
