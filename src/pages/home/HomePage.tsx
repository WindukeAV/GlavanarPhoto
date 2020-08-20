import React from "react";
// import { Button, Collapse, Accordion } from '@ui';

// import styles from '*.css';

import { Cover } from './partials/Cover/Cover';


export interface HomePageProps { }

export const HomePage: React.FC<HomePageProps> = ({ }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const handleButtonClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Cover/>
    // <section>
    //   <div  style={{  }}>
    //     <Button onClick={handleButtonClick}>title</Button>
    //     <Collapse isCollapsed={isCollapsed}>
    //       <h1 style={{  }}>content</h1>
    //     </Collapse>
    //     <Button onClick={handleButtonClick}>title</Button>
    //     <Collapse isCollapsed={isCollapsed}>
    //       <h1 style={{  }}>content</h1>
    //     </Collapse>
    //   </div>
    //   <div>
    //     <Accordion
    //       tabs={[
    //         {              
    //           key: "one",
    //           head: "CHIKI",
    //           content: "PUKI"
    //         },
    //         {
    //           key: "two",
    //           head: "LOL",
    //           content: "KEK"
    //         },
    //         {
    //           key: "three",
    //           head: "4eburek",
    //           content: "GOVNOED",
    //         }
    //       ]}
    //     />
    //   </div>
    // </section>
  );
};
