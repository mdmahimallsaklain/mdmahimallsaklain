"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { ReactNode } from "react";
import { ProjectType } from "@/interfaces/Data.Interface";

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
}): ReactNode => {
  const {
    title,
    description,
    images,
    github_code,
    live_demo,
    technologies,
  } = project;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className='group overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm'>
        <div className='relative overflow-hidden'>
          <div className='absolute inset-0 z-10 bg-gradient-to-t from-based/80 to-based/0 dark:from-background/80 dark:to-background/0 transition-opacity group-hover:opacity-0' />
          <Image
            src={images[0]}
            alt={title}
            width={400}
            height={200}
            className='h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110'
          />
        </div>
        <CardHeader>
          <CardTitle className='text-xl font-semibold line-clamp-1'>
            {title}
          </CardTitle>
          <CardDescription className='line-clamp-2'>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-wrap gap-2'>
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant='secondary'
                className='bg-secondary/50 hover:bg-secondary/70'
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className='gap-2'>
          <Button asChild variant='default' size='sm' className='gap-2'>
            <Link
              href={live_demo}
              target='_blank'
              rel='noopener noreferrer'
            >
              <ExternalLink className='h-4 w-4' />
              Live Demo
            </Link>
          </Button>
          <Button asChild variant='outline' size='sm' className='gap-2'>
            <Link
              href={github_code}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='h-4 w-4' />
              Code
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
export default ProjectCard;
