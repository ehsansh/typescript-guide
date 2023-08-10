import { User } from './models/User';

const user = new User({ name: 'ehsan', age: 40 });

console.log(user.get('name'));
