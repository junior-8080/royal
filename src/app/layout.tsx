'use client'
import NavBar from "@/features/Home/components/NavBar";
import Footer from "@/components/shared/Footer";


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
