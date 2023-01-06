import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { queries } from '../data';

export default function EditorPage() {
  let { id }: any = useParams();
  const [currentQuery, setCurrentQuery] = useState<any>(null);

  useEffect(() => {
    const queriesList = queries;
    const currentQuery = queriesList.filter(
      (query: any) => parseInt(query.id) === parseInt(id)
    )[0];
    setCurrentQuery(currentQuery);
  }, [id, setCurrentQuery]);

  return (
    <div>
      <div className="flex flex-col items-start space-y-6 px-4">
        <h2 className="text-xl font-semibold text-gray-600 underline">
          {currentQuery?.title}
        </h2>
        <div className="mt-4 pl-3">
          {currentQuery?.tags?.split(',').map((tag: any, index: number) => (
            <span
              key={`tags-${index + 1}`}
              className="ml-2 mb-2 rounded-full bg-purple-50 px-2 py-1 text-sm tracking-wider ring-1 ring-purple-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          <h2>Editor Goes Here ...</h2>
        </div>
      </div>
    </div>
  );
}
