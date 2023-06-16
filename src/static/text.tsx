type text = {
  title: string;
  par: string;
};

const Text: React.FC<text> = ({ title, par }) => {
  return (
    <div className="w-40 my-3">
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-[#888888] text-xs mt-1">{par}</div>
    </div>
  );
};

export default Text;
