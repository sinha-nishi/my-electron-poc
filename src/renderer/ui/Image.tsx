import React from "react";

interface ImgProps {
  src: string;
  alt?: string;
}

const Img: React.FC<ImgProps> = ({ src, alt = "" }) => (
  <div
    className="img-wrapper"
    aria-label={alt}
    role="img"
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "inherit",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `linear-gradient(180deg,#99b6ff33,#6f85ff22 60%,#00000055), url(${src}) center/cover no-repeat`,
        filter: "saturate(1.05)",
      }}
    />
  </div>
);

export default Img;
