import { useWeb3React } from '@web3-react/core';
import { useCallback, useState, useEffect } from 'react';
import usePlatziPunks from '../../hooks/usePlatziPunks';

const Home = () => {
	const { active } = useWeb3React();
	const [ maxSupply, setMaxSupply ] = useState();

	const platziPunks = usePlatziPunks();

	const getMaxSupply = useCallback(async () => {
		if (platziPunks) {
			const result = await platziPunks.methods.maxSupply().call();

			setMaxSupply(result);
		}
	}, [ platziPunks ]);


	useEffect(() => {
		getMaxSupply();
	}, [ getMaxSupply ]);

	if ( !active ) return <p>Conecta tu wallet.</p>

	return (
		<p> Max supply: { maxSupply }</p>
	)
};

export default Home;