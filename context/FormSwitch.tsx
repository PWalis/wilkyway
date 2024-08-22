"use client";
import react, { createContext, PropsWithChildren, useContext, useState } from "react";

const FormSwitchContext = createContext<any>(undefined);

export const FormSwitchProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [formSwitch, setFormSwitch] = useState(false);

  return (
    <FormSwitchContext.Provider value={{ formSwitch, setFormSwitch }}>
      {children}
    </FormSwitchContext.Provider>
  );
};

export function useFormSwitch() {
    return useContext(FormSwitchContext)
}
