export default function Offer({ data }) {
  return (
    <div style={{ padding: "40px" }}>
      <img
        src={data.image}
        alt=""
        width="100%"
      />

      <h2>{data.title}</h2>

      <p>{data.body}</p>
    </div>
  );
}