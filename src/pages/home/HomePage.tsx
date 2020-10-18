import React, { useState } from "react";
// import { Accordion, Button } from '@ui';
import styles from './HomePage.scss';

// import { Modal }  from '../../ui/Modal/Modal';
// import styles from '../../ui/Modal/Modal.scss'

import { Cover } from './partials/Cover/Cover';
import { About } from './partials/About/About';
import { MobileNavbar } from '../../components/MobileNavbar/MobileNavbar';


export interface HomePageProps {  
  
 }

export const HomePage: React.FC<HomePageProps> = ({}) => {
  
  const [isModalOpen, setModalState] = React.useState(false);
  
  const toggleModal = () => setModalState(!isModalOpen);

  // const [isClicked, setIsClicked] = useState('red');
  // const handleButtonClick = () => {
  //   setIsClicked(isClicked === 'red' ? 'blue' : 'red')
  // };
  // const styles: React.CSSProperties = { background: isClicked}

  return (
    <section className={styles.homepage}>
      <MobileNavbar></MobileNavbar>
      <Cover></Cover>
      <About></About>
      {/* 
      <div>        
        <Button onClick={handleButtonClick}>Что делать, если я не умею позировать</Button>
        <Collapse isCollapsed={ isCollapsed }>
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
      </div> */}

    </section>
  );
};
