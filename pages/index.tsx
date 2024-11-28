import { GetServerSideProps } from "next";
import { useState } from "react";
import ReadMore from "../components/ReadMore";
import DataTable, { TableData } from "../components/DataTable";

interface HomeProps {
  tableData: TableData[];
}

export default function Home({ tableData }: HomeProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a volutpat dui. Sed id ipsum ac lectus malesuada ullamcorper. Nulla facilisi. Pellentesque vel odio orci. Vivamus non fringilla enim. Fusce eu mi nec felis fringilla tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a volutpat dui. Sed id ipsum ac lectus malesuada ullamcorper. Nulla facilisi. Pellentesque vel odio orci. Vivamus non fringilla enim. Fusce eu mi nec felis fringilla tincidunt.";

  return (
    <div className="p-5 font-sans">
      {/* First Div */}
      <div className="border-2 p-4 mb-5 relative transition-all duration-300">
        <div className="p-5 flex flex-col">
          <p>This is the relative box. The height will adjust based on the content inside.</p>

          <div className="w-[95%] bg-gray-100">
            <div className="p-4">
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

      {/* Second Div (Reusable Data Table) */}
      <div className="border-2 border-gray-500 p-4">
        <h2 className="text-lg font-bold mb-3">Data Table</h2>
        <DataTable data={tableData} columns={["#", "Name", "Age", "City"]} />
      </div>
    </div>
  );
}

// Fetch data server-side
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // Simulated data fetch (Replace with an API call or database query)
  const tableData: TableData[] = [
    { id: 1, name: "John Doe", age: 28, city: "New York" },
    { id: 2, name: "Jane Smith", age: 34, city: "Los Angeles" },
    { id: 3, name: "Sam Wilson", age: 23, city: "Chicago" },
  ];

  return {
    props: {
      tableData,
    },
  };
};
