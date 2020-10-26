import Link from 'next/link';
import AlfombraTerciopelo from './homeProduct/AlfombraTerciopelo';
import Esterilla from './homeProduct/Esterilla';
import Gorro from './homeProduct/Gorro';
import Sticker from './homeProduct/Sticker';
import Taburete from './homeProduct/Taburete';
import Cortina from './homeProduct/Cortina';
import Sandalia from './homeProduct/Sandalia';
import Poster from './homeProduct/Poster';
import Hamaca from './homeProduct/Hamaca';
import Aceite from './homeProduct/Aceite';
import Diadema from './homeProduct/Diadema';
import Pegatina from './homeProduct/Pegatina';
import Llavero from './homeProduct/Llavero';
import CuencoTibetano from './homeProduct/CuencoTibetano';
import Incienso from './homeProduct/Incienso';
import Manta from './homeProduct/Manta';
import Taza from './homeProduct/Taza';
import RelojArena from './homeProduct/RelojArena';
import Reposapies from './homeProduct/Reposapies';
import Guantes from './homeProduct/Guantes';
import Pesas from './homeProduct/Pesas';
import TablaEquilibrio from './homeProduct/TablaEquilibrio';
import Tapiz from './homeProduct/Tapiz';
import LamparaHimalaya from './homeProduct/LamparaHimalaya';

export default function CardListProducts() {
  return (
    <div className='container'>
      <div className='row '>
        <Esterilla />
        <Sticker />
        <Taburete />
        <Gorro />
        <AlfombraTerciopelo />
        <Cortina />
        <Sandalia />
        <Poster />
        <Hamaca />
        <Aceite />
        <Diadema />
        <Pegatina />
        <Llavero />
        <CuencoTibetano />
        <Incienso />
        <Manta />
        <Taza />
        <RelojArena />
        <Reposapies />
        <Guantes />
        <Pesas />
        <TablaEquilibrio />
        <Tapiz />
        <LamparaHimalaya />
      </div>
    </div>
  );
}
