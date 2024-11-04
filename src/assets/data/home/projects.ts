import {
  ThreeJsDemo,
  SemanticSearch,
  OpenGLSandbox,
  SettlersOfOpenSource,
} from "../../img";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  linkToSite?: string;
  img: string;
  imgOnLeft: boolean;
};

export const projects: Project[] = [
  {
    title: "Semantic Search",
    description:
      "AI semantic search with a custom vector database. Allows for context-aware semantic search over a large document set in chosen namespaces. Implemented authentication with NextAuth.",
    tags: ["NextJS", "NextAuth", "Prisma", "Pinecone", "Langchain"],
    github: "https://github.com/talmage89/ai-semantic-search",
    img: SemanticSearch,
    imgOnLeft: false,
  },
  {
    title: "OpenGL Sandbox",
    description:
      "Exploration with OpenGL and GLFW. This project is a testing framework that allows the user to code up and test various OpenGL features with easy-to-use functions for updating and rendering. Explored shaders, textures, and 3D models.",
    tags: ["OpenGL", "GLFW", "C++", "Imgui"],
    github: "https://github.com/talmage89/OpenGL-Sandbox",
    img: OpenGLSandbox,
    imgOnLeft: true,
  },

  {
    title: "ThreeJS App",
    description:
      "Simple demonstration of 3D asset rendering in the browser. Added .gltf model importing, some procedural generation, and a moving camera. Implemented with ThreeJS.",
    tags: ["ThreeJS", "JavaScript"],
    github: "https://github.com/talmage89/ThreeJSDemo2",
    linkToSite: "https://talmage89.github.io/ThreeJSDemo2/",
    img: ThreeJsDemo,
    imgOnLeft: false,
  },
  {
    title: "Settlers of Open Source",
    description:
      "Web-based Settlers of Catan remake with modified rules. Developed with a few of my brothers, have high ambitions for this project and are hoping to make it a full-fledged game with a lobby, chat, and more.",
    tags: ["React", "Typescript", "Node", "Socket.io"],
    github: "https://github.com/bergbros/settlers-of-open-source/",
    img: SettlersOfOpenSource,
    imgOnLeft: true,
  },
];
