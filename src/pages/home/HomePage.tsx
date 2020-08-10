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
      <div  style={{  }}>
        <Button onClick={handleButtonClick}>Что делать, если я не умею позировать</Button>
        <Collapse isCollapsed={isCollapsed}>
          <h1 style={{  }}>
            Выставить человека в кадре - задача фотографа, а не модели. Это не Ваша "головная боль", а моя. 
          </h1>
        </Collapse>
        
        <Button onClick={handleButtonClick} >
          Могу ли я использовать фотографии с одной съемки?
        </Button>

        <Collapse isCollapsed={isCollapsed}>
          <h1 style={{  }}>
            
          </h1>
        </Collapse>

        <Button onClick={handleButtonClick}>
          Как правильно придумывать сценарий съемки?
        </Button>

        <Collapse isCollapsed={isCollapsed}>
          <h1 style={{  }}>
          
          </h1>
        </Collapse>

        <Button onClick={handleButtonClick}>
          У меня была профессиональная фотосессия и результат меня разочаровал
        </Button>

        <Collapse isCollapsed={isCollapsed}>
          <h1 style={{  }}>
            
          </h1>
        </Collapse>

        <Button onClick={handleButtonClick}>
          Меня часто приглашают сниматься бесплатно фотографы в обмен на рекламу
        </Button>

        <Collapse isCollapsed={isCollapsed}>
          <h1 style={{  }}>
            
          </h1>
        </Collapse>

        <Button onClick={handleButtonClick}>Мне нужна каталожная предметная съемка, как можно сделать ее уникальной и интересной?</Button>

        <Collapse isCollapsed={isCollapsed}>
          <h1 style={{  }}>
            
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
