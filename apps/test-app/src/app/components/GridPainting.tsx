import Image from "next/image"
import styles from "./style.module.css"
import villepin from "../../../public/static/villepin.png"

export function GridPainting() {
  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <span className={styles.newspaper_name}>Le Monde</span>
      </header>
      <section className={styles.subgrid_1}>
        <div className={styles.subgrid_1_center_heading}>
          <p className={styles.subgrid_1_center_sub}>
            Réunion du conscil des ministres pour activer une loi dutant de la
            guerre d'Algérie
          </p>
          <h1 className={styles.subgrid_1_center_title}>
            Face à la crise des banlieues, Villepin décrète l'état d'urgence
          </h1>
        </div>
        <article className={styles.article_1}>
          <h3>Fébrelité</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            fugit praesentium vitae magni sapiente consequatur repudiandae
            beatae nostrum, voluptatem voluptatibus doloribus ipsam quaerat
            totam, earum quod. Reprehenderit eos odio quia. Eius odio temporibus
            eligendi sed velit similique eum! Voluptatum accusamus quisquam
            numquam labore non deserunt, nemo quia explicabo nihil architecto
            velit alias dignissimos natus eaque porro quidem? Est, ullam
            dolores!
          </p>
        </article>
        <div className={styles.subgrid_1_center_image}>
          <div>
            <Image src={villepin} alt="Dominique de Villepin" />
            <p className={styles.center_image_sub}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <ul className={styles.subgrid_1_minis}>
            <li>
              <h4 className={styles.mini_heading}>SÉCURITÉ</h4>
              <p className={styles.text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                officia expedita minus sit nobis voluptatem
              </p>
            </li>
            <li>
              <h4 className={styles.mini_heading}>MAIRES</h4>
              <p className={styles.text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                officia expedita minus sit nobis voluptatem
              </p>
            </li>
            <li>
              <h4 className={styles.mini_heading}>VICTIMES</h4>
              <p className={styles.text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                officia expedita minus sit nobis voluptatem
              </p>
            </li>
            <li>
              <h4 className={styles.mini_heading}>ERUOPE</h4>
              <p className={styles.text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                officia expedita minus sit nobis voluptatem
              </p>
            </li>
          </ul>
        </div>
        <article className={styles.article_2}>
          <h2 className={styles.article_heading_2}>
            Des négociations difficiles sur l'Unedic commencent
          </h2>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quaerat illum vero sint omnis maxime sequi facere? Officiis vero
            neque repellat voluptatem? Veniam facilis culpa ipsam exercitationem
            at perferendis cupiditate. Harum molestias aperiam ipsam asperiores
            ex cumque quas ea porro magni, quo, tempora architecto tenetur
            doloribus nam id corporis enim soluta labore ullam debitis. Eveniet
            nesciunt nihil ipsam ea consequatur?
          </p>
          <div className={styles.divider} />
          <h2 className={styles.article_heading_2}>
            Noël Forgeard: l'Europe doit miser sur le spatial
          </h2>
          <p className={styles.text}>
            Voluptate enim non ipsum corrupti nulla rem cumque, consectetur
            quisquam? Accusamus, blanditiis error laudantium quibusdam natus
            distinctio, similique pariatur delectus doloremque tenetur ut
            perspiciatis consequuntur cumque velit? Deleniti, odit ipsa.
          </p>
        </article>
      </section>
      <section className={styles.subgrid_2}></section>
    </div>
  )
}
