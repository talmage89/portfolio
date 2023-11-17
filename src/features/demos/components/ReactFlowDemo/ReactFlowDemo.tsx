import * as React from "react";
import * as Rf from "reactflow";
import { create } from "zustand";
import "reactflow/dist/style.css";
import "./ReactFlowDemo.scss";

const initialNodes: Rf.Node[] = [
  {
    id: "1",
    type: "color",
    position: { x: 150, y: 150 },
    data: { title: "Color" },
  },
  {
    id: "2",
    type: "color",
    position: { x: 130, y: 350 },
    data: { title: "Color" },
  },
  {
    id: "3",
    type: "color",
    position: { x: 170, y: 530 },
    data: { title: "Color" },
  },
  {
    id: "4",
    type: "gradient",
    position: { x: 670, y: 170 },
    data: { title: "Output", colors: ['#ab1230', '#f7ae5e', '#ad48a9'] },
  },
];

const initialEdges: Rf.Edge[] = [];

type RFState = {
  nodes: Rf.Node[];
  edges: Rf.Edge[];
  onNodesChange: (changes: Rf.NodeChange[]) => void;
  onEdgesChange: (changes: Rf.EdgeChange[]) => void;
  onConnect: (connection: Rf.Connection) => void;
};

const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
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
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
  });
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } =
    useStore(selector);

  return (
    <div className="ReactFlowDemo">
      <Rf.ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Rf.Background style={{ backgroundColor: "FFFFFA" }} />
      </Rf.ReactFlow>
    </div>
  );
};

type ColorNodeProps = {
  title: string;
  color?: string;
};

const ColorNode = (props: Rf.NodeProps<ColorNodeProps>) => {
  const [color, setColor] = React.useState(
    props.data.color || `#${Math.floor(Math.random() * 16777215).toString(16)}`
  );

  return (
    <>
      <div className="ColorNode">
        <div className="ColorNode__title">{props.data.title}</div>
        <div className="ColorNode__contents">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <p>{color}</p>
          <Rf.Handle
            className="ColorNode__contents__handle"
            type="target"
            position="right"
          />
        </div>
      </div>
    </>
  );
};

type GradientNodeProps = {
  title: string;
  colors: string[];
};

const GradientNode = (props: Rf.NodeProps<GradientNodeProps>) => {
  const randomPercent = () => `${Math.round(Math.random() * 100)}%`;

  const gradientBackground = React.useMemo(() => {
    return props.data.colors.map(
      (color) =>
        `radial-gradient(at ${randomPercent()} ${randomPercent()}, ${color} 0px, transparent 50%)`
    );
  }, [props.data.colors]);

  return (
    <>
      <div className="GradientNode">
        <div className="GradientNode__title">{props.data.title}</div>
        <div className="GradientNode__contents">
          <div
            className="GradientNode__contents__gradient"
            style={{
              backgroundImage: gradientBackground.join(","),
            }}
          ></div>
          <Rf.Handle
            className="GradientNode__contents__handle"
            type="source"
            position="left"
          />
        </div>
      </div>
    </>
  );
};
