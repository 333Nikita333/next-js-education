import { FC } from "react";

type headingProps = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
};

const Heading: FC<headingProps> = ({ tag, text }) => {
  const Tag = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default Heading;
