import { InjectedConnector } from '@web3-react/injected-connector'
import Web3 from 'web3/dist/web3.min';

const connector = new InjectedConnector({ supportedChainIds: [
	4, //Rinkeby
] });

console.log(Web3);
const getLibrary = ( provider ) => new Web3(provider);

export {
	connector,
	getLibrary,
}