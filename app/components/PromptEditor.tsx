import React from "react";

interface PromptEditorProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
}

const PromptEditor: React.FC<PromptEditorProps> = ({ prompt, setPrompt }) => {
  const handleSave = () => {
    localStorage.setItem("savedPrompt", prompt);
    alert("Prompt saved!");
  };

  const handleLoad = () => {
    const saved = localStorage.getItem("savedPrompt");
    if (saved) setPrompt(saved);
    else alert("No prompt found.");
  };

  return (
    <div className="mt-10">
      <label htmlFor="prompt" className="block mb-2 font-medium">
        Enter your prompt:
      </label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full h-32 p-2 border rounded dark:bg-gray-900"
        placeholder="Type your prompt here..."
      />
      <div className="mt-4 mb-8 flex gap-4">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Prompt
        </button>
        <button
          onClick={handleLoad}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Load Prompt
        </button>
      </div>
    </div>
  );
};

export default PromptEditor;
