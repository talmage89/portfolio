import * as React from "react";
import * as Rf from "reactflow";
import { create } from "zustand";
import "reactflow/dist/style.css";
import "./ReactFlowDemo.scss";

const getRandomId = () =>
  `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

const initialNodes: Rf.Node[] = [
  {
    id: getRandomId(),
    type: "color",
    position: { x: 150, y: 150 },
    data: { title: "Color", color: randomColor() },
  },
  {
    id: getRandomId(),
    type: "color",
    position: { x: 130, y: 350 },
    data: { title: "Color", color: randomColor() },
  },
  {
    id: getRandomId(),
    type: "color",
    position: { x: 170, y: 530 },
    data: { title: "Color", color: randomColor() },
  },
  {
    id: getRandomId(),
    type: "gradient",
    position: { x: 670, y: 170 },
    data: { title: "Output" },
  },
];

const initialEdges: Rf.Edge[] = [];

type RFState = {
  nodes: Rf.Node[];
  edges: Rf.Edge[];
  setNodes: (nodes: Rf.Node[]) => void;
  setEdges: (edges: Rf.Edge[]) => void;
  onNodesChange: (changes: Rf.NodeChange[]) => void;
  onEdgesChange: (changes: Rf.EdgeChange[]) => void;
  onConnect: (connection: Rf.Connection) => void;
};

const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  setNodes: (nodes: Rf.Node[]) => set({ nodes }),
  setEdges: (edges: Rf.Edge[]) => set({ edges }),
  onNodesChange: (changes: Rf.NodeChange[]) =>
    set({ nodes: Rf.applyNodeChanges(changes, get().nodes) }),
  onEdgesChange: (changes: Rf.EdgeChange[]) =>
    set({ edges: Rf.applyEdgeChanges(changes, get().edges) }),
  onConnect: (connection: Rf.Connection) =>
    set({ edges: Rf.addEdge(connection, get().edges) }),
}));

export const ReactFlowDemo = () => {
  const nodeTypes = React.useMemo(
    () => ({ color: ColorNode, gradient: GradientNode }),
    []
  );
  const selector = (state: RFState) => ({
    nodes: state.nodes,
    edges: state.edges,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
  });
  const {
    nodes,
    edges,
    setNodes,
    setEdges,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector);

  return (
    <div className="ReactFlowDemo">
      <div className="ReactFlowDemo__controls">
        <button
          onClick={() =>
            setNodes([
              ...nodes,
              {
                id: getRandomId(),
                type: "color",
                position: { x: 0, y: 0 },
                data: {
                  title: "Color",
                  color: randomColor(),
                },
              },
            ])
          }
        >
          Add Node
        </button>
        <button onClick={() => setEdges([])}>Clear Connections</button>
      </div>
      <Rf.ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Rf.Background style={{ backgroundColor: "#FFFFFA" }} />
      </Rf.ReactFlow>
    </div>
  );
};

type ColorNodeProps = {
  title: string;
  color: string;
};

const ColorNode = (props: Rf.NodeProps<ColorNodeProps>) => {
  const selector = (state: RFState) => ({
    nodes: state.nodes,
    setNodes: state.setNodes,
  });
  const { nodes, setNodes } = useStore(selector);

  return (
    <>
      <div className="ColorNode">
        <div className="ColorNode__title">{props.data.title}</div>
        <div className="ColorNode__contents">
          <input
            type="color"
            value={props.data.color}
            onChange={(e) => {
              setNodes(
                nodes.map((node) =>
                  node.id === props.id
                    ? { ...node, data: { ...node.data, color: e.target.value } }
                    : node
                )
              );
            }}
          />
          <p>{props.data.color}</p>
          <Rf.Handle
            className="ColorNode__contents__handle"
            type="source"
            position={Rf.Position.Right}
          />
        </div>
      </div>
    </>
  );
};

type GradientNodeProps = {
  title: string;
};

const GradientNode = (props: Rf.NodeProps<GradientNodeProps>) => {
  const [colors, setColors] = React.useState<string[]>([]);
  const [gradientType, setGradientType] = React.useState<"radial" | "linear">(
    "radial"
  );

  const selector = (state: RFState) => ({
    nodes: state.nodes,
    edges: state.edges,
  });
  const { nodes, edges } = useStore(selector);

  React.useEffect(() => {
    const colorNodes = edges.map((edge) =>
      nodes.find((node) => node.id === edge.source)
    );
    setColors(
      colorNodes
        .reverse()
        .sort((a, b) => a!.position.y - b!.position.y)
        .map((node) => node!.data.color)
    );
  }, [nodes, edges]);

  const gradientColors =
    colors.length > 0
      ? colors.length > 1
        ? [...colors].reverse().join(", ")
        : `${colors[0]}, black`
      : "lightgray, black";

  const background =
    gradientType === "radial"
      ? `radial-gradient(circle, ${gradientColors})`
      : `linear-gradient(45deg, ${gradientColors})`;

  return (
    <>
      <div className="GradientNode">
        <div className="GradientNode__title">
          <p>{props.data.title}</p>
          <span className="GradientNode__title__controls">
            <a
              onClick={() => setGradientType("linear")}
              className={`GradientNode__title__controls__item ${
                gradientType === "linear"
                  ? "GradientNode__title__controls__item--active"
                  : ""
              }`}
            >
              Linear
            </a>
            <a
              onClick={() => setGradientType("radial")}
              className={`GradientNode__title__controls__item ${
                gradientType === "radial"
                  ? "GradientNode__title__controls__item--active"
                  : ""
              }`}
            >
              Radial
            </a>
          </span>
        </div>
        <div className="GradientNode__contents">
          <div
            className="GradientNode__contents__gradient"
            style={{ background }}
          ></div>
          <Rf.Handle
            className="GradientNode__contents__handle"
            type="target"
            position={Rf.Position.Left}
          />
        </div>
      </div>
    </>
  );
};
