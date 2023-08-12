import { User } from './models/User';

const user = new User({ name: 'ehsan', age: 40 });

user.set({ name: 'asal' });

console.log(user.get('name'));

user.on('change', () => {
    console.log('change 1');
});
user.on('change', () => {
    console.log('change 2');
});

user.trigger('change');
