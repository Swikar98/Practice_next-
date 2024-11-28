export interface TableData {
    id: number;
    name: string;
    age: number;
    city: string;
  }
  
  interface DataTableProps {
    data: TableData[];
    columns: string[];
  }
  
  export default function DataTable({ data, columns }: DataTableProps) {
    return (
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            {columns.map((col, index) => (
              <th key={index} className="border border-gray-300 p-2">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{row.name}</td>
              <td className="border border-gray-300 p-2">{row.age}</td>
              <td className="border border-gray-300 p-2">{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  