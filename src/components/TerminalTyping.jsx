// components/TerminalTyping.js
import { useEffect, useState } from "react";
import "./TerminalTyping.css"; // Προσθέτουμε το CSS αρχείο

export default function TerminalTyping({ text, speed = 50, prefix = "[christosdev ~]# " }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <pre className="whitespace-pre-wrap text-green-400 font-mono">
      <span className="text-green-300">{prefix}</span>
      {displayText}
      <span className="blinking-cursor">█</span>
    </pre>
  );
}
