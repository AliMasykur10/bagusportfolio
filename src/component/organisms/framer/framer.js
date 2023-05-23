import icon from "../../../assets/icon/Icon-framer.svg";

export default function Framer() {
  return (
    <>
      <div className="webflow w-full md:px-32 px-3 pb-28 ">
        <h1 className="md:text-4xl text-2xl mb-12 ">Get FREE Framer Template</h1>
        <div className="description-webflow md:grid md:grid-cols-8 md:items-center bg-grey-light md:p-10 px-3 py-10">
          <img src={icon} alt="" className="md:mb-0 mb-10" />
          <div className="first-webflow-comp md:col-span-5 md:mb-0 mb-8">
            <h2 className=" md:text-2xl md:mb-2">FREE Framer Template</h2>
            <p>Check out the Framer Template of this design</p>
          </div>
          <p className="underline md:mb-0 mb-8">Live Preveiw</p>
          <button className=" px-3 py-2 rounded bg-black-background text-grey-light ">
            <p>Get Template</p>
          </button>
        </div>
      </div>
    </>
  );
}
