import App from './App.js';
import React from 'react';
import ReactDOM from 'react-dom';

describe("App", () => {
  it("form renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});