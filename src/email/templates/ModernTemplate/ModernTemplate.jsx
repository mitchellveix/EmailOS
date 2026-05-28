import HeroBlock from "./blocks/Hero";
import SpotlightBlock from "./blocks/TwoColumn";
import OfferBlock from "./blocks/SplitContent";
import FeatureBlock from "./blocks/Feature";

export default function ModernTemplate({ data }) {
  return (
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      border="0"
      style={{
        backgroundColor: "#f4f4f4",
        padding: "40px 0",
      }}
    >
      <tbody>
        <tr>
          <td align="center">

            {/* EMAIL CONTAINER */}
            <table
              width="600"
              cellPadding="0"
              cellSpacing="0"
              border="0"
              style={{
                width: "100%",
                maxWidth: "600px",
                backgroundColor: "#ffffff",
              }}
            >
              <tbody>

                {/* HERO */}
                <tr>
                  <td>
                    <HeroBlock
                      title={data.heroTitle}
                      body={data.heroBody}
                      link={data.heroLink}
                      image={data.heroImage}
                    />
                  </td>
                </tr>

                {/* SPOTLIGHT */}
                <tr>
                  <td>
                    <SpotlightBlock
                      title={data.spotlightTitle}
                      body={data.spotlightBody}
                      image={data.spotlightImage}
                    />
                  </td>
                </tr>

                {/* OFFER */}
                <tr>
                  <td>
                    <OfferBlock
                      eyebrow={data.offerEyebrow}
                      title={data.offerTitle}
                      body={data.offerBody}
                      buttonText={data.offerButtonText}
                      buttonLink={data.offerButtonLink}
                    />
                  </td>
                </tr>

                {/* FEATURES */}
                <tr>
                  <td>
                    <FeatureBlock
                      feature1Title={data.feature1Title}
                      feature1Body={data.feature1Body}
                      feature2Title={data.feature2Title}
                      feature2Body={data.feature2Body}
                      feature3Title={data.feature3Title}
                      feature3Body={data.feature3Body}
                    />
                  </td>
                </tr>

              </tbody>
            </table>

          </td>
        </tr>
      </tbody>
    </table>
  );
}