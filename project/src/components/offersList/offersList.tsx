import Cards from '../card/card';
import { Offers } from '../../types/offers';

type OffersProps = {
  offers: Offers;
}

function OffersList(props: OffersProps): JSX.Element {
  const { offers } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}`;
        return (
          <Cards key={ keyValue } offer={ offer } />
        );
      })}
    </div>
  );
}

export default OffersList;
