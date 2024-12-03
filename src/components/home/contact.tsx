import { useState } from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "../ui/shadcn-input";

const Contact = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist signup
    console.log("Email submitted:", email);
  };

  return (
    <Wrapper>
      <Container className="relative py-10 ">
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 -mt-20 lg:-mt-40">
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <motion.path
                d="M0 0 Q 50 50 0 100"
                className="stroke-blue-900/20"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </svg>
          </motion.div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-16 md:py-28 sm:px-6 lg:flex lg:items-center lg:px-8">
            <motion.div
              className="text-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                className="mb-6 md:mb-8 flex items-center justify-center gap-2 text-white"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
                <span className="text-base md:text-lg font-medium">
                  Join Us
                </span>
              </motion.div>

              <motion.h1
                className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Start building today.
              </motion.h1>

              <motion.p
                className="mx-auto max-w-2xl text-base md:text-lg text-gray-300 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                We offer seamless integration solutions that empower your
                business with enhanced efficiency and productivity.
              </motion.p>

              <motion.form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 md:mt-12 flex max-w-md gap-2 md:gap-3 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-neutral-900 bg-white/95 text-sm md:text-base "
                  required
                />

                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap text-sm md:text-base"
                >
                  Get in Touch
                </Button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Contact;
