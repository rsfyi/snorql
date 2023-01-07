import { Tab } from '@headlessui/react';
import { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';
import { useParams } from 'react-router-dom';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

let tabItems = [
  {
    id: 1,
    name: 'Response',
  },
  {
    id: 2,
    name: 'Table',
  },
  {
    id: 3,
    name: 'Graph',
  },
];

export default function TabList() {
  let { id }: any = useParams();
  const [queryResponse, setQueryResponse] = useState<any>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const getQueryResult = async () => {
      const result = await (
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      ).json();
      setQueryResponse(result);
    };

    if (selectedIndex === 0) {
      getQueryResult();
    }
  }, [setQueryResponse, selectedIndex, id]);

  return (
    <div className="w-full px-2 py-8 sm:px-0">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex space-x-1 rounded-xl bg-purple-900 p-1">
          {tabItems.map((item: any) => (
            <Tab
              key={`tabItem-${item.id}`}
              className={({ selected }) =>
                classNames(
                  'w-48 rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {item.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 mb-6 h-full w-full">
          <div className="mt-6">
            {queryResponse && selectedIndex === 0 && (
              <ReactJson src={queryResponse} />
            )}
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
