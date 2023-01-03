import './index.css';
import Card from '../Card';

export default function Cards({ cards }) {

  return <div className='cards'>
    {
      cards.map(card =>
        <Card
          key={card.name}
          {...card}
        ></Card>)
    }
  </div>;
}
