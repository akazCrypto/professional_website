


export class RT {



    constructor(basic, Fanzone_Media, Treasury_Advisory_Crypto, Aureum_Realwert, RNRM, Treasury_Advisory, Photon_Energy, Volksbank_Wien, Sungard_Deutschland_GmbH) {

        this.basic = { title: 'Basic Qualification', qualification: '', text: '', education: 'Philipps Marburg University: Advanced degree in international finance', languages: '• German - native speaker • English - fluent • French - fluent', programming_skills: '• ERC20, ERC721 smart contract development: solidity \n •  Smart contract deployment / ui creation: javascript' }

        this.Fanzone_Media = { date: 'march 2021 - may 2023 Berlin, Germany', company: 'Fanzone Media GmbH', position: 'Finance director', description: 'follows' }

        this.Treasury_Advisory_Crypto = { date: 'march 2019 - february 2021', description: '', title: 'Treasury Advisory Security Tokens' }

        this.Aureum_Realwert = { date: 'march 2018 - february 2019 Berlin, Germany', company: 'vPE Wertpapierhandelsbank AG', position: 'Treasury Director', description: 'follows' }

        this.RNRM = { date: 'september 2016 - december 2017 Berlin, Germany', company: 'Rosneft Refining & Marketing GmbH', position: 'Treasury Specialist', description: 'follows' }

        this.Treasury_Advisory = { date: 'march 2014 - may 2016', description: '', title: 'Treasury Advisory' }

        this.Photon_Energy = { date: 'july 2012 - february 2014 Berlin, Germany / Prague, CZ', company: 'Photon Energy Deutschland GmbH', position: 'Treasury Manager', description: 'follows' }

        this.Volksbank_Wien = { date: 'november 2010 - june 2012 Vienna, Austria', company: 'Volksbank Wien AG', position: 'Treasury Employee', description: 'follows' }

        this.Sungard_Deutschland_GmbH = { date: 'july 2008 - october 2010 Frankfurt, Germany / Luxembourg', company: 'Sungard Deutschland GmbH', position: 'Consultant Investment funds', description: '' }




    }
    format() {
        return `${this.basic.qualification, this.Fanzone_Media, this.Aureum_Realwert, this.RNRM}`
    }
}



export const ANT_CV = new RT('basic_qualification', 'Fanzone_Media', 'Aureum_Realwert', 'RNRM')
ANT_CV.basic.qualification = '• Crypto finance / treasury management – regulated institutions\n  • OTC (regulated) crypto sales & trading\n • Tokenization & cryptocurrency emission strategies\n • Management funding rounds for digital assets\n • BD crypto / NFT / investment fund / AIFMD\n • Smart contract development ERC20, ERC721: solidity/javascript\n • Developing and financing of marketing campaigns\n • Financial modelling in digital asset / cryptocurrency / NFT space'

ANT_CV.basic.text = 'My name is Anton Kazakov, I am a web3 finance executive. I consider myself as a regulated crypto finance professional. During my career I have collected more than ten years of valuable experience in the classical finance area: working with banks and company groups - mostly in corporate treasury field. On the other hand, for the last five years I have been working in the regulated crypto finance. This combinantion provides me with an understanding of how to create a blockchain finance reality in accordance with existing principles of financial regulation which have proven their efficiency over last decades.'

ANT_CV.Fanzone_Media.description = 'Responsible for all crypto / financial activities of the company’s NFT business: \n- Crypto revenue & portfolio management\n - Finance business development management for NFT projects\n - (opening bank accounts, crypto exchange arrangements, bank credit lines, negative interest management etc.)\n - Tokenization & cryptocurrency emission:\n  - Elaborating the framework in accordance with BAFIN\n   - Managing the series A funding round\n  - Elaborating and funding of marketing & sales strategies (a.o. business intelligence, WC management)\n - Setting up the AML & KYC procedures for the NFT trade field\n  - Revenue accounting / preparation of monthly financial statements (mongodb, sql, VBA)\n - Smart contract development erc20, erc721: solidity/javascript'

ANT_CV.Aureum_Realwert.description = 'as the head of crypto sales & trading\n - Building the sales department with respect to the German financial regulation\n - Crypto sales according to the German broker license (§1 Abs.1 Satz 2 Nr.4 KWG)\n - Acquisition of institutional and semi-professional clients\n - Supervising the team of ca. 30 external crypto trading intermediaries\n - Managing funding rounds for crypto start-ups\n as the director of treasury\n - Establishing diversified banking routes for crypto asset finance projects (opening business, trust and escrow bank accounts, fx-exchange arrangements, bank credit lines etc.)\n - Ensuring the Basel III equity capital adequacy with regard to the crypto asset finance transactions\n - Ensuring compliance with the BAFIN within the broad framework of regulated crypto finance business\n - Preparing the framework for treasury operations with crypto assets (REPO transactions, crypto asset lending & borrowing, etc.)\n - Elaborating the framework for the crypto investment fund according to AIFMD'

ANT_CV.Treasury_Advisory_Crypto.description = 'Sales of tokenized finance assets / real estate, fund shares, etc.\n - Developing of the STO business in different European jurisdictions\n - AML & KYC procedures for the crypto assets finance\n - Sales of tokenization and due diligence software'

ANT_CV.RNRM.description = ' - Building the treasury department / responsible for the monthly turnover of ca. 1 billion EUR\n - Foreign currency trading with the concern fx-trading department: EUR, USD, RUR\n - Short-& middle term funding and investment\n - Working capital management\n - Monthly cash flow reporting according to IFRS'

ANT_CV.Photon_Energy.description = ' - Building the treasury department with the monthly turnover of ca. 10 million EUR\n - Short-& middle term liquidity planning\n - Cash management\n - Fx-trading / Fx risk management\n - Interest rate risk management'

ANT_CV.Volksbank_Wien.description = ' - FX-options, Interest Rate Swaps, Cross Currency Swaps\n - Executing and clearing the derivative deals\n - Analysis of cash flows and calculation methods\n - VBA'

ANT_CV.Sungard_Deutschland_GmbH.description = ' - Investment fund administration, calculation of NAV\n - Risk management according to Basel II\n - Preparation of investment fund statistics\n - Fund migration, VBA'

ANT_CV.Treasury_Advisory.description = ' - Cash & Risk management\n - Liquidity planning\n - Budgeting, financial planning\n - Cash Flow Statement reporting'

/*


 - Presenting the crypto trading model on trending blockchain conferences (Paris, Berlin, Amsterdam)\n
 - Introduction and test of the crypto trading software\n

  - Electronic trading & phone brokerage\n

   - Setting up the treasury processes for regulated institutions with regard to\nthe crypto asset business\n

 basic: {
        title: string;
        qualification: string;
    }
    Fanzone_Media: {
        date: string;
        company: string
        position: string
        description: string
    };
    Aureum_Realwert: {
        date: string;
        company: string
        position: string
        description: string
    };
    RNRM: {
        date: string;
        company: string
        position: string
        description: string
    };
    Photon_Energy: {
        date: string;
        company: string
        position: string
        description: string
    };
    Volksbank_Wien: {
        date: string;
        company: string
        position: string
        description: string
    };
    Treasury_Advisory_Crypto: {
        date: string;
        description: string;
        title: string;
    };
    Sungard_Deutschland_GmbH: {
        date: string;
        company: string;
        position: string;
        description: string;
    };
    Treasury_Advisory: {
        date: string;
        description: string;
        title: string;
    };

    */