"use client";

import * as React from "react"; // React import for JSX syntax
import { Moon, Sun } from "lucide-react"; // Icons for light and dark modes
import { useTheme } from "next-themes"; // Next.js hook to handle theme switching

import { Button } from "@/components/ui/button"; // UI button component
import { MulishBoldFont } from "@/utils/FontsInitializer"; // Custom font style for the text

// ModeToggle component to switch between light and dark themes
export function ModeToggle() {
  const { setTheme, theme } = useTheme(); // Destructure to get current theme and function to set theme

  return (
    <>
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")} // Toggle theme on button click
        variant='ghost' // Use ghost variant for the button style
        size='default' // Set the default button size
      >
        {theme === "light" ? (
          // When the theme is light, display the moon icon and "Dark" text
          <>
            <Moon /> {/* Moon icon for dark mode */}
            <span className={MulishBoldFont.className}>Dark</span>{" "}
            {/* "Dark" label with custom font */}
          </>
        ) : (
          // When the theme is dark, display the sun icon and "Light" text
          <>
            <Sun /> {/* Sun icon for light mode */}
            <span className={MulishBoldFont.className}>Light</span>{" "}
            {/* "Light" label with custom font */}
          </>
        )}
      </Button>
    </>
  );
}
