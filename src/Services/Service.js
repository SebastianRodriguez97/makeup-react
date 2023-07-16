import { UsersData } from "../Data/UserData";
import UseFetch from "./UseFetch";

export function GetAllProducts() {
    const countries = UseFetch(process.env.REACT_APP_URL_BASE);
    return countries;
}

export function GetProductsByType(productType) {
    const products = UseFetch(`${process.env.REACT_APP_URL_BASE}?product_type=${productType}`);
    return products;
}

export function AddCurrentUser(userObj) {
    localStorage.setItem('userLoggedin', JSON.stringify(userObj));
}

export function RemoveCurrentUser() {
    localStorage.setItem('userLoggedin', null);
}

export function GetCurrentUser() {
    return JSON.parse(localStorage.getItem('userLoggedin'));
}

export function IsValidUser(username, password) {
    return UsersData()
        .find(u => u.username === username && u.password === password) !== undefined;
}