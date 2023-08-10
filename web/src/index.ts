import { User } from './models/User';

const user = new User({ name: 'ehsan', age: 40 });

user.set({ name: 'asal' });

console.log(user.get('name'));
