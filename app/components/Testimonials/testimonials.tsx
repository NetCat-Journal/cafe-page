import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Coffee } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { testimonials, Testimonial } from "../../data/testimonials";

function Testimonials() {
  return (
    <div className="p-8 w-full bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-center mb-20 text-[#a96522] text-5xl font-bold">What Our Customers Say</h2>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full md:max-w-6xl mx-auto "
      >
        <CarouselContent className="mb-2">
          {testimonials.map((testimonial: Testimonial) => (
            <CarouselItem key={testimonial.id} className="basis-1/1 lg:basis-1/3">
              <div>
                <Card className="h-[450px] p-6 border-0 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="grid grid-rows-[auto_auto_auto_1fr_auto] gap-3 p-6 h-full text-center">
                    <div className="flex flex-col justify-center items-center p-2 h-full ">
                      <img src={testimonial.avatar} className="shadow-md rounded-full w-20 h-20 object-cover"></img>
                      <p className="text-lg text-[#221407] mt-4 font-bold">-{testimonial.name}-</p>
                      <div className="flex mb-4 text-[#90591f] text-xl mt-2">
                        {Array.from({ length: testimonial.rating }).map((_, index) => (
                          <Coffee key={index} size={22} className="fill-[#C47A2C] transition-transform hover:scale-110" />
                        ))}
                      </div>
                      <p className="text-md text-[#8e8e8e]  mb-4 text-center mt-8 leading-relaxed">"{testimonial.text}"</p>
                      <div className="mb-2 text-lg text-[#8e8e8e]">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Testimonials;