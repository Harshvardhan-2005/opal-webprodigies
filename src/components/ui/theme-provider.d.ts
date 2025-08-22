// theme-provider.d.ts
import "next-themes";

declare module "next-themes" {
  export interface ThemeProviderProps {
    children: React.ReactNode;
    enableSystem?: boolean;
    defaultTheme?: string;
    attribute?: "class" | `data-${string}` | Array<"class" | `data-${string}`>;
    storageKey?: string;
    forcedTheme?: string;
  }
}
