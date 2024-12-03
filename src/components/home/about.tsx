import { perks } from "@/src/constants";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import SectionBadge from "../ui/section-badge";
import { Heart, Target, Users } from "lucide-react";
import { NumberTicker } from "../ui/number-ticker";
import { CardSpotlight } from "../ui/card-spotlight";

const About = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center !py-0 md:!py-0 relative">
      <Container>
        <div className="max-w-md mx-auto text-start md:text-center">
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

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "200+", label: "Projects Delivered" },
            { number: "50+", label: "Team Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">
                <NumberTicker value={stat.number} />+
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaborative Spirit</h3>
            <p className="text-gray-600">
              Working together to achieve extraordinary results
            </p>
          </div>
          <div className="p-6 text-center">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
            <p className="text-gray-600">
              Pushing boundaries with cutting-edge solutions
            </p>
          </div>
          <div className="p-6 text-center">
            <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Client Success</h3>
            <p className="text-gray-600">Your growth is our primary mission</p>
          </div>
        </div> */}
      </Container>
    </Wrapper>
  );
};

export default About;
