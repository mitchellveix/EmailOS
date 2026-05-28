export default function Hero({ data }) {
  return (
    <div style={{ padding: "40px" }}>
      <img
        src={data.image}
        alt=""
        width="100%"
      />

      <h1>{data.title}</h1>

      <p>{data.body}</p>

      <a href={data.link}>
        {data.button}
      </a>
    </div>
  );
}