import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { queries } from '../data';

export default function D3Graph({ queryResponse }: any) {
  let { id }: any = useParams();

  useEffect(() => {
    const queriesList = queries;
    const currentQuery = queriesList.filter(
      (query: any) => parseInt(query.id) === parseInt(id)
    )[0];

    (window as any)?.d3sparql?.query(
      'https://dbpedia.org/sparql',
      `${currentQuery.query}`,
      (json: any) => {
        var config = {
          radius: 10,
          charge: -500,
          distance: 100,
          width: 1000,
          height: 750,
          selector: '#result',
        };

        (window as any)?.d3sparql.forcegraph(json, config);
      }
    );
  }, []);

  return <div id="result" />;
}
