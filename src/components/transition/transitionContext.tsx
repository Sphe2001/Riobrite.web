import React, { createContext, useState, type ReactNode } from "react";

type TransitionContextType = {
  completed: boolean;
  toggleCompleted: (value: boolean) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  completed: false,
  toggleCompleted: () => {},
});

type TransitionProviderProps = {
  children: ReactNode;
};

export const TransitionProvider: React.FC<TransitionProviderProps> = ({
  children,
}) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = (value: boolean) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider
      value={{
        completed,
        toggleCompleted,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
