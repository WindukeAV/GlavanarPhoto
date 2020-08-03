import React from "react";

export interface AccordionTab {
  key: string;
  head: React.ReactNode | ((handleClick: Function, isOpened: boolean) => React.ReactNode);
  content: React.ReactNode;
}

export interface AccordionProps {
  tabs: AccordionTab[
      
  ];
}

export const Accordion: React.FC<AccordionProps> = ({
  tabs
}) => {
  const [] = React.useState({});



  return (
    <div>
      {tabs.map((tab) => {
        return (
          <div key={tab.key}>           
            <div>{tab.head}</div>
            <div>{tab.content}</div>
          </div>
        );
      })}
    </div>
  );
};
