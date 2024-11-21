import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const EventCarousel = () => {
  return (
    <div className="flex flex-col items-center mb-20 px-4">
      <h1 className="font-semibold text-[#1B65A6] text-2xl sm:text-3xl lg:text-[47px] mb-6">
        Events
      </h1>
      <Carousel className="w-full max-w-[1100px]">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center basis-full sm:basis-1/2 lg:basis-1/4"
            >
              <div className="p-2 w-[200px] sm:w-[250px]">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                      {index + 1}
                    </span>
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
  );
};

export default EventCarousel;
