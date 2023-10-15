import React, { useState } from "react";
import Form from "../src/components/Form";
import World from "../src/components/World";
import "./App.css";

const App = () => {
  const [html, setHtml] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Generates HTML
  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const API_URL = "https://api.openai.com/v1/chat/completions";
    const API_KEY = process.env.REACT_APP_OPEN_AI;

    const userDescription =
      "You are an A-Frame expert. Your task is to create an A-Frame scene that adheres to the user's specifications exactly. \
          Utilize native A-Frame elements, such as cylinders, cones, boxes, rectangles, and others, to represent naturalistic elements defined below. \
          Your role is to generate these elements exactly based on the user's input and the parameters given about generating proper scene objects and color selection. \
          Surround your response with <a-scene> tags for proper A-Frame HTML generation.";

    const parameters = `Given the user's desire for a ${input}, generate a custom A-Frame scene using one of the preset environments. Choose a preset that best matches the user's description and adjust the dressingAmount to suit the theme. The presets available are: 'forest', 'egypt', 'checkerboard', 'goaland', 'yavapai', 'goldmine', 'arches', 'threetowers', 'poison', 'tron', 'japan', 'dream', 'volcano', 'starry', 'osiris'. 

          If the user prompts in two or more presets out of the ones available: 'forest', 'egypt', 'checkerboard', 'goaland', 'yavapai', 'goldmine', 'arches', 'threetowers', 'poison', 'tron', 'japan', 'dream', 'volcano', 'starry', 'osiris', then generate a custom A-Frame scene using the set amount requested by the user based on the preset environments available. For example, if the user requests ‘japan’ and ‘forest’ the scene that is built should only contain the presets for ‘japan’ and ‘forest’. Choose presets that best matches the user's description and adjust the dressingAmount to suit the theme.
          
              - Be very precise when it comes to dressingAmount, as it depends on the preset. Be realistic to the real world. For example, 'japan' has pillars, and there should be less of these, like 1 or 2. For 'forest', there should be way more (as there are hundreds of trees in a forest). To provide more context, for larger presets like egypt or arches, the dressingAmount should be around 100 because. For smaller generations like forest, the dressingAmount should be around 350. 
              
              Provide the A-Frame scene code below:
          
              For the 'fog' attribute, you only have the following options to choose from:
              - any decimal number from 0.0 to 0.8. Cannot be larger than 0.8. 
          
              For the 'groundTexture' attribute, you only have the following options to choose from:
              - 'checkerboard'
              - 'squares'
              - 'walkernoise'
              
              - If the user types in night, dark, scary, horror, nightmare, or any similar words, only use these following colors for 'skyColor' and 'horizonColor' attributes: 
              - skyColor: #05060B, #0e0b07, #000000, 
              - horizonColor: #caf0fe
          
              - only modify the presets; don't add new lines
          
              <a-scene inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" device-orientation-permission-ui=""
              fog="color: [HEX_CODE]; far: [VALUE]; density: [VALUE]" visible=""
              environment="active: true; preset: [PRESET_SELECTION]; skyType: gradient; skyColor: [SKY COLOR THAT MATCHES PRESET]; 
              horizonColor: [COLOR THAT MATCHES PRESET AND IS A HORIZON COLOR]; fog: [VALUE]; ground: [SELECTION THAT MATCHES PRESET]; groundTexture: [SELECTION THAT MATCHES PRESET]; 
              groundColor: [GROUND COLOR THAT IS IN A SIMILAR COLOR PALETTE TO PRESET OR IS REALISTIC TO WHAT WE CAN SEE IN REAL LIFE]; groundColor2: [ANOTHER GROUND COLOR THAT IS IN A SIMILAR COLOR PALETTE TO PRESET OR IS REALISTIC TO WHAT WE CAN SEE IN REAL LIFE]
              camera="">
                  <!-- Generated custom environment! -->
                  <a-entity environment="preset: [PRESET-SELECTION]; dressingAmount: [DRESSING-AMOUNT]"></a-entity>
              </a-scene>
                    `;

    // Construct object
    const messages = [
      {
        role: "system",
        content: userDescription,
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
    const generatedHtml = data.choices?.[0]?.message?.content || "";
    setHtml(generatedHtml);
    setLoading(false);

    console.log("HTML FROM GPT BELOW:");
    console.log(generatedHtml);
  };

  return (
    <>
      <div className="App">
        <Form
          className="form-style"
          loading={loading}
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
        />
        <World html={html} />
      </div>
    </>
  );
};

export default App;
