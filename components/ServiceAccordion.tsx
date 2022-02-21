import React, { FC, useRef, useState } from 'react';
import { catColor, category } from '../utils/catColor';

interface AccordionProps {
  title: category;
  content: React.ReactNode;
}

export const ServiceAccordion: FC<AccordionProps> = ({ title, content }) => {
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
        ? 'transform duration-700 ease'
        : 'transform duration-700 ease rotate-180'
    );
  }

  return (
    <li
      className={`flex flex-col border-y-4 rounded-lg my-8 border-y-gray-mid-light`}
    >
      <button
        className="py-6 box-border appearance-none cursor-pointer px-4 flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <h4 className="header ">{title}</h4>
        {/* <img
          alt="Chevron icon"
          className={`${rotate} inline-block`}
        /> */}
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
