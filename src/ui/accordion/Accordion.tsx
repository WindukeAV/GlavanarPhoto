import React from "react";
import { Collapse } from '@ui/collapse/Collapse';

export interface AccordionTab {
  key: string;
  head: React.ReactNode | ((handleClick: Function, isOpened: boolean) => React.ReactNode);
  content: React.ReactNode;
}

export interface AccordionState {
  isCollapsedMap: {
    [key: string]: boolean;
  };
}

export interface AccordionProps {
  tabs: AccordionTab[];
}

const getInitialTabsIsCollapsedMap = (tabs: AccordionTab[]): AccordionState["isCollapsedMap"] => {
  const map: AccordionState["isCollapsedMap"] = {};

  for (const tab of tabs) {
    map[tab.key] = true;
  }
 
  return map;
}





export const Accordion: React.FC<AccordionProps> = ({
  tabs
}) => {
  const [tabsIsCollapsedMap, setTabsIsCollapsedMap] =
    React.useState<AccordionState["isCollapsedMap"]>(getInitialTabsIsCollapsedMap(tabs));

   
    return (
    <div>
      {tabs.map((tab) => {
         console.log(tabsIsCollapsedMap[tab.key])

        return (
          <div key={tab.key}>
            <div onClick={() => {
              setTabsIsCollapsedMap({
                ...tabsIsCollapsedMap,
                [tab.key]: !tabsIsCollapsedMap[tab.key],
              });
            }}>{tab.head}</div>
            <Collapse isCollapsed={tabsIsCollapsedMap[tab.key]}>
              {tab.content}
            </Collapse>
          </div>
        );
      })}
    </div>
  );
};
