"use client";
import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/utils/theme-provider";
import { Provider } from "react-redux";
import { store } from "@/store";

const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children || <div>Fallback content</div>}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default DefaultLayout;
