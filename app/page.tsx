"use client";
import axios from "axios";
import React, { useState } from "react";
import ModelSelector from "./components/ModelSelector";
import PromptEditor from "./components/PromptEditor";
import ParameterPanel from "./components/ParameterPanel";
import ChatArea from "./components/ChatArea";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const [temperature, setTemperature] = useState<number>(0.7);
const [maxTokens, setMaxTokens] = useState<number>(100);
const [response, setResponse] = useState<string>("");
const [model, setModel] = useState<string>("gpt-3.5-turbo");
const [prompt, setPrompt] = useState<string>("");


const fetchAIResponse = async (
  model: string,
  prompt: string,
  temperature: number,
  maxTokens: number
): Promise<string> => {
  const API_KEY = "YOUR_OPENAI_API_KEY";

  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model,
      messages: [{ role: "user", content: prompt }],
      temperature,
      max_tokens: maxTokens,
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data.choices[0].message.content;
};

     const handleSubmit = async () => {
    setResponse("Loading...");
    try {
      const aiResponse = await fetchAIResponse(model, prompt, temperature, maxTokens);
      setResponse(aiResponse);
    } catch (error) {
      setResponse("Error fetching response");
    }
  };
   
  return (
    <main className="min-h-screen p-8 sm:p-20 text-gray-900 dark:text-white">
       <div className="fixed top-4 right-4">
    <ThemeToggle />
    </div>
      {/* Step 1: Research */}
      <section>
        <h1 className="text-4xl font-bold mb-8">📌 Step 1: Research</h1>

        <p className="text-lg mb-12">
          As part of the research, I reviewed multiple popular AI interfaces to analyze usability, design patterns, and features. Below is a concise summary:
        </p>
             <ModelSelector model={model} setModel={setModel} />
             <PromptEditor prompt={prompt} setPrompt={setPrompt} />
              <ParameterPanel
  temperature={temperature}
  setTemperature={setTemperature}
  maxTokens={maxTokens}
  setMaxTokens={setMaxTokens}
/>
     <button
  onClick={handleSubmit}
  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded mt-6"
>
  Submit
</button>

      <ChatArea response={response}  />


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <section className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">🔍 Reviewed AI UIs</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>OpenAI Playground</strong> — Flexible prompt testing and fine-grained parameter controls.
              </li>
              <li>
                <strong>Hugging Face Spaces</strong> — Community-hosted demos, rapid prototyping and sharing.
              </li>
              <li>
                <strong>Anthropic Claude UI</strong> — Minimal chat design with safety and readability focus.
              </li>
              <li>
                <strong>Microsoft Copilot</strong> — Context-aware coding assistance in editor.
              </li>
            </ul>
          </section>

          <section className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">✨ Standout Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>OpenAI Playground → Fine-grained parameter control</li>
              <li>Hugging Face Spaces → Rapid model demos</li>
              <li>Claude → Simple, safe, and readable chat UX</li>
              <li>Copilot → Real-time contextual coding help</li>
            </ul>
          </section>

          <section className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">✅ Chosen Features</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Model Selector — Choose models (GPT-3.5, GPT-4, custom).</li>
              <li>Prompt Editor — Save/load prompt templates.</li>
              <li>Parameters Panel — Sliders for temperature, max tokens.</li>
              <li>Chat/Output — Copy/download JSON responses.</li>
              <li>Theme Toggle — Light/Dark with persistence.</li>
              <li>Accessibility — Keyboard + ARIA support.</li>
              <li>Animations — Hover/focus effects with Framer Motion.</li>
              <li>Storybook — Document reusable UI components.</li>
            </ol>
          </section>
        </div>
      </section>

      {/* Step 2: Design */}
      <section className="mt-20">
        <h1 className="text-4xl font-bold mb-8">🎨 Step 2: Design</h1>

        <p className="mb-8">
          {/* Placeholder text since Figma design not ready */}
          Currently, the Figma design is in progress and will be shared soon.
        </p>

        <p className="mb-4">The layout consists of:</p>
        <ul className="list-disc list-inside mb-8 space-y-1">
          <li>A <strong>Model Selector</strong> at the top</li>
          <li>A <strong>Prompt Editor</strong> textarea for entering prompts</li>
          <li>A <strong>Parameters Panel</strong> with sliders (temperature, max tokens)</li>
          <li>A <strong>Chat/Output Area</strong> displaying responses</li>
          <li>A <strong>Theme Toggle</strong> to switch light/dark modes</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">🎯 Tailwind CSS Mapping</h2>
        <table className="w-full mb-8 table-auto border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Element</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Tailwind Classes Used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Container</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">min-h-screen p-8 sm:p-20</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Headings</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">text-4xl font-bold mb-8</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cards/Sections</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Buttons</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Input/Select</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">p-2 border rounded dark:bg-gray-900</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Sliders</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">w-full h-2 bg-gray-300 rounded</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mb-4">⚙️ Components from Design → Code</h2>
        <table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">UI Element</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">React Component</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Model Dropdown</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ModelSelector.tsx</code></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Model options like GPT-3.5, GPT-4</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Prompt Textarea</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>PromptEditor.tsx</code></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Input field with save/load</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Parameter Sliders</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ParameterPanel.tsx</code></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">For temperature, max tokens</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Output Window</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ChatArea.tsx</code></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Shows response and actions</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Light/Dark Switch</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ThemeToggle.tsx</code></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Toggle with <code>localStorage</code></td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
