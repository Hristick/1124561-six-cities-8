import RenderMain from '../render-main/render-main';

type AppProps = {
  countOffer: number,
}

function App({countOffer}: AppProps): JSX.Element {
  return (
    <RenderMain countOffer = {countOffer}/>
  );
}

export default App;
