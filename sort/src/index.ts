import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactorsCollection } from './CharactorsCollection';

// const numbersCollection = new NumbersCollection([9, 35, -1, 5, 6]);

// const sorter = new Sorter(numbersCollection);

// sorter.sort();

// console.log(numbersCollection.data);

const charactersCollection = new CharactorsCollection('aksdjfqlqwenv');

const sorter = new Sorter(charactersCollection);

sorter.sort();

console.log(charactersCollection.data);
