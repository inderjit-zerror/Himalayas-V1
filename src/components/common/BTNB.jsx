import { MdKeyboardArrowRight } from "react-icons/md";

const BTNB = ({ txt }) => {
  return (
    <div className="inline-flex justify-center max-sm:w-full items-center uppercase gap-2 bg-[black] px-20 py-2 btn-text text-white transition-colors hover:bg-[#db2b22]">
      {txt}
      <MdKeyboardArrowRight className="text-white  scale-[1.5] translate-y-[-7%]" />
    </div>
  );
};

export default BTNB;
