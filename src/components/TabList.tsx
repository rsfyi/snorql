import { Tab } from '@headlessui/react';
import { JsonViewer } from '@textea/json-viewer';
import { useState } from 'react';
import D3Graph from './GraphComponent';
import TableInfo from './TableInfo';

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

export default function TabList({ queryResponse, error }: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
              <JsonViewer value={queryResponse} />
            )}

            {queryResponse && selectedIndex === 1 && (
              <TableInfo queryResponse={queryResponse} />
            )}

            {queryResponse && selectedIndex === 2 && (
              <D3Graph queryResponse={queryResponse} />
            )}

            {error && <pre>{error}</pre>}
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
