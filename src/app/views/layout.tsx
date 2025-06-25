// src/app/layout.tsx

import "../globals.css";

import ClientLayout from "../components/clientLayout";






export default function RootLayoutViews({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      
         <div >
          <ClientLayout>{children}</ClientLayout>
        </div>
     
   
  );
}