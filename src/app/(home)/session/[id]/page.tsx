import NewLayoutHeader from "@/components/home/NewLayout/NewLayoutHeader";
import Chat from "./Chat";
import styles from "./page.module.css";

const SessionPage = ({params}: any) => {
  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <NewLayoutHeader title={"Golinjam"} slug={[{ label: "Campañas", href: "/campaigns" }, { label: "Sesión 1" }]} />
        <Chat sessionId={params.id}/>
      </div>
    </section>
  );
};

export default SessionPage;