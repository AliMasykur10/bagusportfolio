import icon from "../../../assets/icon/Icon-webflow.svg";

export default function DescriptionWebflow() {
  return (
    <>
      <div className="description-webflow md:grid md:grid-cols-8 md:items-center bg-grey-light md:p-10 px-3 py-10 ">
        <img src={icon} alt="" className="md:mb-0 mb-10 " />
        <div className="first-webflow-comp md:col-span-5 md:mb-0 mb-8">
          <h2 className=" md:text-2xl text-xl mb-2">FREE Webflow Template</h2>
          <p>Check out the Webflow Template of this design</p>
        </div>
        <p className="underline underline-offset-4 md:mb-0 mb-8">Live Preveiw</p>
        <button className=" px-3 py-2 rounded bg-blue-button text-grey-light ">
          <p>Get Template</p>
        </button>
      </div>
    </>
  );
}
