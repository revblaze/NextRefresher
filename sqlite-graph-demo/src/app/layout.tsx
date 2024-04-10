import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import "~/styles/globals.css";

import "@mantine/core/styles.css";

import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/spotlight/styles.css";

import "@mantine/code-highlight/styles.css";
import { TRPCReactProvider } from "~/trpc/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TRPCReactProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <MantineProvider>{children}</MantineProvider>
        </body>
      </html>
    </TRPCReactProvider>
  );
}
