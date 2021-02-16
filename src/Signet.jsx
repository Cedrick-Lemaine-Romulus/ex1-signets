import './Signet.scss';
import BtnPlusInfo from './BtnPlusInfo';
import BtnTriage from './BtnTriage';

export default function Signet(props) {
    return (
        <li className="Signet">
            <BtnTriage />
            <div className="image">
                <img src={'images-signets/' + props.id + '.png'} alt={props.titre}/>
            </div>
            <div className="info">
                <h3>{props.titre}</h3>
                <h4>Modifié : {props.dateModification}</h4>
                <BtnPlusInfo />
            </div>
        </li>
    );
}