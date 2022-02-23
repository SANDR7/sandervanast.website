import React, { FC, useRef, useState } from 'react';
import { catColor, category } from '../utils/catColor';

interface AccordionProps {
  title: category;
  content: React.ReactNode;
  number: number;
}

export const ServiceAccordion: FC<AccordionProps> = ({
  title,
  content,
  number
}) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('transform duration-700 ease');

  const contentSpace = useRef(null);
  const color = catColor(title);

  function toggleAccordion() {
    setActive(active === false ? true : false);
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? 'transform transition-transform '
        : 'transform rotate-180 transition-transform'
    );
  }

  return (
    <li
      className={`flex flex-col border-y-4 rounded-lg my-3 border-y-gray-mid-light`}
    >
      <button
        className="py-4 box-border appearance-none cursor-pointer px-4 flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <div className='flex items-center'>
          <span className='mr-10 text-gray-mid-light dark:text-gray-mid-dark'>
          0{number + 1}
          </span>
          <h3 className="text-xl">{title}</h3>
        </div>
        <i className={`fa-solid fa-angle-down ${rotate}`}></i>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto overflow-y-hidden transition-max-height duration-700 ease-in-out"
      >
        <div className="pb-10 px-4">{content}</div>
      </div>
    </li>
  );
};
