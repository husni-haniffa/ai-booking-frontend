import heroBackground from "@/assets/hero-background.jpg";
import { Label } from "@/components/ui/label";
;

const Dashboard: React.FC = () => {
   return (
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-3xl">
       <div className="space-y-6 rounded-3xl">

         <div className="rounded-3xl h-[300px] bg-black p-8 flex flex-col justify-between">
           <div className=""
           >
             <div className="">
               <h2 className="text-white text-3xl font-bold mb-2">
                 Explore more to get to your comformt zone
               </h2>
               <p className="text-white mb-8">Book your perfect stay with us</p>
             </div>
             
           </div>
         </div>

         <div className="bg-black text-white min-h-[300px] rounded-3xl p-8 flex flex-col justify-between">
           <div className="mt-60">
             <p className="mb-2">Hotels Available</p>
             <Label className="text-3xl text-center">1.764,980</Label>
           </div>
         </div>
       </div>

       <div className=" h-full rounded-3xl min-h-[600px] p-8 bg-black">
         <div className="flex">
           <Label className="text-4xl text-white leading-tight mt-48 text-center">
             Beyond accomodation, creating memories of lifetime
           </Label>
         </div>
       </div>

     </div>
   );
};

export default Dashboard;
