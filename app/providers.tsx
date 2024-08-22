"use client";
import react from "react";
import { NextUIProvider } from "@nextui-org/react";
import { FormSwitchProvider } from "@/context/FormSwitch";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <FormSwitchProvider>
        {children}
      </FormSwitchProvider>
    </NextUIProvider>
  );
}
