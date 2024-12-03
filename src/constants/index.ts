import {
  AngularLogo,
  AwsLogo,
  DockerLogo,
  JavascriptLogo,
  LaravelLogo,
  JavaLogo,
  FigmaLogo,
  FlutterLogo,
  GithubLogo,
  PythonLogo,
  SpringLogo,
} from "@/assets";
import { Icons } from "@/src/components";
import {
  FaReact,
  FaAngular,
  FaAws,
  FaGithub,
  FaDocker,
  FaNode,
  FaPython,
  FaVuejs,
  FaFigma,
  FaLaravel,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiFlutter,
  SiSpring,
} from "react-icons/si";
import { Heart, Target, Users } from "lucide-react";

export const perks = [
  {
    icon: Users,
    title: "Collaborative Spirit",
    info: "Working together to achieve extraordinary results.",
  },
  {
    icon: Target,
    title: "Innovation First",
    info: "Pushing boundaries with cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Client Success",
    info: "Your growth is our primary mission.",
  },
];

export const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Angular",
    icon: FaAngular,
    color: "#DD0031",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Node.js",
    icon: FaNode,
    color: "#339933",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "#FF9900",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#181717",
  },
  {
    name: "Figma",
    icon: FigmaLogo,
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#1fbcfd",
  },
  {
    name: "Laravel",
    icon: FaLaravel,
    color: "#ff2d20",
  },
  {
    name: "Java",
    icon: JavaLogo,
    color: "#E76F00",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "#387EB8",
  },
  {
    name: "Python",
    icon: PythonLogo,
    color: "#FFE052",
  },
  {
    name: "Spring",
    icon: SiSpring,
    color: "#339933",
  },
];

export const features = [
  {
    icon: Icons.bolt,
    title: "Fast Setup",
    info: "Get your website up and running in minutes with our intuitive AI-powered builder.",
  },
  {
    icon: Icons.palette,
    title: "Customizable Templates",
    info: "Choose from a variety of stunning templates and customize them to suit your brand.",
  },
  {
    icon: Icons.seo,
    title: "SEO Optimized",
    info: "Built-in SEO features ensure your website ranks well on search engines.",
  },
  {
    icon: Icons.monitor,
    title: "Responsive Design",
    info: "Your website will look great on any device, from desktops to mobile phones.",
  },
  {
    icon: Icons.shop,
    title: "E-Commerce Ready",
    info: "Start selling online with our e-commerce features and integrations.",
  },
  {
    icon: Icons.server,
    title: "Secure Hosting",
    info: "Enjoy peace of mind with secure and reliable hosting for your website.",
  },
];

export const pricingCards = [
  {
    title: "Starter",
    description: "Perfect for trying out plura",
    price: "Free",
    duration: "",
    highlight: "Key features",
    buttonText: "Start for free",
    features: ["Limited projects", "1 Team member", "Basic features"],
    priceId: "",
  },
  {
    title: "Unlimited Saas",
    description: "The ultimate agency kit",
    price: "$199",
    duration: "month",
    highlight: "Key features",
    buttonText: "Upgrade to Pro",
    features: [
      "Unlimited projects",
      "5 Team members",
      "Advanced design tools",
      "Customizable domain",
    ],
    priceId: "price_1OYxkqFj9oKEERu1KfJGWxgN",
  },
  {
    title: "Enterprise",
    description: "For serious agency owners",
    price: "$399",
    duration: "month",
    highlight: "Everything in Starter, plus",
    buttonText: "Upgrade to Enterprise",
    features: [
      "Unlimited projects",
      "Unlimited Team members",
      "Custom branding",
      "Priority support (24/7)",
    ],
    priceId: "price_1OYxkqFj9oKEERu1NbKUxXxN",
  },
];

export const bentoCards = [
  {
    title: "Start with Inspiration",
    info: "Browse our vast library of pre-designed templates or upload your own images.",
    imgSrc: "/assets/bento-1.svg", // Lightbulb or Inspiration icon
    alt: "Inspiration for website creation",
  },
  {
    title: "AI Assists Your Vision",
    info: "Our intelligent AI tailors suggestions and functionalities based on your goals.",
    imgSrc: "/assets/bento1.svg", // AI Assistant icon
    alt: "AI website building assistant",
  },
  {
    title: "Drag & Drop Customization",
    info: "Effortlessly personalize your website with our intuitive drag-and-drop editor.",
    imgSrc: "/assets/bento1.svg", // Drag and Drop icon or hand editing a website
    alt: "Website customization with drag and drop",
  },
  {
    title: "Launch & Shine Online",
    info: "Publish your website with a single click and take your brand to the world.",
    imgSrc: "/assets/bento1.svg", // Rocket launching or website going live
    alt: "Website launch and publication",
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
];
