import React from "react";

interface ParameterPanelProps {
  temperature: number;
  setTemperature: (value: number) => void;
  maxTokens: number;
  setMaxTokens: (value: number) => void;
}

const ParameterPanel: React.FC<ParameterPanelProps> = ({
  temperature,
  setTemperature,
  maxTokens,
  setMaxTokens,
}) => {
  return (
    <div className="mt-10 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Adjust Parameters</h2>
      
      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Temperature: {temperature.toFixed(2)}
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-300 rounded"
        />
      </div>
      
      <div>
        <label className="block mb-2 font-medium">
          Max Tokens: {maxTokens}
        </label>
        <input
          type="range"
          min="10"
          max="200"
          step="1"
          value={maxTokens}
          onChange={(e) => setMaxTokens(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default ParameterPanel;
