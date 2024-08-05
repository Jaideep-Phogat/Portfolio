import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bento-grid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({id,title,description,img,imgClassName,className,titleClassName,spareImg} ) => (
          <BentoGridItem 
          id={id}
          key={id}
          title={title}
          description={description}
          className={className}
          imgClassName={imgClassName}
          titleClassName={titleClassName}
          img={img}
          spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
