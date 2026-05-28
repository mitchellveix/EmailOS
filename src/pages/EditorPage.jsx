import { useState } from 'react';
import {
  Monitor,
  Tablet,
  Smartphone,
  Send,
  Download,
  ChevronDown,
  Plus,
} from 'lucide-react';

const availableBlocks = [
  'Hero',
  'Text',
  'Image',
  'CTA',
  'Divider',
  'Footer',
];

const initialBlocks = [
  {
    id: 'hero-1',
    type: 'Hero',
    data: {
      heading: 'Welcome to EmailOS',
      body:
        'Build beautiful, modular emails with a clean editing experience.',
      buttonText: 'Get Started',
      buttonUrl: '#',
    },
  },
  {
    id: 'text-1',
    type: 'Text',
    data: {
      heading: 'Simple Email Building',
      body:
        'Focus on creating emails faster with reusable content blocks and live previewing.',
    },
  },
];

export default function EditorPage() {
  const [selectedView, setSelectedView] = useState('desktop');
  const [selectedBlockId, setSelectedBlockId] = useState('hero-1');
  const [blocks, setBlocks] = useState(initialBlocks);

  const selectedBlock = blocks.find(
    (block) => block.id === selectedBlockId
  );

  const updateField = (field, value) => {
    setBlocks((prev) =>
      prev.map((block) => {
        if (block.id !== selectedBlockId) return block;

        return {
          ...block,
          data: {
            ...block.data,
            [field]: value,
          },
        };
      })
    );
  };

  const previewWidths = {
    desktop: 'max-w-[650px]',
    tablet: 'max-w-[520px]',
    mobile: 'max-w-[375px]',
  };

  return (
    <div className="h-screen bg-zinc-100 flex flex-col overflow-hidden">

      {/* TOP TOOLBAR */}
      <header className="h-16 bg-white border-b border-zinc-200 px-6 flex items-center justify-between shrink-0">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold tracking-tight text-zinc-900">
            EmailOS
          </h1>

          <div className="h-5 w-px bg-zinc-300" />

          <span className="text-sm text-zinc-500 font-medium">
            Modern Template
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* VIEW SWITCHER */}
          <div className="flex items-center bg-zinc-100 rounded-xl p-1 border border-zinc-200">

            <button
              onClick={() => setSelectedView('desktop')}
              className={`p-2 rounded-lg transition ${
                selectedView === 'desktop'
                  ? 'bg-white shadow-sm text-zinc-900'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              <Monitor size={16} />
            </button>

            <button
              onClick={() => setSelectedView('tablet')}
              className={`p-2 rounded-lg transition ${
                selectedView === 'tablet'
                  ? 'bg-white shadow-sm text-zinc-900'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              <Tablet size={16} />
            </button>

            <button
              onClick={() => setSelectedView('mobile')}
              className={`p-2 rounded-lg transition ${
                selectedView === 'mobile'
                  ? 'bg-white shadow-sm text-zinc-900'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              <Smartphone size={16} />
            </button>
          </div>

          {/* ACTIONS */}
          <button className="h-10 px-4 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-black transition flex items-center gap-2">
            <Send size={16} />
            Test Email
          </button>

          <button className="h-10 px-4 rounded-xl border border-zinc-300 bg-white text-sm font-medium hover:bg-zinc-50 transition flex items-center gap-2">
            <Download size={16} />
            Export
          </button>

          {/* ACCOUNT */}
          <button className="flex items-center gap-2 hover:bg-zinc-100 px-2 py-1 rounded-xl transition">
            <div className="w-9 h-9 rounded-full bg-zinc-900 text-white text-sm font-semibold flex items-center justify-center">
              MV
            </div>

            <ChevronDown size={16} className="text-zinc-500" />
          </button>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT SIDEBAR */}
        <aside className="w-[280px] bg-white border-r border-zinc-200 flex flex-col overflow-hidden shrink-0">

          <div className="p-6 border-b border-zinc-200">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 mb-2">
              Template
            </p>

            <h2 className="text-lg font-semibold text-zinc-900">
              Modern Template
            </h2>

            <p className="text-sm text-zinc-500 mt-1">
              Marketing Email
            </p>
          </div>

          <div className="flex-1 overflow-auto p-6">

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-zinc-900">
                Content Blocks
              </h3>
            </div>

            <div className="space-y-3">
              {availableBlocks.map((block) => (
                <button
                  key={block}
                  className="w-full flex items-center gap-3 p-4 rounded-2xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition text-left"
                >
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700">
                    <Plus size={16} />
                  </div>

                  <span className="text-sm font-medium text-zinc-800">
                    {block}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* CENTER PREVIEW */}
        <main className="flex-1 overflow-auto p-10 bg-zinc-100">

          <div
            className={`mx-auto min-h-full bg-white rounded-3xl shadow-sm border border-zinc-200 transition-all duration-300 ${previewWidths[selectedView]}`}
          >

            <div className="p-8 border-b border-zinc-200">
              <p className="text-xs uppercase tracking-wide text-zinc-400 font-semibold mb-2">
                Email Preview
              </p>

              <h1 className="text-3xl font-bold text-zinc-900 leading-tight">
                Welcome to EmailOS
              </h1>

              <p className="mt-4 text-zinc-600 leading-7">
                Build beautiful email campaigns with reusable blocks and a modern editing workflow.
              </p>

              <button className="mt-6 px-5 h-11 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-black transition">
                Get Started
              </button>
            </div>

            <div className="p-8 space-y-6">
              {blocks.map((block) => (
                <div
                  key={block.id}
                  onClick={() => setSelectedBlockId(block.id)}
                  className={`border rounded-2xl p-6 cursor-pointer transition ${
                    selectedBlockId === block.id
                      ? 'border-zinc-900 bg-zinc-50'
                      : 'border-zinc-200 hover:border-zinc-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wide font-semibold text-zinc-400">
                      {block.type} Block
                    </span>
                  </div>

                  {block.data.heading && (
                    <h2 className="text-2xl font-semibold text-zinc-900 mb-3">
                      {block.data.heading}
                    </h2>
                  )}

                  {block.data.body && (
                    <p className="text-zinc-600 leading-7">
                      {block.data.body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="w-[340px] bg-white border-l border-zinc-200 overflow-auto shrink-0">

          <div className="p-6 border-b border-zinc-200 sticky top-0 bg-white z-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 mb-2">
              Block Settings
            </p>

            <h2 className="text-lg font-semibold text-zinc-900">
              {selectedBlock?.type || 'Select a Block'}
            </h2>
          </div>

          <div className="p-6 space-y-6">

            {selectedBlock && (
              <>
                {Object.entries(selectedBlock.data).map(([field, value]) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-zinc-700 mb-2 capitalize">
                      {field.replace(/([A-Z])/g, ' $1')}
                    </label>

                    {field.toLowerCase().includes('body') ? (
                      <textarea
                        rows={5}
                        value={value}
                        onChange={(e) =>
                          updateField(field, e.target.value)
                        }
                        className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                      />
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) =>
                          updateField(field, e.target.value)
                        }
                        className="w-full h-12 rounded-2xl border border-zinc-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                      />
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}