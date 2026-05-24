import Hero from "./blocks/Hero";
import Offer from "./blocks/Offer";

export default function ModernTemplate({ data }) {
  return (
    <div
      style={{
        backgroundColor: "#e5e5e5",
        padding: "40px",
      }}
    >
      <table
        width="600"
        align="center"
        style={{
          backgroundColor: "#ffffff",
          fontFamily: "Arial",
        }}
      >
        <tbody>
          <tr>
            <td>
              <Hero data={data.blocks.hero} />
            </td>
          </tr>

          <tr>
            <td>
              <Offer data={data.blocks.offer} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}