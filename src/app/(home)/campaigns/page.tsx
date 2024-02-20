import List from "@/components/sections/home/List/List";
import React from "react";
import itemsCardsCampaigns from "./itemsCardsCampaigns";
import CardCampaign from "@/components/home/CardCampaign/CardCampaign";

const Campaigns = () => {
  return (
    <List title={'Mis campañas'}>
      {itemsCardsCampaigns.map((object, index) => (
        <CardCampaign
          key={index}
          img={object.img}
          title={object.title}
          description={object.text}
        />
      ))}
    </List>
  );
};

export default Campaigns;
