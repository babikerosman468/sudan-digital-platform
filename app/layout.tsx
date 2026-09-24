import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Sudan Digital Platform',description:'Evidence-based digital knowledge, research and analytical infrastructure for Sudan'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
