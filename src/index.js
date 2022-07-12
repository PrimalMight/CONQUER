import {stylebody, addTitle} from './dom.js';
import users, {getPremUsers} from './data';

console.log("index.js file");

addTitle("test");
stylebody();

console.log("REEEEESTTT");
console.log(getPremUsers(users));