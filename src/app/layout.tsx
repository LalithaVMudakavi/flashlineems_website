// import type { Metadata } from "next";



// import "./globals.css";
// import { TopBar } from "../../components/layout/top-bar";
// import { Header } from "../../components/layout/header";
// import { Footer } from "../../components/layout/footer";

// export const metadata: Metadata = {
//   title: {
//     default: "Flashline EMS | Global Electronics Manufacturing Partner",
//     template: "%s | Flashline EMS",
//   },

//   description:
//     "Flashline EMS provides end-to-end electronics manufacturing services including engineering design, PCB fabrication, PCB assembly, testing and box build.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         {children}

//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";

import "./globals.css";
import { TopBar } from "../../components/layout/top-bar";
import { Header } from "../../components/layout/header";
import { Footer } from "../../components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Flashline EMS | Global Electronics Manufacturing Partner",
    template: "%s | Flashline EMS",
  },

  description:
    "Flashline EMS provides end-to-end electronics manufacturing services including engineering design, PCB fabrication, PCB assembly, testing and box build.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}