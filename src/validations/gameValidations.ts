import { Game } from "../types/gameType";

export function validateInputString(input:string):boolean|undefined{
    if(!input || !/^[A-Za-z\s]+$/.test(input) || input.trim()===""){
        console.log("Invalid input! Please enter valid input")
        return true
    }return }
export function isUniqueName(games:Game[],name:string):boolean|undefined{
     let existingName=games.some(game=>name.toLowerCase()===game.name.toLowerCase());
    if(existingName){
         console.log(`${name} already exists`)
         return true
    } return }

export function validatePrice(price:number):boolean|undefined{
    if(isNaN(price) || price < 0){
        console.log("Invalid price! Please enter valid price")
        return true
    } return }

export function validateRating(rating:number):boolean|undefined{
    if(isNaN(rating) || rating <= 0 || rating > 5){
        console.log("Invalid rating! Please enter valid rating")
        return true;
    } return  }