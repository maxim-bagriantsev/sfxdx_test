import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import { InjectedConnector } from '@web3-react/injected-connector'

export const injectedConnector = new InjectedConnector({
    supportedChainIds: [
        1, // Mainet
        3, // Ropsten
        4, // Rinkeby
        5, // Goerli
        42, // Kovan
    ],
})

export const Wallet = () => {
    const {chainId, account, activate, active} = useWeb3React<Web3Provider>()

    const onClick = () => {
        activate(injectedConnector)
    }
    const shorter = (str : any) =>
        str?.length > 8 ? str.slice(0, 6) + '...' + str.slice(-4) : str

    return (
        <div>
            <div>ChainId: {chainId}</div>
            <div>Account: {shorter(account)}</div>
            {active ? (
                <div>✅ </div>
            ) : (
                <button type="button" onClick={onClick}>
                    Connect
                </button>
            )}
        </div>
    )
}


