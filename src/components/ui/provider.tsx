"use client";

import {
  ChakraProvider as BaseChakraProvider,
  defaultSystem,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function CustomProvider(props: ColorModeProviderProps) {
  return (
    <BaseChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </BaseChakraProvider>
  );
}
