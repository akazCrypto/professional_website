import React from 'react'
import { useState, useEffect } from 'react';
import { Button1, Input1, Button2, Button3, ButtonToggle, ButtonToggle1 } from './styles/Button.styled'
import { ethers, utils } from 'ethers';
import ETHtrans from './ETHtrans';
import ERC20trans from './ERC20trans';
import ETHERC20Wallet from './ETHERC20Wallet';
import { Token, TokenList } from "./TokenList";
import { Container } from './styles/Container.styled';
import { Nav, StyledHeader } from './styles/Header.styled'
import { Flex } from './styles/Flex.styled';

var walletinfoobject: WalletInfoObjectDetails



declare global {
    interface Window {
        ethereum: any
    }
}

export interface WalletInfoObjectDetails {
    provider: ethers.providers.Web3Provider
    signer: ethers.providers.JsonRpcSigner
    ANTaccount: string
    ANTaccountBalance?: string
}
export interface WalletInfoObject {
    walletinfoobject: WalletInfoObjectDetails
}

const { ethereum } = window;
var _result: string
var _ANTaccount: string
var _ANTaccountBalance: string
var _provider: ethers.providers.Web3Provider
var _signer: ethers.providers.JsonRpcSigner
var _walletinfoobject: WalletInfoObjectDetails
var balance: ethers.BigNumber


const WalletConnecticut = () => {
    walletinfoobject = { provider: _provider, signer: _signer, ANTaccount: _ANTaccount }

    const [isConnected, setIsConnected] = useState(false);
    console.log(isConnected)
    const [accountAddress, setAccountAddress] = useState('');
    const Connecting = async () => {
        console.log("function Connecting is working")
        try {
            if (!ethereum) { //this is an objective criteria
                setIsConnected(false) // this is a subjective parameter
                console.log(isConnected)

            }
            _ANTaccount = await ethereum.request({ method: 'eth_requestAccounts', });
            setAccountAddress(_ANTaccount);
            console.log(_ANTaccount)
            console.log(accountAddress)



            _provider = new ethers.providers.Web3Provider(window.ethereum);

            console.log(_provider)
            _signer = _provider.getSigner();
            console.log(_signer)
            //result = ethereum.request({ method: 'eth_requestAccounts' })
            //_ANTaccountBalance = await _provider.getBalance(accountAddress)
            //console.log(_ANTaccountBalance)

            //balance = await _provider.getBalance(_ANTaccount)
            //console.log(balance)
            //console.log(ethers.utils.parseEther(balance))
            //_ANTaccountBalance = (ethers.utils.formatEther(balance))
            //console.log(_ANTaccountBalance)

            //const balance = await _provider.getBalance(accountAddress)

            //console.log(ethers.utils.parseEther(balance))
            //const balanceFormatted = (ethers.utils.formatEther(balance))
            //console.log(balanceFormatted)


            console.log(_ANTaccountBalance)
            console.log(accountAddress)
            console.log(_ANTaccount)
            //console.log(result)
            setIsConnected(true)
            _walletinfoobject = { provider: _provider, signer: _signer, ANTaccount: _ANTaccount }
            walletinfoobject = _walletinfoobject
            console.log(_walletinfoobject)


            /*
            console.log("Wallet connected!")
            tknSymbol = await erc20_rw.symbol();
            console.log(tknSymbol)
            balanceFormatted = formatUnits(await erc20_rw.balanceOf(ANTAddress));
            console.log(balanceFormatted)
            const decim = await erc20_rw.decimals();
            console.log(`the number of decimals is: ${decim}`)
            //console.log(`the formatted wallet balance is: ${bal}`) */
        }
        catch (error) {
            setIsConnected(false);
            console.log(error)
        }
    }

    const Disconnecting = () => {

        console.log("function Disconnecting is working")
        _ANTaccount = '0'
        console.log(_ANTaccount)
        _result = '0'
        console.log(_result)
        setIsConnected(false)
    }


    return (
        <>
            {isConnected ? (
                <ButtonToggle1 onClick={Disconnecting}>
                    Disconnect
                </ButtonToggle1>
            ) : (
                <ButtonToggle1
                    onClick={Connecting}
                >
                    Connect
                </ButtonToggle1>
            )}
            <Nav>
                <ETHERC20Wallet TokenList={TokenList} />
                <ETHtrans walletinfoobject={walletinfoobject} />
            </Nav>
            <div>

            </div>
        </>
    )
}

export default WalletConnecticut;


/*
<ETHERC20Wallet walletinfoobject={walletinfoobject} />
*/