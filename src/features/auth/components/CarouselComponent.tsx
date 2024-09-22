import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { useEffect, useState } from "react";
  
  interface CarouselProps {
    items: {
      image: string;
      title: string;
      description: string;
    }[];
  }
  
  export const CarouselComponent: React.FC<CarouselProps> = ({ items }) => {
    const [api, setApi] = useState<CarouselApi | null>(null);
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (!api) return;
  
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
  
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }, [api]);
  
    return (
      <div className="w-full">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex justify-center">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-center">
                  <h2 className="heading-6 text-white font-bold my-3">
                    {item.title}
                  </h2>
                  <p className="body-small text-white">{item.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary-500 bg-white" />
          <CarouselNext className="text-primary-500 bg-white" />
        </Carousel>
  
        <div className="flex justify-center items-center gap-2 py-4">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={`${
                current - 1 === index ? "w-7" : "w-4"
              } h-4 rounded-full ${
                current - 1 === index ? "bg-primary-200" : "bg-white"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>
      </div>
    );
  };
  