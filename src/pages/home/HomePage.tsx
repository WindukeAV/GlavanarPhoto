import React from "react";
import { Accordion, Collapse, Button } from '@ui';

import { MobileNavbar } from '../../components/MobileNavbar/MobileNavbar';
import { Cover } from './partials/Cover/Cover';


export interface HomePageProps { }

export const HomePage: React.FC<HomePageProps> = ({ }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const handleButtonClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (   

    <section>
      <MobileNavbar/>
      <Cover/>
      <div>        
        <Button onClick={handleButtonClick}>Что делать, если я не умею позировать</Button>
        <Collapse isCollapsed={isCollapsed}>
          <h1>
            Выставить человека в кадре - задача фотографа, а не модели. Это не Ваша "головная боль", а моя. 
          </h1>
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
