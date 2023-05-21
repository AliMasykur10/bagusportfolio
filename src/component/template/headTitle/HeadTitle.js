import { Helmet } from "react-helmet";

export default function HeadTitle({ title }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </>
  );
}
