"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo, LinkedinLogo } from "./icons";
import { githubUrl, linkedinUrl } from "@/const/urls";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Passionate about creating impactful web experiences
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              With about 3 years of experience in full-stack development, I
              specialize in building scalable web applications using modern
              technologies. My expertise includes React, Node.js, and cloud
              architecture. I&apos;m passionate about creating elegant solutions
              to complex problems and sharing knowledge with the developer
              community.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Button
                className="rounded-full"
                onClick={() => window.open(githubUrl, "_blank")}
              >
                <GithubLogo />
                View Github
              </Button>
              <Button
                className="rounded-full"
                onClick={() =>
                  window.open(linkedinUrl, "_blank")
                }
              >
                <LinkedinLogo />
                View LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/back-portfolio.jpg" alt="" className="object-cover" fill />
    </div>
  </div>
);
export default About;
