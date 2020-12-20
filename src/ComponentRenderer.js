import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"

import BackgroundAsImageHero from "components/hero/BackgroundAsImage.js";

import VerticalWithAlternateImageAndTextFeatures from "components/features/VerticalWithAlternateImageAndText.js";

import SliderCards from "components/cards/ThreeColSlider.js";
import TabGridCards from "components/cards/TabCardGrid.js";

import TwoColContactUsFullForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";

import SimpleFiveColumnFooter from "components/footers/SimpleFiveColumn.js";

export const components = {
  landingPages: {
  },

  innerPages: {
  },

  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        BackgroundAsImage: {
          name: "With Background Image",
          component: BackgroundAsImageHero,
          url: "/components/blocks/Hero/BackgroundAsImage",
        }
      }
    },
    Pricing: {
      type: "Pricing Section",
      elements: {
      }
    },
    Features: {
      type: "Features Section",
      elements: {
        VerticalWithAlternateImageAndText: {
          name: "Vertical Feature Cards With Alternate Image and Text",
          component: VerticalWithAlternateImageAndTextFeatures,
          url: "/components/blocks/Features/VerticalWithAlternateImageAndText",
        },
      }
    },

    Cards: {
      type: "Cards",
      elements: {
        Slider: {
          name: "Three Column Slider",
          component: SliderCards,
          url: "/components/blocks/Cards/Slider",
        },
        TabGrid: {
          name: "Tab Card Grid With Tab Switcher",
          component: TabGridCards,
          url: "/components/blocks/Cards/TabGrid",
        }
      }
    },

    FAQS: {
    },

    Form: {
      type: "Forms Section",
      elements: {
        TwoColContactUsFull: {
          name: "Two Column Contact Us - Full Form",
          component: TwoColContactUsFullForm,
          url: "/components/blocks/Form/TwoColContactUsFull",
        },
      }
    },

    Footer: {
      type: "Footers Section",
      elements: {
        SimpleFiveColumn: {
          name: "Simple Five Column",
          component: SimpleFiveColumnFooter,
          url: "/components/blocks/Footer/SimpleFiveColumn",
        }
      }
    }
  }
};

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
