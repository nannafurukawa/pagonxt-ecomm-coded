import { createUserUseCase } from '../../src/use-case/createUserAccount.js';

const user1 = createUserUseCase('Rita', 'rita@mail.com', 'ritalinda');
const user2 = createUserUseCase('Josué', 'josue@mail.com', '123bacana');

console.log(user1, user2);