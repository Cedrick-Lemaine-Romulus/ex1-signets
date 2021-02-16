import './Page.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';
import BtnAjoutSignet from './BtnAjoutSignet';
import Pied2Page from './Pied2Page';

export default function Page() {
  return (
    <div className="Page">
      <Entete />
      <section className="contenuPrincipal">
        <ListeSignets />
        <BtnAjoutSignet />
      </section>
      <Pied2Page avecNom="Cédrick Lemaine Romulus"/>
    </div>
  );
}
