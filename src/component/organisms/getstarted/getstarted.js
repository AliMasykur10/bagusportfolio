import DescriptionAssets from "../../molecules/descriptionAssets/descriptionAssest";

export default function GetStarted() {
  return (
    <>
      <div className="get-started w-full md:px-32 px-3 md:py-24 py-16 ">
        <h1 className=" md:text-4xl text-2xl mb-8 ">Geting Started</h1>
        <div className="assets flex bg-grey-light md:px-8 md:py-10">
          <div className="icon-assets w-12 "></div>
          <DescriptionAssets />
        </div>
      </div>
    </>
  );
}
