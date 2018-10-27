import { fetchCakesAync, fetchCakeAsync } from '../actions/fetchActions';
import { CreateCake } from '../actions/createCakeAction';


const root= "http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api";

export const fetchCakes = () => {
   return fetchCakesAync(`${root}/cakes`);
}

export const createCake = (cake) => {
    return CreateCake(`${root}/cakes`, cake);
}

export const fetchCake = (id) => {
    return fetchCakeAsync(id);
}





