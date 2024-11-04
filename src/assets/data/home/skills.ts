import {
  AbletonLogo,
  AngularLogo,
  AWSLogo,
  BlenderLogo,
  CPlusPlusLogo,
  DjangoLogo,
  DjangoRestLogo,
  FlutterLogo,
  GraphQLLogo,
  ReactLogo,
  ThreeJSLogo,
  TypeScriptLogo,
} from "../../img";

export type Skill = {
  name: string;
  img: string;
  height?: string;
  link: string;
}

export const skills: Skill[] = [
  { name: "React", img: ReactLogo, link: "https://react.dev/" },
  {
    name: "TypeScript",
    img: TypeScriptLogo,
    link: "https://www.typescriptlang.org/",
  },
  { name: "Angular", img: AngularLogo, link: "https://angular.io/" },
  { name: "C++", img: CPlusPlusLogo, link: "https://isocpp.org/" },
  { name: "Flutter", img: FlutterLogo, link: "https://flutter.dev/" },
  { name: "Django", img: DjangoLogo, link: "https://www.djangoproject.com/" },
  {
    name: "Django Rest",
    img: DjangoRestLogo,
    link: "https://www.django-rest-framework.org/",
  },
  { name: "AWS", img: AWSLogo, link: "https://aws.amazon.com/" },
  { name: "GraphQL", img: GraphQLLogo, link: "https://graphql.org/" },
  { name: "Three.js", img: ThreeJSLogo, link: "https://threejs.org/" },
  { name: "Blender", img: BlenderLogo, link: "https://www.blender.org/" },
  {
    name: "Ableton Live",
    img: AbletonLogo,
    height: "20px",
    link: "https://www.ableton.com/en/",
  },
];
