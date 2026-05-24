export default function MinimalTemplate({
  data,
}) {
  return (
    <div>
      <h1>
        {data.blocks.hero.title}
      </h1>

      <p>
        {data.blocks.offer.title}
      </p>
    </div>
  );
}