import Framer from "../../organisms/framer/framer";
import GetStarted from "../../organisms/getstarted/getstarted";
import Greeting from "../../organisms/greeting/greeting";
import Hero from "../../organisms/hero/Hero";
import License from "../../organisms/license/license";
import Webflow from "../../organisms/webflow/webflow";

export default function Container() {
  return (
    <>
      <Hero />
      <Greeting />
      <GetStarted />
      <Webflow />
      <Framer />
      <License />
    </>
  );
}
