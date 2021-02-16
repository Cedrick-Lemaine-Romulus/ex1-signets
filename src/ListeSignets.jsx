import './ListeSignets.scss';
import Produit from './Signet';
import tabSignets from './data/signets.json'

export default function ListesSignets(props) {
    return (
        <div className="ListeSignets">
            <ul>
                {
                    tabSignets.map((signet) => 
                        <Produit 
                            key={signet.id}
                            id={signet.id}
                            titre={signet.titre}
                            couleur={signet.couleur}
                            dateModification={signet.dateModification}
                        />
                    )
                }
            </ul>
        </div>
    );
}