import React, { useMemo } from "react";
import classes from "./PDP.module.css";
import { getProduct, products } from "src/utils/getProducts";
import { useParams } from "react-router-dom";

export default function PDP() {
  let { id } = useParams();
  const product = useMemo(() => {
    if (!id) return null;

    return getProduct(Number(id));
  }, [id]);

  if (!product) return null;

  const { name, imageLarge } = product;
  return (
    <main className={classes.main}>
      <header></header>
      <img
        src={imageLarge}
        alt={name}
        style={{ viewTransitionName: "product-image" }}
      />
      <section>
        <h1>{name}</h1>
        <p className={classes.price}>$279.99</p>
        <ul className={classes.size}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
        <div className={classes.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam
            recusandae hic id ab consectetur odit saepe nihil non nostrum iusto
            eum repudiandae in laborum tempore maiores fuga sapiente illum
            tempora, autem fugiat quasi. Similique iste aperiam officia
            aspernatur harum voluptatibus, eos tempore facilis ratione
            blanditiis eius sint at temporibus consequuntur, in cumque,
            voluptates accusamus eveniet! Ea, tenetur a nulla incidunt et ab?
            Quasi error minus quod magni recusandae. Eius commodi rem rerum
            aliquid voluptates facere odio temporibus cupiditate a inventore,
            vero dolore alias culpa nostrum veritatis nulla. Perspiciatis sunt
            corrupti laboriosam iusto voluptate nobis repellat, officiis cum
            magnam harum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            voluptatem voluptate, ut dolore consequuntur, optio debitis nihil
            ipsum reprehenderit aut error iste corporis blanditiis? Neque saepe
            dolores necessitatibus in magni vero quaerat quas possimus fuga et
            facere ratione sequi repellat, dicta accusamus itaque. Ad similique
            totam harum quis vero nisi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam
            quam nemo ipsa aliquid dolores fuga velit necessitatibus? Nemo
            excepturi facilis veritatis laudantium, perspiciatis aspernatur
            cupiditate quae pariatur sequi aut? Vitae officia iste facere,
            mollitia veritatis, temporibus voluptas aliquam nesciunt cupiditate
            corporis sunt vel odit commodi itaque laudantium non aperiam illum
            placeat. Error minima modi reiciendis temporibus, iure eligendi
            sequi adipisci assumenda magnam ducimus labore architecto, vitae
            eius. Tenetur repellendus voluptate praesentium, quia fuga vel ab
            reprehenderit quidem, beatae blanditiis, molestiae error? Possimus
            minus officiis excepturi, quia a ducimus. At ratione, beatae ea
            recusandae dolore asperiores suscipit doloremque iure sit, labore
            nulla nihil? Eos expedita, cumque inventore sapiente sunt illo nobis
            nisi commodi repellat laborum magni molestiae dicta atque, enim,
            odit veritatis cupiditate explicabo doloremque officiis minima alias
            unde voluptatem? Eum deleniti repellendus voluptates perferendis
            quaerat, ab culpa corrupti dicta labore porro! Placeat amet
            deleniti, maiores cumque repudiandae sit maxime molestias. Nobis
            expedita ad aperiam porro provident, labore nisi illum natus
            suscipit sapiente eaque laudantium. Laboriosam praesentium sint
            eveniet saepe repellendus libero alias odio aliquid facere facilis
            ipsa labore est incidunt, amet ad necessitatibus eaque soluta nam
            aperiam magni itaque. Unde totam voluptatem, quas maxime autem
            voluptates consequatur neque ex.{" "}
          </p>
        </div>
      </section>
    </main>
  );
}
