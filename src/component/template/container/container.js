import GetStarted from "../../organisms/getstarted/getstarted";
import Greeting from "../../organisms/greeting/greeting";
import Hero from "../../organisms/hero/Hero";
import Webflow from "../../organisms/webflow/webflow";

export default function Container() {
  return (
    <>
      <Hero />
      <Greeting />
      <GetStarted />
      <Webflow />
    </>
  );
}
