import React, { useEffect, useState } from "react";
import Form from "../src/components/Form";
import World from "../src/components/World";
import './App.css';

const App = () => {
  const [html, setHtml] = useState("");

  const [loading, setLoading] = useState(false);
  
  let input = "";

  // Generates HTML
  const handleSubmit = async (formData) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const API_KEY = "seven";

    const { nature, color } = formData;
    console.log("nature: " , nature)
    console.log("Color: " , color)

    input = `Let the scene include ${nature}, and only these objects. Let the color mode be set to ${color}.`;

const userDescription = "You are an A-Frame expert. Your task is to create an A-Frame scene that adheres to the user's specifications exactly. \
          Utilize native A-Frame elements, such as cylinders, cones, boxes, rectangles, and others, to represent naturalistic elements defined below. \
          Your role is to generate these elements exactly based on the user's input and the parameters given about generating proper scene objects and color selection. \
          Surround your response with <a-scene> tags for proper A-Frame HTML generation.";

const parameters = `Create an A-Frame scene according to the user parameter following this description: ${input}

Generate objects defined in the description according to the following general guidlines:
- Always include a ground and sky element. You must add a ground and sky no matter what build queried by the user. When generating the ground, the plane rotation must be set for (-90 0 0). The position must be (0 0 -4) with a width of 50 and a height of 50. 
- When nothing is queried by the user, only add a ground plane and sky element. Only use the default hex colors provided in the colors section.
- Utilize native A-Frame elements such as cylinders, cones, boxes, rectangles, pyramids, and more.
- Do not create any other objects besides those explicitly requested by the user.
- All scene objects generated are confined to the size of the plane generated.
- if an object is plural, display multiple iterations of the object. If an object is not listed as plural, only display one iteration of it.

Follow the descriptions below to create the objects listed: 
- Tree: use a long brown cylinder with its base on the ground. Use a tall green cone with the point facing up toward the sky. Attach the circular base of the cone to base of the cylinder that faces up toward the sky. Use the hex colors of green and brown provided in the colors section.
- Hills: sphere that's positioned so that only the top half appears ontop of the plane. If multiple, allow them to vary in size and position. Use the hex colors of grass provided in the colors section.
- Ocean: Allow the ground plane to change to hex colors corresponding to ocean color defined in the colors section. 
- Lake: Allow the ground plane to change to hex colors corresponding to lake color defined in the colors section. 
- Pond: Allow the ground plane to change to hex colors corresponding to pond color defined in the colors section. 
- Mountains: use a cone with the square side facing down toward the plane, and the point facing up toward the sky. If plural, allow the mountains to vary in size and position, and group multiple mountains in close proximity to eachother. Use the hex color for mountains defined in the colors section.

Color Selection:
- When the user specifies the color mode to be dark, use darker hex values. When the user specifies the color mode to be light, use lighter hex values.
- Default Ground Color: #2c6d08, #265d07, #327c09
- Default Sky Color: #00c2e0, #00aecc, #0098b7
- Grass Color: #2c6d08, #265d07, #327c09
- Dirt Color: #614d30, #534229, #6e5837
- Ocean Color: #0082a0, #006988, #064273, #76b6c4
- Lake Color: #064273, #76b6c4 
- Pond Color: #064273, #76b6c4
- Mountain Color: #05060B, #5B5867, #868C9F
- Night Sky: #05060B, ##0e0b07, #000000
- Night Ground: #060f01 #0d1f02
- Green: #2c6d08, #265d07, #327c09, #060f01
- Brown: #614d30, #534229, #6e5837
`;

    setLoading(true);

    // Construct object
    const messages = [
      {
        role: "system",
        content: userDescription,      },
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

  return (
    <>

    <div className="App">
      <Form 
        className="form-style"
        onSubmit={handleSubmit}
      />
      {loading ? (<h1 className="front">Loading...</h1>) : (<h1 className="front">NOT Loading...</h1>)}
      <World html={html} />
    </div>
    </>
  );
};

export default App;
