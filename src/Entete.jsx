import './Entete.scss';

export default function Entete(props) {
    return (
        <header className="Entete">
            <ul className="navPrincipale">
                <li>Signet</li>
            </ul>
            <ul className="navUtil">
                <li>Cédrick Lemaine Romulus</li>
                <li>
                    <img src={'images-signets/profil.png'} alt="Image de profil" width="75px"/>
                </li>
            </ul>
        </header>
    );
}