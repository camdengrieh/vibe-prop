import { ArrowLeftRight, Eraser, LineChart, MousePointer, Move, Pencil, Settings, Type, ZoomIn } from "lucide-react";

export function TradingSidebar() {
  return (
    <div className="flex w-12 flex-col border-r border-gray-800">
      <button className="p-3 hover:bg-gray-800">
        <MousePointer className="h-5 w-5" />
      </button>
      <button className="p-3 hover:bg-gray-800">
        <Move className="h-5 w-5" />
      </button>
      <button className="p-3 hover:bg-gray-800">
        <LineChart className="h-5 w-5" />
      </button>
      <button className="p-3 hover:bg-gray-800">
        <Pencil className="h-5 w-5" />
      </button>
      <button className="p-3 hover:bg-gray-800">
        <Type className="h-5 w-5" />
      </button>
      <button className="p-3 hover:bg-gray-800">
        <Eraser className="h-5 w-5" />
      </button>
      <button className="p-3 hover:bg-gray-800">
        <ZoomIn className="h-5 w-5" />
      </button>
      <button className="p-3 hover:bg-gray-800">
        <ArrowLeftRight className="h-5 w-5" />
      </button>
      <button className="mt-auto p-3 hover:bg-gray-800">
        <Settings className="h-5 w-5" />
      </button>
    </div>
  );
}
