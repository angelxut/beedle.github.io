import React from "react";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container } from "components/misc/Layouts";
import BackgroundAsImage from "./components/hero/BackgroundAsImage";
import VerticalWithAlternateImageAndText from "./components/features/VerticalWithAlternateImageAndText";
import ThreeColSlider from "./components/cards/ThreeColSlider";
import TabCardGrid from "./components/cards/TabCardGrid";
import TwoColContactUsWithIllustrationFullForm from "./components/forms/TwoColContactUsWithIllustrationFullForm";
import SimpleFiveColumn from "./components/footers/SimpleFiveColumn";

export default ({
}) => {
  return (
    <AnimationRevealPage disabled>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
          <BackgroundAsImage/>
          <VerticalWithAlternateImageAndText/>
          <ThreeColSlider/>
          <TabCardGrid/>
          <TwoColContactUsWithIllustrationFullForm/>
          <SimpleFiveColumn/>
      </Container>
    </AnimationRevealPage>
  );
};
