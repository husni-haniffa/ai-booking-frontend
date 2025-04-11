import { Button } from "@/components/ui/button";

import heroBackground from "@/assets/hero-background.jpg"
import { Label } from "@/components/ui/label";

const Marketing: React.FC = () => {
  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-3xl">
      <div className="space-y-6 rounded-3xl">
        <div
          className="rounded-3xl h-[300px] p-8 flex flex-col justify-between bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        >
          <div className="">
            <div className="">
              <h2 className="text-white text-3xl font-bold mb-2">
                Explore more to get to your comformt zone
              </h2>
              <p className="text-white mb-8">Book your perfect stay with us</p>
              <Button className="rounded-full bg-white text-black">
                Booking Now
              </Button>
            </div>
          </div>
        </div>

        <div
          className="bg-no-repeat bg-center bg-cover text-white min-h-[300px] rounded-3xl p-8 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        >
          <div className="mt-60">
            <p className="mb-2">Hotels Available</p>
            <Label className="text-3xl text-center">1.764,980</Label>
          </div>
        </div>
      </div>

      <div
        className=" h-full rounded-3xl min-h-[600px] p-8 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="flex">
          <Label className="text-4xl text-white leading-tight mt-48 text-center">
            Beyond accomodation, creating memories of lifetime
          </Label>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default Marketing;
