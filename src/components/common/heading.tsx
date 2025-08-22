type HeadingProps = {
  heading: string;
};
const Heading = ({ heading }: HeadingProps) => {
  return <div className="font-amped text-2xl mb-2">{heading}</div>;
};

export default Heading;
