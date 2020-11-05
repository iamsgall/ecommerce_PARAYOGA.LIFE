import {Suspense} from 'react';
import dynamic from 'next/dynamic';
const Esterilla = dynamic(() => import('./homeProduct/Esterilla'), {
  ssr: false,
});
const Bolsos = dynamic(() => import('./homeProduct/Bolsos'), {
  ssr: false,
});

export default function CardListProducts() {
  return (
    <div className='container'>
      <div className='row '>
        <Suspense>
          <Esterilla />
          <Bolsos />
        </Suspense>
        {/* <Sticker />
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
        <LamparaHimalaya /> */}
      </div>
    </div>
  );
}
