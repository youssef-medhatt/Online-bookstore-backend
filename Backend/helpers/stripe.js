import process from 'node:process';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log('Stripe Key:', process.env.STRIPE_SECRET_KEY ? 'Exists' : 'Not Found');

export default stripe;
