import ModernTemplate from "./templates/ModernTemplate/ModernTemplate";

import MinimalTemplate from "./templates/MinimalTemplate/MinimalTemplate";

export default function renderEmail(template) {
  if (template.id === "modern") {
    return <ModernTemplate data={template} />;
  }

  if (template.id === "minimal") {
    return <MinimalTemplate data={template} />;
  }

  return null;
}