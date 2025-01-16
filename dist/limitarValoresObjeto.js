"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserId = getUserId;
const defaultUser = {
    id: 34,
    firstName: "Ceci",
    lastName: "Urrs",
    isAdmin: true,
    role: "user"
};
function getUserId(user) {
    return user.id, user.isAdmin;
}
//directiva @ts-expect-error
const menuItems = [
    {
        id: 'home',
        href: '/home'
    },
    {
        id: 'about',
        href: '/about'
    }
];
