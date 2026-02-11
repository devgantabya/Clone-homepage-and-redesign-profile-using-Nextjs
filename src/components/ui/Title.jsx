const Title = ({ children, as = "h2" }) => {
  const Tag = as;

  return (
    <Tag className="text-[#223614] font-medium text-4xl sm:text-5xl lg:text-6xl leading-tight">
      {children}
    </Tag>
  );
};

export default Title;
