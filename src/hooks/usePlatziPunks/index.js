import { useMemo  } from "react";
import { useWeb3React } from "@web3-react/core";
import PlatziPunksArtifact from "../../config/web3/artifacts";

console.log(PlatziPunksArtifact.address);

const usePlatziPunks = () => {
	const { active, library, chainId } = useWeb3React();

	const platziPunksContract = useMemo(() => {
		if (!active) return;

		return new library.eth.Contract(
			PlatziPunksArtifact.abi,
			PlatziPunksArtifact.address[chainId],
		)
	}, [ active, chainId, library?.eth?.Contract]);
	

	return platziPunksContract;
}

export default usePlatziPunks;