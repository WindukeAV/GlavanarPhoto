import React from "react";
import ResizeObserver from "react-resize-observer";
import styles from "./Collapse.scss";

export interface CollapseProps {
  isCollapsed: boolean;
}

export const Collapse: React.FC<CollapseProps> = ({ isCollapsed, children }) => {
  const [height, setHeight] = React.useState<number | string>("auto");
  const contentRef = React.useRef<HTMLDivElement>();

  const calculateContentHeight = () => {
    if (!contentRef.current) return;

    const collapseNode = contentRef.current;
    const height = collapseNode.clientHeight;

    setHeight(height);
  };

  React.useEffect(() => {
    calculateContentHeight();
  }, []);

  const currentHeight = isCollapsed ? 0 : height;

  return (
    <div className={styles.Collapse} style={{ height: currentHeight }}>
      <div ref={contentRef} className={styles.Collapse__content}>
        {children}
        <ResizeObserver onResize={calculateContentHeight} />
      </div>
    </div>
  );
};
