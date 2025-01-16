"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserId = getUserId;
const defaultUser = {
    id: 34,
    firstName: "Ceci",
    lastName: "Urrs",
    isAdmin: true
};
function getUserId(user) {
    return user.id, user.isAdmin;
}
