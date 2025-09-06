import React from 'react';

interface ModelSelectorProps {
  model: string;
  setModel: (model: string) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ model, setModel }) => {
  return (
    <div className="mt-4">
      <label htmlFor="model" className="block mb-2 font-medium">
        Choose a model:
      </label>
      <select
        id="model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        className="p-2 border rounded dark:bg-gray-900"
      >
        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
        <option value="gpt-4">GPT-4</option>
        <option value="gpt-4o">GPT-4o</option>
      </select>
    </div>
  );
};

export default ModelSelector;
