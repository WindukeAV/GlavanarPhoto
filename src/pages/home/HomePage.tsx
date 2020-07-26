import React from "react";
import { Button, Collapse, Accordion } from '@ui';

export interface HomePageProps { }

export const HomePage: React.FC<HomePageProps> = ({ }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const handleButtonClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section>
      <div style={{ marginBottom: 64 }}>
        <Button onClick={handleButtonClick}>Toggle Kek</Button>
        <Collapse isCollapsed={isCollapsed}>
          <h1 style={{ marginBottom: 16 }}>Privet</h1>
        </Collapse>
        <Button onClick={handleButtonClick}>Toggle Kek</Button>
        <Collapse isCollapsed={isCollapsed}>
          <h1 style={{ marginBottom: 16 }}>Privet</h1>
        </Collapse>
      </div>
      <div>
        <Accordion
          tabs={[
            {
              key: "one",
              head: "CHIKI",
              content: "PUKI"
            },
            {
              key: "two",
              head: "LOL",
              content: "KEK"
            },
            {
              key: "three",
              head: "4eburek",
              content: "GOVNOED",
            }
          ]}
        />
      </div>
    </section>
  );
};
