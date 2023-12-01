import styles from "@/styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      {/*<img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />*/}
      <p className="font-bold text-[20px] text-white">{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
    {/*<h1 className="mt-[2.5px] font-normal text-[20px] leading-[25px] text-white">
      {name}
  </h1>*/}
    {/*<p className="flex-1 mt-[10px] font-normal text-[18px] text-[#B0B0B0] leading-[30px]">
      {job}
</p>*/}
  </div>
);

export default StartSteps;
