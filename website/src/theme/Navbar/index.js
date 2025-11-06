import React from "react";
import NavbarLayout from "@theme/Navbar/Layout";
import NavbarEventBanner from "@theme/Navbar/EventBanner";
import NavbarContent from "@theme/Navbar/Content";
export default function Navbar() {
  return (
    <NavbarLayout>
      <NavbarEventBanner />
      <NavbarContent />
    </NavbarLayout>
  );
}
