import Image from "next/image"
import styles from "./style.module.css"
import villepin from "../../../public/static/villepin.png"
import photoOpp from "../../../public/static/photo-opp.png"
import jauffret from "../../../public/static/jauffret.png"
import { PropsWithChildren } from "react"

export function GridPainting() {
  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <span className={styles.newspaper_name}>Le Monde</span>
      </header>
      <section className={styles.subgrid_1}>
        <div className={styles.subgrid_1_center_heading}>
          <ImageSub>
            Réunion du conscil des ministres pour activer une loi dutant de la
            guerre d'Algérie
          </ImageSub>
          <Heading size={1}>
            Face à la crise des banlieues, Villepin décrète l'état d'urgence
          </Heading>
        </div>
        <article className={styles.article_1}>
          <Heading size={3}>Fébrelité</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            fugit praesentium vitae magni sapiente consequatur repudiandae
            beatae nostrum, voluptatem voluptatibus doloribus ipsam quaerat
            totam, earum quod. Reprehenderit eos odio quia. Eius odio temporibus
            eligendi sed velit similique eum! Voluptatum accusamus quisquam
            numquam labore non deserunt, nemo quia explicabo nihil architecto
            velit alias dignissimos natus eaque porro quidem? Est, ullam
            dolores!
          </Text>
        </article>
        <div className={styles.subgrid_1_center_image}>
          <div>
            <Image src={villepin} alt="Dominique de Villepin" />
            <ImageSub>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </ImageSub>
          </div>
          <ul className={styles.subgrid_1_minis}>
            <li>
              <Heading size={4}>SÉCURITÉ</Heading>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                officia expedita minus sit nobis voluptatem
              </Text>
            </li>
            <li>
              <Heading size={4}>MAIRES</Heading>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                officia expedita minus sit nobis voluptatem
              </Text>
            </li>
            <li>
              <Heading size={4}>VICTIMES</Heading>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                officia expedita minus sit nobis voluptatem
              </Text>
            </li>
            <li>
              <Heading size={4}>EUROPE</Heading>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                officia expedita minus sit nobis voluptatem
              </Text>
            </li>
          </ul>
        </div>
        <article className={styles.article_2}>
          <Heading size={2}>
            Des négociations difficiles sur l'Unedic commencent
          </Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quaerat illum vero sint omnis maxime sequi facere? Officiis vero
            neque repellat voluptatem? Veniam facilis culpa ipsam exercitationem
            at perferendis cupiditate. Harum molestias aperiam ipsam asperiores
            ex cumque quas ea porro magni, quo, tempora architecto tenetur
            doloribus nam id corporis enim soluta labore ullam debitis. Eveniet
            nesciunt nihil ipsam ea consequatur?
          </Text>
          <div className={styles.divider} />
          <Heading size={2}>
            Noël Forgeard: l'Europe doit miser sur le spatial
          </Heading>
          <Text>
            Voluptate enim non ipsum corrupti nulla rem cumque, consectetur
            quisquam? Accusamus, blanditiis error laudantium quibusdam natus
            distinctio, similique pariatur delectus doloremque tenetur ut
            perspiciatis consequuntur cumque velit? Deleniti, odit ipsa.
          </Text>
        </article>
      </section>
      <section className={styles.subgrid_2}>
        <aside className={styles.aside_1}>
          <Heading size={3}>L'enquéte sur Clichy-sous-Bois</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum
            ipsum facilis iusto ducimus tempora, architecto illo voluptate
            neque...
          </Text>
          <Heading size={4}>PORTRAIT</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum
            ipsum facilis iusto ducimus tempora, architecto illo voluptate
            neque...
          </Text>
          <Heading size={4}>CINÉMA</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum
            ipsum facilis iusto ducimus tempora, architecto illo voluptate
            neque...
          </Text>
          <div className={styles.red_box}>
            <span>
              Some text here <br />
              <strong>then becomes bold</strong>
            </span>
          </div>
        </aside>
        <article className={styles.article_3}>
          <Heading size={2}>
            Weyergans, le prix Concourt, sa mère, sa sœur et encore lui
          </Heading>

          <Image src={photoOpp} alt="A man takes a photo of a woman." />
          <sub className={styles.img_subtitle}>
            Something something something dark side
          </sub>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsam? Aliquid similique, vel sed error eius maiores dolorum autem,
            perspiciatis dolore quos dicta veritatis debitis vitae aspernatur
            asperiores nihil quibusdam? Adipisci cumque praesentium nostrum
            dolores tenetur iste, temporibus earum porro est soluta! Minus ut
            aperiam id esse saepe quos pariatur iste, dicta culpa enim.
            Perferendis, doloremque. Ipsam tempore totam sed!
          </Text>
        </article>
        <article className={styles.article_4}>
          <Heading size={3}>
            Plus rien à signaler à la frontière syro-libanaise
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            maiores error praesentium a perferendis similique ipsam
            exercitationem magni. Praesentium laudantium, nihil nemo facere
            assumenda id consequuntur voluptas excepturi repellendus
            repudiandae. Suscipit maxime ducimus ab omnis a sunt soluta ad
            voluptas aliquid, unde dolore eum magni expedita eveniet ex amet
            error facilis illo dolores alias quidem doloribus sint. Debitis,
            reiciendis minus!
          </Text>
        </article>
        <aside>
          <Image src={jauffret} alt="Idk what a jauffret is." />
        </aside>
      </section>
    </div>
  )
}

function Text(props: PropsWithChildren) {
  return <p className={styles.text}>{props.children}</p>
}

function ImageSub(props: PropsWithChildren) {
  return <p className={styles.img_subtitle}>{props.children}</p>
}

function Heading(props: PropsWithChildren<{ size: number }>) {
  const { size, children } = props 
  if (typeof children !== 'string') throw new Error("Children must be a string")
  if (size < 1 || size > 6) throw new Error("Invalid heading size")
  const className = styles[`heading_${size}`]

  switch (size) {
    case 1:
      return <h1 className={className}>{children}</h1>
    case 2:
      return <h2 className={className}>{children}</h2>
    case 3:
      return <h3 className={className}>{children}</h3>
    case 4:
      return <h4 className={className}>{children}</h4>
    case 5:
      return <h5 className={className}>{children}</h5>
    default:
      return <span>{children}</span>
  }
}
