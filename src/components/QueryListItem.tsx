import { Disclosure, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

export default function QueryListItem({
  title,
  id,
  imgUrl = 'https://sparql-playground.sib.swiss/queries/cartoon-rdf-type.png',
}: any) {
  return (
    <Disclosure>
      <Disclosure.Button className=" w-full pl-4 text-left">
        <Link to={`/dashboard/${id}`}>{title}</Link>
      </Disclosure.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel>
          {imgUrl && (
            <div>
              <img src={imgUrl} alt={title} />
            </div>
          )}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}
