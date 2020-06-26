import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonBackButton, IonButtons,IonMenuButton,IonIcon, IonItem, IonLabel, IonCheckbox, IonFab, IonFabButton } from '@ionic/react';
import React, { useState } from 'react';
import {optionsOutline, add, arrowBack, arrowBackOutline, arrowBackCircle, arrowBackSharp, arrowForward, arrowDownCircleOutline} from "ionicons/icons" ;
import './EditarPerfil.css';

const Home: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolbar">
        <IonButtons slot="start"><IonBackButton defaultHref="tab3" color="dark" text="" icon={arrowBackOutline}> </IonBackButton></IonButtons>

          <IonTitle color="dark"><h3>Perfil</h3></IonTitle>
        </IonToolbar>
      </IonHeader>
      </IonPage>
  );
};

export default Home;