import HeadTitle from "../../component/template/headTitle/HeadTitle";

export default function HomePage() {
  return (
    <>
      <HeadTitle title="Bagus Portfolio" />

      <div className="bg-blue-500 text-white w-24 rounded-lg text-center py-3 m-3 md:w-60">
        <h1 className="text-4xl">Halo, Dunia!</h1>
      </div>
    </>
  );
}
