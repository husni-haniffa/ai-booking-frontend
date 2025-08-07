import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ExploreContent: React.FC = () => {
  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-3xl">
      <div className="space-y-6 rounded-3xl">
        <div
          className="rounded-3xl h-[300px] p-8 flex flex-col justify-between bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${encodeURI("https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")})`,
          }}
        >
          <div className="">
            <div className="">
              <h2 className="text-white text-3xl mb-2 font-bold">
                Explore more to get to your comformt zone
              </h2>
              <p className="text-white mb-8 text-xl">Book your perfect stay with us</p>
              <Button className="rounded-full bg-white text-black">
                Book Now
              </Button>
            </div>
          </div>
        </div>

        <div
          className="bg-no-repeat bg-center bg-cover text-white min-h-[300px] rounded-3xl p-8 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${encodeURI("https://images.pexels.com/photos/14426182/pexels-photo-14426182.jpeg")})`,
          }}
        >
          <div className="mt-60">
            <p className="mb-2 text-3xl font-bold">Hotels Available</p>
            <Label className="text-2xl text-center">395,450</Label>
          </div>
        </div>
      </div>

      <div
        className=" h-full rounded-3xl min-h-[600px] p-8 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${encodeURI("https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80")})`,
        }}
      >
        <div className="flex">
          <Label className="text-4xl text-white leading-tight mt-48 text-center font-bold">
            Beyond accomodation, creating memories of lifetime
          </Label>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default ExploreContent;
