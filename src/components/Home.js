import Image from "next/image";

export default function HomeSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center my-5" style={{ position: "relative" }}>
            <p className="font_me heading_color">Web3 dev studio</p>
            <h1 className="font_lg text-white">
              You <span className="fw-normal">Think</span> it{" "}
              <span className="divider"> | </span>
              <br /> We Create it
            </h1>
            <p className="font_mee heading_color">
              We're innovators all about DeFi, pushing blockchain to its limits. We're a lab, a
              think tank, and a playground for fresh ideas!
            </p>
            <button className="btn text-black font_sb button_cm rounded-pill px-5 py-2 my-4" type="submit">
              Start Project
            </button>
          </div>
          <div
            className="hover_img"
            style={{
              position: "absolute",
              top: "30%",
              left: "60%",
            }}
          >
            <Image src="/logotypeimg.png" alt="Logo" className="img-fluid" width={400} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
