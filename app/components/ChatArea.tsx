import React from "react";

interface ChatAreaProps {
  response: string;
}

const ChatArea: React.FC<ChatAreaProps> = ({ response }) => {
  return (
    <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded">
      <pre className="whitespace-pre-wrap">{response}</pre>

      {/* Copy button */}
      <button
        onClick={() => navigator.clipboard.writeText(response)}
        className="mt-4 bg-blue-400 hover:bg-blue-500 text-white px-3 py-1 rounded"
      >
        Copy Response
      </button>
    </div>
  );
};

export default ChatArea;
