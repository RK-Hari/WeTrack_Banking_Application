import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <main className="flex min-h-screen w-full justify-between
     font-inter">
      {children}
      <div className="auth-asset">
        <Image src="/icons/Sign-in-page-image.png" alt="Auth image" width={700} height={700}/>
      </div>
     </main>
    );
  }
  