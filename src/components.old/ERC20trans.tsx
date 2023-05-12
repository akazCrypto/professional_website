import { useState, useEffect } from 'react';
import React, { Component } from 'react'
import { Token } from "./TokenList"
import { WalletInfoObjectDetails } from './WalletConnecticut'
import { ethers, utils } from 'ethers';
import { formatUnits } from "@ethersproject/units";
import { Button1, Input1, Button2, ButtonToggle1 } from './styles/Button.styled'
import { Container } from './styles/Container.styled';
import Header from './Header';
import { StyledHeader } from './styles/Header.styled';
//import { theme } from '../App'; //switch it back on when the website comes back
import { StyledCard } from './styles/Card.styled';




export interface ERC20transProps {
    walletinfoobject: WalletInfoObjectDetails
}
/*export var token = { ticker: '', address: '', name: '' }
*/
export interface ERC20Props {
    token: Token
}
/*
export class ERC20Props extends React.Component {
    constructor(token: ERC20Props | Token) {
        super(token)
    }

}
*/
const abi = [
    // Read-Only Functions
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",

    // Authenticated Functions
    "function transfer(address to, uint amount) returns (bool)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)",
];

var _ANTaccount: string
var _ANTaccountBalance: ethers.BigNumber
var _provider: ethers.providers.Web3Provider
var _signer: ethers.providers.JsonRpcSigner

var erc20_rw: ethers.Contract
var tknSymbol: string
var contractBalance: string
var contractBalanceFormatted: string
var token_address: string
var TokenAmount: string
var ANTAcc1Address: string
export const ERC20trans = ({ token }: ERC20Props) => {
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(message);
    const [amountEth, setamountEth] = useState('');
    const [amountEthupd, setamountEthupd] = useState(amountEth);
    console.log("ERC20trans is working")

    const { ticker, address, name }: {
        ticker: string,
        address: string,
        name: string
    } = token
    console.log(token)
    token_address = token.address
    useEffect(() => {
        const getBalance = async () => {
            _provider = new ethers.providers.Web3Provider(window.ethereum);
            erc20_rw = new ethers.Contract(address, abi, _signer);
            _signer = _provider.getSigner();
            contractBalance = await erc20_rw.balanceOf(_signer.getAddress());
            contractBalanceFormatted = ethers.utils.formatUnits(contractBalance)
            console.log(contractBalanceFormatted)
            console.log(token_address)
            console.log(address)
            //const balanceFormatted = formatUnits(await erc20_rw.balanceOf(address));

            //console.log(balanceFormatted)
        }
        getBalance()
    })
    // contractBalanceFormatted = ethers.utils.formatUnits(contractBalance)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);


    };
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {

        setamountEth(event.target.value);

    };
    //await startPayment({ receiver, strEther })
    function transferBegin(event: React.ChangeEvent<{}>) {
        event.preventDefault();
        console.log("Event: transferBegin is working!")
        setUpdated(message);
        setamountEthupd(amountEth);

        TokenAmount = amountEthupd
        ANTAcc1Address = updated

        // address = token.address
        //erc20_rw = new ethers.Contract(address, TokenERC20abi, signer);
        //await ABIContractOps(erc20_rw, address, provider, ANTAddress, ANTAcc1Address, TokenAmount, privateKey, wallet, token)
        CallingF()
    }




    const CallingF = async () => {

        await transferERC20()

    }

    const transferERC20 = async () => {


        _provider = new ethers.providers.Web3Provider(window.ethereum);
        _signer = _provider.getSigner();
        const { ticker, address, name } = token

        console.log(token.address)
        erc20_rw = new ethers.Contract(address, abi, _signer);
        /*
        const ANTAcc1Address: string = '0x8d169776b3F59694E2a544DdaA31495364063274'
        const TokenAmount: string = '2'
        */
        tknSymbol = await erc20_rw.symbol();
        contractBalance = await erc20_rw.balanceOf(_signer.getAddress());
        //const balanceFormatted = formatUnits(await erc20_rw.balanceOf(address));
        console.log(address)
        //console.log(balanceFormatted)
        //contractBalanceFormatted = ethers.utils.formatUnits(contractBalance)
        console.log(contractBalanceFormatted)
        const tx = erc20_rw.transfer(ANTAcc1Address, ethers.utils.parseEther(TokenAmount)) // this is working: transfering
            //ERC20 token const erc20_rw = new ethers.Contract(address, TokenERC20abi, wallet); -- WITHOUT METAMASK!
            // const erc20_rw = new ethers.Contract(address, TokenERC20abi, signer); -- With Metamask!
            .then(function (tx: any) {
                console.log(tx)
            })

    }


    return (

        <div>


            <h4>Contract Balance: {contractBalanceFormatted}</h4>
            <h4>  Token Address: {token_address}</h4>
            <div >
                <Input1
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={message}
                    placeholder="Recipient Address"
                />
                <div>
                    <Input1

                        type="text1"
                        id="message1"
                        name="message1"
                        onChange={handleChange1}
                        value={amountEth}
                        placeholder="Amount in ETH"
                    />
                </div>
            </div>
            <ButtonToggle1 onClick={transferBegin}>ERC20 Transfer</ButtonToggle1>

        </div>


    )
}

export default ERC20trans;

/* = ({ token }: ERC20Props,

transferERC20(token)

= (event: React.ChangeEvent<{}>) => {

ERC20trans : React.FC<ERC20Props> = ({ token})
ERC20trans : React.FC<ERC20transProps> = ({ walletinfoobject }) 
   ERC20trans : React.FC<ERC20transProps> = ({ walletinfoobject })




const { provider, signer, ANTaccount, ANTaccountBalance }: {
        provider: ethers.providers.Web3Provider,
        signer: ethers.providers.JsonRpcSigner,
        ANTaccount: string,
        ANTaccountBalance?: ethers.BigNumber
    } = walletinfoobject

    console.log(walletinfoobject)
    console.log(walletinfoobject.provider)
    console.log(walletinfoobject.signer)
    console.log(walletinfoobject.ANTaccount)



    function transferBegin(event: React.ChangeEvent<{}>) {
        event.preventDefault();
        console.log("Event: transferBegin is working!")

    */