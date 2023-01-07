export default function TableInfo({ queryResponse }: any) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    {queryResponse?.head?.vars.map(
                      (head: any, index: number) => (
                        <th
                          key={`header-${index}`}
                          scope="col"
                          className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          {head}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {queryResponse?.results?.bindings.map(
                    (binding: any, index: number) => (
                      <tr
                        key={`bindings-${index + 1}`}
                        className="divide-x divide-gray-200"
                      >
                        {queryResponse?.head?.vars.map(
                          (v: any, index: number) => (
                            <td
                              key={`dummy-${index + 1}`}
                              className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                              {binding[v]?.value}
                            </td>
                          )
                        )}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
