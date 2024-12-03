"use client";
import { Container, Wrapper } from "@/src/components";
import Hero from "@/src/components/home/hero";
import { LampContainer } from "@/src/components/ui/lamp";
import Marquee from "@/src/components/ui/marquee";
import SectionBadge from "@/src/components/ui/section-badge";
import { technologies } from "@/src/constants";
import Contact from "@/src/components/home/contact";
import Services from "@/src/components/home/services";

const HomePage = () => {
  const firstRow = technologies.slice(0, technologies.length / 2);
  const secondRow = technologies.slice(technologies.length / 2);

  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 ">
      {/* hero */}
      <Hero />
      {/* services */}
      <Services />
      {/* technologies */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Our Technologies" />
          </div>
        </Container>
        <Container>
          <div className="py-5 md:py-10 w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee pauseOnHover className="[--duration:20s] select-none">
                {firstRow.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <figure
                      key={tech.name}
                      className="w-20 h-20 relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 p-4 flex items-center justify-center group transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                      }}
                    >
                      <Icon
                        size={32}
                        className="text-slate-400 group-hover:text-[#61DAFB] transition-colors duration-300"
                        style={{ color: tech.color ? tech.color : "" }}
                      />
                    </figure>
                  );
                })}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s] select-none"
              >
                {secondRow.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <figure
                      key={tech.name}
                      className="w-20 h-20 relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 p-4 flex items-center justify-center group transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                      }}
                    >
                      <Icon
                        size={32}
                        className="text-slate-400 group-hover:text-[#61DAFB] transition-colors duration-300"
                        style={{ color: tech.color }}
                      />
                    </figure>
                  );
                })}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-transparent"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-transparent"></div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* contact */}
      <Wrapper className="flex flex-col items-center justify-center  relative">
        <Container>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="text-3xl bg-clip-text tracking-tight lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold bg-gradient-to-b from-neutral-400 to-white text-transparent dark:from-neutral-800 dark:to-neutral-600 ">
                From Vision to Reality <br /> Built For Success
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                Transform your digital presence with our innovative solutions.
                We combine cutting-edge technology with strategic expertise to
                deliver exceptional results.
              </p>
            </div>
          </LampContainer>
        </Container>
      </Wrapper>
      <Contact />
    </section>
  );
};

export default HomePage;
