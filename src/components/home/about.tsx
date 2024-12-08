import { perks } from "@/src/constants";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import SectionBadge from "../ui/section-badge";
import { Heart, Target, Users } from "lucide-react";
import { NumberTicker } from "../ui/number-ticker";
import { CardSpotlight } from "../ui/card-spotlight";

const About = () => {
  return (
    <Wrapper
      id="about"
      className=" md:mt-0 flex  flex-col items-center justify-center !py-0 md:!py-0 relative"
    >
      <Container>
        <div className="max-w-md mx-auto text-center md:text-center">
          <SectionBadge title="About Us" />
          <h2 className="text-3xl bg-clip-text tracking-tight md:text-5xl md:!leading-snug  text-center bg-gradient-to-b from-neutral-400 to-white text-transparent dark:from-neutral-800 dark:to-neutral-600 font-semibold mt-6">
            Crafting Digital Excellence
          </h2>
          <p className="text-muted-foreground mt-6">
            We transform ideas into exceptional digital experiences, pushing the
            boundaries of innovation while staying true to our core values.
          </p>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col items-center justify-center py-5 md:py-5 w-full">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 w-full ">
            {perks.map((perk) => (
              <CardSpotlight
                key={perk.title}
                className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
              >
                <div className="flex items-center justify-center text-blue-500">
                  <perk.icon className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-medium mt-4">{perk.title}</h3>
                <p className="text-muted-foreground mt-2 text-start lg:text-start hover:text-white">
                  {perk.info}
                </p>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default About;
