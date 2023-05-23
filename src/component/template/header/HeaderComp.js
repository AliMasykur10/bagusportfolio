import Logo from "../../atoms/logo/logo";

export default function Header() {
  return (
    <>
      <header className=" w-full pl-5 py-6 bg-grey-light">
        <div className="Mainlogo">
          <Logo />
        </div>
      </header>
    </>
  );
}
