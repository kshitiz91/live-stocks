import openSocket from 'socket.io-client';

const endpoint  =  "ws://stocks.mnet.website";
const socket = openSocket(endpoint);