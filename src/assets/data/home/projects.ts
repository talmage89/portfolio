import { DjangoImage, SettlersImage, ThreeJsDemo } from "../../img";

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
    title: "Settlers of Open Source",
    description: "Web-based Settlers of Catan remake with modified rules. We have high ambitions for this project and are hoping to make it a full-fledged game with a lobby, chat, and more.",
    tags: ["React", "Socket.io"],
    github:
      "https://github.com/bergbros/settlers-of-open-source/blob/master/soos-client/package.json",
    img: SettlersImage,
    imgOnLeft: false,
  },
  {
    title: "Django App",
    description: "Simple full-stack web app built with Django following the Django documentation tutorial.",
    tags: ["Python", "Django"],
    github: "https://github.com/talmage89/django-tutorial",
    img: DjangoImage,
    imgOnLeft: true,
  },
  {
    title: "ThreeJS App",
    description:
      "Exploration with 3D assset rendering in the browser. The scene's camera position changes based on the user's scroll position.",
    tags: ["ThreeJS", "JavaScript"],
    github: "https://github.com/talmage89/ThreeJSDemo2",
    linkToSite: "https://talmage89.github.io/ThreeJSDemo2/",
    img: ThreeJsDemo,
    imgOnLeft: false,
  },
];
