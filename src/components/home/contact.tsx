// export default Contact;
import { useCallback, useMemo, useState } from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Loader2, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

import SectionBadge from "../ui/section-badge";
import { WorldMap } from "../ui/world-map";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Memoize form configuration
  const formConfig = useMemo(
    () => ({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    }),
    []
  );

  const form = useForm<z.infer<typeof formSchema>>(formConfig);

  // Memoize submit handler
  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      try {
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        const response = await fetch("/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (!response.ok)
          throw new Error(data.error || "Failed to send message");

        setSubmitStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        form.reset();
      } catch (error) {
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [form]
  );

  const dots = useMemo(
    () => [
      {
        start: { lat: 16.189886, lng: -8.603869 }, // Casablanca (HQ)
        end: { lat: 44.8566, lng: 0.8522 }, // london
      },
      {
        start: { lat: 16.189886, lng: -8.603869 }, // Casablanca (HQ)
        end: { lat: 27.5074, lng: -0.1278 }, // paris
      },
      {
        start: { lat: 16.189886, lng: -8.603869 }, // Casablanca (HQ)
        end: { lat: 41.3851, lng: 2.1734 }, // Barcelona
      },
      {
        start: { lat: 16.189886, lng: -8.603869 }, // Casablanca (HQ)
        end: { lat: 30.7128, lng: -74.006 }, // New York
      },
      {
        start: { lat: 16.189886, lng: -8.603869 }, // Casablanca (HQ)
        end: { lat: 45.5017, lng: -73.5673 }, // Montreal
      },
      {
        start: { lat: 16.189886, lng: -8.603869 }, // Casablanca (HQ)
        end: { lat: 42.52, lng: 9.405 }, // Berlin
      },
    ],
    []
  );

  return (
    <Wrapper id="contact">
      <Container className="">
        <div className="flex flex-col items-center justify-center relative w-full text-center">
          <h2 className="text-3xl bg-clip-text tracking-tight lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold bg-gradient-to-b from-neutral-400 to-white text-transparent dark:from-neutral-800 dark:to-neutral-600">
            From Vision to Reality <br /> Built For Success
          </h2>
          <p className="text-muted-foreground mt-6 max-w-md mx-auto">
            Transform your digital presence with our innovative solutions. We
            combine cutting-edge technology with strategic expertise to deliver
            exceptional results.
          </p>
        </div>

        <div className="relative w-full">{/* <WorldMap dots={dots} /> */}</div>
      </Container>

      <Container className="relative py-10">
        <Container>
          <div className="max-w-md mx-auto text-center md:text-center py-8">
            <SectionBadge title="Our Contact" />
          </div>
        </Container>
        <div className="relative w-full overflow-hidden bg-transparent">
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

          <div className="relative mx-auto max-w-screen-xl px-4 py-8 md:py-10 sm:px-6 lg:px-8">
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
                  Get In Touch
                </span>
              </motion.div>

              <motion.h1
                className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Start building today.
              </motion.h1>

              <motion.p
                className="mx-auto max-w-2xl text-base md:text-lg text-gray-300 px-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                We offer seamless integration solutions that empower your
                business with enhanced efficiency and productivity.
              </motion.p>

              <motion.div
                className="mx-auto max-w-2xl w-full px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }: any) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }: any) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }: any) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Subject" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }: any) => (
                        <FormItem>
                          <FormControl>
                            <Textarea placeholder="Your message" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-center md:justify-end mt-6 w-full">
                      <Button
                        type="submit"
                        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Email
                            <Send className="w-4 h-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Contact;
