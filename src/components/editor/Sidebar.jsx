export default function Sidebar({
  template,
  setTemplate,
}) {
  function updateHeroTitle(e) {
    setTemplate({
      ...template,

      blocks: {
        ...template.blocks,

        hero: {
          ...template.blocks.hero,

          title: e.target.value,
        },
      },
    });
  }

  function updateHeroBody(e) {
    setTemplate({
      ...template,

      blocks: {
        ...template.blocks,

        hero: {
          ...template.blocks.hero,

          body: e.target.value,
        },
      },
    });
  }

  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
      }}
    >
      <h2>Hero Block</h2>

      <input
        type="text"
        value={template.blocks.hero.title}
        onChange={updateHeroTitle}
      />

      <textarea
        value={template.blocks.hero.body}
        onChange={updateHeroBody}
      />
    </div>
  );
}