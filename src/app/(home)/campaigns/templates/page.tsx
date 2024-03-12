import Button from "@/components/common/buttons/Button";
import styles from "./page.module.css";
import NewLayout from "@/components/home/NewLayout/NewLayout";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CardCampaign from "@/components/home/Campaign/CardCampaign/CardCampaign";
import CampaignTemplatesList from "@/components/home/Campaign/CampaignTemplatesList/CampaignTemplatesList";

const getCampaignsTemplates = async () => {
  const data = {
    campaignsTemplates: [],
    info: "",
  };
  try {
    const response = await fetch(process.env.URL + "/api/campaignsTemplates");
    data.campaignsTemplates = await response.json();
    data.info = "Success";
  } catch (error: any) {
    data.info = error.message;
  }
  return data;
};

const TemplateCampaign = async () => {
  const data = await getCampaignsTemplates();

  return (
    <NewLayout
      title="Crear campaña"
      slug={[
        { label: "Campañas", href: "/campaigns" },
        { label: "Plantillas" },
      ]}
    >
      <section className={styles.container}>
        <div>
          <h3 className={styles.h3}>Crear campaña</h3>
          <p className={styles.p}>
            Crea una campaña 100% personalizada desde cero.
          </p>
          <Link href={"/campaigns/new"}>
            <Button>Crea una campaña desde cero</Button>
          </Link>
          <div className={styles.separacion}>
            <hr />
            <p className={styles.O}>O</p>
            <hr />
          </div>
        </div>
        <div>
          <h3 className={styles.h3}>Plantillas</h3>
          <p className={styles.p}>
            Utiliza una de nuestras plantillas y crea tu campaña en segundos
          </p>
          <CampaignTemplatesList campaignsTemplates={data.campaignsTemplates}/>
        </div>
      </section>
    </NewLayout>
  );
};

export default TemplateCampaign;
