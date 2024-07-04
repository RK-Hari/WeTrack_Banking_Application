import Mobilenav from "@/components/Mobilenav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from 'next/image';
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn=await getLoggedInUser();
  if(!loggedIn){
    redirect("/sign-in")
  }
  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar user={loggedIn}/>

    <div className="flex size-full flex-col">
      <div className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden">
        <Image src="/icons/icon.png" width={30} height={30} alt="menu"/>
        <div>
          <Mobilenav user={loggedIn}/>
        </div>
      </div>
    {children}
    </div>
   </main>
  );
}
