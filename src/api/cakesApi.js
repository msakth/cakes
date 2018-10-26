import { fetchCakesAync } from '../actions/CakeActions';

const root= "http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api";

export const fetchCakes = () => {
   return fetchCakesAync(`${root}/cakes`);
}




