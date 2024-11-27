import { useState } from "react";

interface ReadMoreProps {
  text: string;
  maxLength: number;
  onToggleExpand?: (isExpanded: boolean) => void;
}

export default function ReadMore({ text, maxLength, onToggleExpand }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    const expanded = !isExpanded;
    setIsExpanded(expanded);

    // Call the callback when the expand state changes
    if (onToggleExpand) {
      onToggleExpand(expanded);
    }
  };

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p>{isExpanded ? text : `${text.slice(0, maxLength)}...`}</p>
      <button
        onClick={toggleExpand}
        className="text-blue-500 hover:underline mt-2"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
