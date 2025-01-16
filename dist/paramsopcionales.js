"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = getName;
function getName(params) {
    if (params.lastName) {
        return `${params.firstName} ${params.lastName}`;
    }
    return params.firstName;
}
const name = getName({ firstName: "Cecilia", lastName: "urrutia" });
