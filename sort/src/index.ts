import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([9, 3, -1, 5, 6]);

const sorter = new Sorter(numbersCollection);

sorter.sort();

console.log(numbersCollection.data);
