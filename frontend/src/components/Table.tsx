import React from "react"

export interface FeatureColumn {
  key: string
  title: string
}

export interface FeatureRow {
  key: string
  label: string
}

export interface FeatureCell {
  rowKey: string
  columnKey: string
  content: React.ReactNode
}

export interface FeatureComparisonTableProps {
  columns: FeatureColumn[]
  rows: FeatureRow[]
  cells: FeatureCell[]
}

const FeatureComparisonTable: React.FC<FeatureComparisonTableProps> = ({
  columns,
  rows,
  cells,
}) => {
  const getCell = (rowKey: string, columnKey: string) =>
    cells.find(
      (c) => c.rowKey === rowKey && c.columnKey === columnKey
    )?.content

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse rounded-2xl overflow-hidden border border-gray-800">
          <thead>
            <tr>
              <th className="border-b border-r border-gray-800 p-6" />

              {columns.map((column) => (
                <th
                  key={column.key}
                  className="border border-gray-800 p-6 text-xl font-bold bg-purple-50"
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.key}>
                <th className="border border-gray-800 p-6 text-left font-semibold bg-white">
                  {row.label}
                </th>

                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="border border-gray-800 p-6 text-center"
                  >
                    {getCell(row.key, column.key)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden border border-gray-800 rounded-2xl overflow-hidden">

        <div className="grid grid-cols-3 border-b border-gray-800 bg-purple-50">
          {columns.map((c) => (
            <div
              key={c.key}
              className="p-4 text-center font-semibold border-r last:border-r-0 border-gray-800"
            >
              {c.title}
            </div>
          ))}
        </div>

        {rows.map((row) => (
          <div key={row.key} className="border-b last:border-b-0 border-gray-800">

            <div className="text-center font-semibold py-3 bg-white border-b border-gray-800">
              {row.label}
            </div>

            <div className="grid grid-cols-3">
              {columns.map((column) => (
                <div
                  key={column.key}
                  className="p-4 text-center border-r last:border-r-0 border-gray-800 bg-purple-50 text-xs"
                >
                  {getCell(row.key, column.key)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default FeatureComparisonTable