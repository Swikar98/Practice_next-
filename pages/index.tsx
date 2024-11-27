import { useState } from "react";
import ReadMore from "./components/ReadMore";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a volutpat dui. Sed id ipsum ac lectus malesuada ullamcorper. Nulla facilisi. Pellentesque vel odio orci. Vivamus non fringilla enim. Fusce eu mi nec felis fringilla tincidunt.";

  return (
    <div className="p-5 font-sans">
      {/* First Div */}
      <div
        className={`border-2 p-4 mb-5 relative transition-all duration-300 ${
          isExpanded ? "h-[220px]" : "h-[200px] overflow-hidden"
        }`}
      >
        <div className="border-2 border-green-500 p-5 flex flex-col">
          <p>This is the relative box. The height will adjust based on the content inside.</p>

          <div className=" w-[95%] bg-gray-100 absolute top-16">
            <div className="p-4  ">
              <h1 className="text-2xl font-bold mb-4">Read More Component</h1>
              <ReadMore
                text={longText}
                maxLength={100}
                onToggleExpand={(expanded) => setIsExpanded(expanded)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Div (Data Table) */}
      <div className="border-2 border-gray-500 p-4">
        <h2 className="text-lg font-bold mb-3">Data Table</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 p-2">#</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Age</th>
              <th className="border border-gray-300 p-2">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">John Doe</td>
              <td className="border border-gray-300 p-2">28</td>
              <td className="border border-gray-300 p-2">New York</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">2</td>
              <td className="border border-gray-300 p-2">Jane Smith</td>
              <td className="border border-gray-300 p-2">34</td>
              <td className="border border-gray-300 p-2">Los Angeles</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">3</td>
              <td className="border border-gray-300 p-2">Sam Wilson</td>
              <td className="border border-gray-300 p-2">23</td>
              <td className="border border-gray-300 p-2">Chicago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
