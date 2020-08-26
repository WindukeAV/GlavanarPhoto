import React from "react";
import { Accordion } from '@ui';
import { Cover } from './partials/cover/Cover';

export interface HomePageProps { }

export const HomePage: React.FC<HomePageProps> = ({ }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const handleButtonClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section>
      <Cover />
      {/* <div>
        <Button onClick={handleButtonClick}>Что делать, если я не умею позировать</Button>
        <Collapse isCollapsed={isCollapsed}>
          <h1>
            Выставить человека в кадре - задача фотографа, а не модели. Это не Ваша "головная боль", а моя. 
          </h1>
        </Collapse> */}
      {/* <div>
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
      </div> */}
    </section>
  );
};
