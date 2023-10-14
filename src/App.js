import React, { useEffect, useState } from "react";
import Form from "../src/components/Form";
import World from "../src/components/World";

const App = () => {
  const [html, setHtml] = useState("");
  const [input, setInput] = useState("");

  // Generates HTML
  const handleSubmit = async () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const API_KEY = process.env.REACT_APP_OPEN_AI;

    const parameters = `Generate some random elements with random background color. Always generate groun and sky. Only use native a-frames. Style it like so: ${input}. Generate many a-frames so the world is very populated`;

    // Construct object
    const messages = [
      {
        role: "system",
        content:
          "You are an a-frame HTML generator. Surround your response with <a-scene> tags.",
      },
      {
        role: "user",
        content: parameters,
      },
    ];

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        // model: "gpt-4",
        model: "gpt-3.5-turbo",
        messages: messages,
      }),
    });

    const data = await response.json();

    console.log("1");
    console.log(data);

    const generatedHtml = data.choices?.[0]?.message?.content || "";

    console.log("2");
    console.log(generatedHtml);
    setHtml(generatedHtml);
  };

  const handleInputChange = (newValue) => {
    setInput(newValue);
  };

  return (
    <div className="App">
      <Form
        onSubmit={handleSubmit}
        input={input}
        setInput={setInput}
        onInputChange={handleInputChange}
      />
      <World html={html} />
    </div>
  );
};

export default App;
