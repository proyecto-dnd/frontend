import LinkButton from "@/components/common/buttons/LinkButton";
import style from "./Member.module.css";
import CardMember from "../CardMember/CardMember";
import items from "./items";

const Member = () => {
  return (
    <section className={` section landing-padding`}>
      <div className={`${style.member}` + ` content`}>
        <h2>
          <span>Hazte miembro y accede a </span>
          <span className={`${style.span}`}>contenido exclusivo</span>
        </h2>
        <div className={`${style.cardContainer}`}>
          { items.map((object, index) => (
            <CardMember
              key={index}
              icon={object.icon}
              title={object.title}
              text={object.text}
            />
          ))}
        </div>
        <div className={`${style.conteinerButton}`}>
          <LinkButton className={`${style.buttonRed}`} href={"/"}>
            Soy Máster
          </LinkButton>
          <LinkButton className={`${style.buttonGrey}`} href={"/"}>
            Soy Jugador
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Member;
