import { ScrollArea, ScrollBar } from "./scroll-area";
 // Assuming ScrollBar is a custom component you have for horizontal scrolling

export function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border overflow-x-auto">
      <div className="flex w-max space-x-4 p-4">
        {/* Example content */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="shrink-0 p-4 bg-gray-200 rounded-md">
            Item {index + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
