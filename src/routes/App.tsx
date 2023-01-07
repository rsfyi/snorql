import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import QueryListItem from '../components/QueryListItem';

import { queries } from '../data';

function App() {
  const [queryList, setQueryList] = useState<any>(null);

  useEffect(() => {
    setQueryList(queries);
  }, [setQueryList]);

  return (
    <div className="mx-auto flex h-screen w-screen max-w-7xl flex-col bg-gray-50">
      <div className="mx-auto w-full max-w-7xl bg-purple-200 py-6 px-2 shadow">
        <h2 className="text-2xl text-gray-600 underline">SNORQL</h2>
      </div>
      <div className="flex w-full">
        <div className="h-[90vh] w-[500px] overflow-y-auto border-r border-gray-200">
          <div className="flex h-full flex-col">
            {queryList?.map((query: any, index: number) => (
              <div
                className="prose border-b border-dashed py-4 text-left shadow-sm hover:cursor-pointer hover:bg-purple-100 lg:prose-sm"
                key={`query-${index + 1}`}
              >
                <div className="pl-3">
                  {query?.tags?.split(',').map((tag: any, index: number) => (
                    <span
                      key={`tags-${index + 1}`}
                      className="ml-2 mb-2 rounded-full px-2 py-1 text-[10px] tracking-wider ring-1 ring-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <QueryListItem
                  title={query.title}
                  tags={query.tags}
                  id={query.id}
                />
              </div>
            ))}
          </div>
        </div>
        <main className="w-2/3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
