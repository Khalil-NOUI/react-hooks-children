import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="Example header" direction="horizontal">
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
      </Container>
      <Container header="Example header" textPosition="center">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.CkwLXJhehB7_jdE6wEOlbAHaE8%26pid%3DApi&f=1&ipt=83cd9b12aca8f6fa2cff85e2bc2a29e8b0566f0a0ecaa9fcd949c8d81dd94765&ipo=images"
        />
        <img
          alt="turtle"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.SeeO7Iu26AqJcrbYiNGIewHaE3%26pid%3DApi&f=1&ipt=849c0ed88a3e5bac084ff5af1395dbba9175633a80867ebca620e0dc1751dbbc&ipo=images"
        />
      </Container>
    </div>
  );
}

export default App;
