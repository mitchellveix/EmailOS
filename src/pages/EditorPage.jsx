import { useState } from "react";

import templates from "@/data/templates";

import renderEmail from "@/email/renderEmail";

import Sidebar from "@/components/editor/Sidebar";

export default function EditorPage() {
  const [template, setTemplate] = useState(
    templates.modern
  );

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      {/* SIDEBAR */}
      <Sidebar
        template={template}
        setTemplate={setTemplate}
      />

      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,
          padding: "24px",
        }}
      >
        {/* TEMPLATE SWITCHER */}
        <div
          style={{
            marginBottom: "24px",
          }}
        >
          <select
            value={template.id}
            onChange={(e) =>
              setTemplate(
                templates[e.target.value]
              )
            }
            style={{
              padding: "10px",
              fontSize: "16px",
            }}
          >
            <option value="modern">
              Modern
            </option>

            <option value="minimal">
              Minimal
            </option>
          </select>
        </div>

        {/* EMAIL PREVIEW */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {renderEmail(template)}
        </div>
      </div>
    </div>
  );
}