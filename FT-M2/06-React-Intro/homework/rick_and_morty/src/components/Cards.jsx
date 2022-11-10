import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {
         characters.map(character =>
            <Card
               key = {character.name}   
               // name = {character.name}
               // species = {character.species}
               // gender = {character.gender}
               // image = {character.image}               
               {...character}
               onCLose = {() => window.alert('XD')}
            />)
      }
   </div>;
}
