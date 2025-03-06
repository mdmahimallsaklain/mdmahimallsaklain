"use client";

import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion"; // For animation effects
import { Badge } from "@/components/ui/badge"; // Badge component for tags
import * as ReactLucide from "lucide-react"; // Importing all Lucide icons
import { ServiceType } from "@/interfaces/Data.Interface"; // Type definition for services

// Functional component to render a service card
const ServicesCard = ({
  service,
  index,
}: {
  service: ServiceType; // Service data to display
  index: number; // Index for animation delay
}): ReactNode => {
  // Dynamically select an icon component from Lucide icons
  const IconComponent =
    (ReactLucide[
      service.icon as keyof typeof ReactLucide
    ] as React.ComponentType<ReactLucide.LucideProps>) ||
    ReactLucide.HelpCircle; // Default icon if none is found

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Final animation state
      transition={{ delay: index * 0.1 }} // Staggered animation delay
    >
      <Card className='w-full group h-full overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1'>
        <CardHeader className='relative overflow-hidden pb-8'>
          <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100' />
          <div className='relative z-10'>
            <div className='mb-2 inline-block rounded-full bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20'>
              <IconComponent className='h-8 w-8' /> {/* Display the icon */}
            </div>
            <CardTitle className='text-2xl font-bold'>
              {service.title} {/* Service title */}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className='space-y-4'>
          <CardDescription className='text-base'>
            {service.description} {/* Service description */}
          </CardDescription>
          <div className='flex flex-wrap gap-2'>
            {service.tags.map((tag) => (
              <Badge
                key={tag}
                variant='secondary'
                className='bg-secondary/50 hover:bg-secondary/70'
              >
                {tag} {/* Display each tag */}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServicesCard;
