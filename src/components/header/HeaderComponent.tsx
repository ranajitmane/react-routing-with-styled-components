import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AboutComponent, HomeComponent } from "..";
import { HeaderStyle } from "./styles/HeaderComponentStyle";

export function HeaderComponent() {
  return (
    <HeaderStyle>
      <ul>
        <li key="home">
          <Link to="/home">Home</Link>
        </li>
        <li key="about">
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/home" element={<HomeComponent />}></Route>
        <Route path="/about" element={<AboutComponent />}></Route>
        <Route path="/" element={<HomeComponent />}></Route>
      </Routes>
    </HeaderStyle>
  );
}
