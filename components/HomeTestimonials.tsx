"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface TestimonialItem {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

export const HomeTestimonials = () => {
  const [index, setIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      text: "Partnering with Solrato was one of the best decisions for our hospital. Not only did we reduce energy costs but we also became part of a cleaner greener initiative. The Solinteg hybrid system guarantees 24/7 backup.",
      author: "Dr. Prakash Kumar",
      role: "Medical Director, Prakash Hospital",
      avatar:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      text: "Outages in Karnal used to waste thousands in extruder downtime. Solrato's 50kW hybrid setup and Dyness battery system solved our trip-out issues instantly. Operational margins are back on track.",
      author: "Mr. Satish Karnal",
      role: "Director, Karnal Pipe Factory",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      text: "Solrato designed a silent off-grid solar storage system for our remote Alwar resort. We reduced diesel runtimes by 90% and solved the noise complaint issue from wild reserve guests.",
      author: "Rajesh Rawat",
      role: "Operations Manager, Alwar Wild Resort",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[index];

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12">
      {/* Avatar Row */}
      <div className="flex -space-x-3 overflow-hidden">
        {testimonials.map((t, idx) => (
          <button
            key={t.id}
            onClick={() => setIndex(idx)}
            className={`relative size-12 rounded-full border-2 transition-all duration-300 ${
              idx === index ? "z-10 scale-110 border-brand-purple" : "border-white hover:scale-105"
            }`}
          >
            <Image
              src={t.avatar}
              alt={t.author}
              fill
              className="rounded-full object-cover"
              unoptimized
            />
          </button>
        ))}
      </div>

      {/* Quote Block */}
      <div className="relative flex flex-col items-center gap-6 rounded-3xl border border-brand-medium-gray/10 bg-brand-light-gray p-10 text-center">
        <Quote className="absolute -top-6 left-10 size-12 text-brand-purple/20" />
        <p className="text-lg/relaxed font-medium text-brand-dark italic md:text-xl">
          &ldquo;{current.text}&rdquo;
        </p>
        <div>
          <h4 className="text-base font-bold text-brand-dark">{current.author}</h4>
          <p className="mt-0.5 text-xs text-brand-dark-gray">{current.role}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={handlePrev}
          className="inline-flex size-10 items-center justify-center rounded-full border border-brand-medium-gray/20 bg-white text-brand-dark shadow-sm transition-all hover:bg-brand-light-gray active:scale-95"
        >
          <ArrowLeft className="size-5" />
        </button>
        <button
          onClick={handleNext}
          className="inline-flex size-10 items-center justify-center rounded-full border border-brand-medium-gray/20 bg-white text-brand-dark shadow-sm transition-all hover:bg-brand-light-gray active:scale-95"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
};
