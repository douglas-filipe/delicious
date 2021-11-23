import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import RecipesProvider from "./Recipes";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <AuthProvider>
      <RecipesProvider>{children}</RecipesProvider>
    </AuthProvider>
  );
};
