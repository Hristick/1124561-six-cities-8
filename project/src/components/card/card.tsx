import {Offer} from '../../types/offers';
import { Link } from 'react-router-dom';

type offerProps = {
  offer : Offer
};

function Cards (props: offerProps) : JSX.Element {
  const { offer } = props;
  const { isFavorite, isPremium, previewImage, price, title, type } = offer;

  return (
    <article className="cities__place-card place-card">
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/:${offer.id}`} title="/offer/:id">
          <img className="place-card__image" src={ previewImage } width="260" height="200" alt=" "/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" ${...isFavorite ? 'place-card__bookmark-button--active' : ''} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/:${offer.id}`} title="/offer/:id">{ title }</Link>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
}

export default Cards;
