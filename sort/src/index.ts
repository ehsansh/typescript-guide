import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactorsCollection } from './CharactorsCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([9, 35, -1, 5, 6]);

// const sorter = new Sorter(numbersCollection);

// sorter.sort();

// console.log(numbersCollection.data);

// const charactersCollection = new CharactorsCollection('aksdjfqlqwenv');

// const sorter = new Sorter(charactersCollection);

// sorter.sort();

// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(99);
linkedList.add(3);
linkedList.add(6);
linkedList.add(-2);

const sorter = new Sorter(linkedList);
sorter.sort();

linkedList.print();
