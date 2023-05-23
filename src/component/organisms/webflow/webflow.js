import icon from "../../../assets/icon/Icon.svg";

export default function Webflow() {
  return (
    <>
      <div className="webflow w-full md:px-32 px-3 pb-12 ">
        <h1 className="md:text-4xl text-2xl mb-12 ">Get FREE Webflow Template</h1>
        <div className="description-webflow md:grid md:grid-cols-8 md:items-center bg-grey-light p-10">
          <img src={icon} alt="" />
          <div className="first-webflow-comp md:col-span-5">
            <h2 className=" md:text-2xl md:mb-2">FREE Webflow Template</h2>
            <p>Check out the Webflow Template of this design</p>
          </div>
          <p className="underline">Live Preveiw</p>
          <button className=" md:w-36 md:h-12 bg-blue-button text-grey-light ">
            <p>Get Template</p>
          </button>
        </div>
      </div>
    </>
  );
}
