(this["webpackJsonpnft-coach-faucet"]=this["webpackJsonpnft-coach-faucet"]||[]).push([[0],{80:function(e,t,n){},82:function(e,t,n){},87:function(e,t){},99:function(e,t,n){"use strict";n.r(t);var a=n(21),i=n.n(a),s=n(65),p=n.n(s),r=(n(80),n(40)),u=n(3),y=n.n(u),o=n(29),d=n(32),l=n(4),m=(n(82),n(105)),c=n(46),b=n(49),T={RNG:"0xC60d671D696Afe0179E9BeA91A08776F2c1F77bA",NC1155:"0x08f36b8936B0c5aEE5Ea1faf1F0B769820ee4A40",NC721:"0x98c81Bc0cad0E3f81a7c1981b7cbAB8B9669e8c0",COACH:"0x9DF4F57A6975F5C8c50c8CB20d3C7b1b69b7930f",CoreRegistry:"0x2953084Fd4Ba88597863312c0413C50F316d31d3",Management:"0x4Ea26b14464422E3ce1C87FfFcA806dA40A89Dcc",Marketplace:"0xdAE9e57c6e9978C8E336c2c88B1Fe29356d0b05e",Tournaments:"0x38d5fDBB3564B8171d3372510A9349733cE31f0d",TrainingMatches:"0x01fdd2cBF3817af5B7bcA5c0Df1940D662eb233e"};n(66).config(),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/nft-coach-faucet",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}));var f=new m.a.JsonRpcProvider("https://rinkeby.infura.io/v3/5f6507414db54d61b6cfe765b8b231c1"),v=new c.a("1b0470d16a2f334f6104c97f79e91b91a6528865058e685f4b6e33a1bb3a7552",f),h=function(){var e=Object(o.a)(y.a.mark((function e(t,n){var a,i,s,p;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.wait();case 2:return p=e.sent,e.abrupt("return",null===(a=p.events)||void 0===a||null===(i=a.filter((function(e){return e.event===n})))||void 0===i||null===(s=i[0])||void 0===s?void 0:s.args);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=new b.a(T.Tournaments,[{inputs:[{internalType:"contract COACH",name:"coachAddress",type:"address"},{internalType:"contract RNG",name:"rngAddress",type:"address"},{internalType:"contract CoreRegistry",name:"registryAddress",type:"address"},{internalType:"contract IManagement",name:"managementAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tournamentId",type:"uint256"}],name:"TournamentCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tournamentId",type:"uint256"}],name:"TournamentFinished",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tournamentId",type:"uint256"}],name:"TournamentStarted",type:"event"},{inputs:[{components:[{internalType:"uint8",name:"matchCount",type:"uint8"},{internalType:"uint16",name:"winnerPoolPercent",type:"uint16"},{internalType:"uint48",name:"start",type:"uint48"},{internalType:"uint48",name:"interval",type:"uint48"},{internalType:"uint256",name:"entranceFee",type:"uint256"},{internalType:"uint256",name:"prepaidFee",type:"uint256"}],internalType:"struct TournamentDetails",name:"details",type:"tuple"}],name:"createCustomTournament",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{components:[{internalType:"uint8",name:"matchCount",type:"uint8"},{internalType:"uint16",name:"winnerPoolPercent",type:"uint16"},{internalType:"uint48",name:"start",type:"uint48"},{internalType:"uint48",name:"interval",type:"uint48"},{internalType:"uint256",name:"entranceFee",type:"uint256"},{internalType:"uint256",name:"prepaidFee",type:"uint256"}],internalType:"struct TournamentDetails",name:"details",type:"tuple"}],name:"createDefaultTournament",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"customTournamentFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tournamentId",type:"uint256"}],name:"endRound",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tournamentId",type:"uint256"}],name:"finishTournament",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"idToTournament",outputs:[{internalType:"bool",name:"core",type:"bool"},{internalType:"uint8",name:"matchCount",type:"uint8"},{internalType:"uint16",name:"j",type:"uint16"},{internalType:"uint16",name:"k",type:"uint16"},{internalType:"uint16",name:"winnerPoolPercent",type:"uint16"},{internalType:"uint16",name:"currentTeamCount",type:"uint16"},{internalType:"uint48",name:"start",type:"uint48"},{internalType:"uint48",name:"interval",type:"uint48"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"entranceFee",type:"uint256"},{internalType:"uint256",name:"prizePool",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tournamentId",type:"uint256"}],name:"joinTournament",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tournamentId",type:"uint256"}],name:"leaveTournament",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tournamentId",type:"uint256"},{internalType:"uint16",name:"n",type:"uint16"}],name:"playNumberOfMatches",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tournamentId",type:"uint256"}],name:"playTournamentRound",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tournamentId",type:"uint256"}],name:"requestTournamentRandomness",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tournamentId",type:"uint256"},{internalType:"address",name:"user",type:"address"}],name:"searchForParticipant",outputs:[{internalType:"uint16",name:"",type:"uint16"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"newFee",type:"uint256"}],name:"setCustomTournamentFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tournamentId",type:"uint256"}],name:"startRound",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint16",name:"",type:"uint16"}],name:"tournamentToPlayers",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],v),x=new b.a(T.COACH,[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"burnFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],v),j=new b.a(T.NC1155,[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"address",name:"_contractAddress",type:"address"}],name:"authorizeContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"burnBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_contractAddress",type:"address"}],name:"deauthorizeContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mintBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newuri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],v),O=new b.a(T.NC721,[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_contractAddress",type:"address"}],name:"authorizeContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_contractAddress",type:"address"}],name:"deauthorizeContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"idToLastChallenge",outputs:[{internalType:"uint48",name:"",type:"uint48"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract Management",name:"_address",type:"address"}],name:"setManagementContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"updateLastChallenge",outputs:[],stateMutability:"nonpayable",type:"function"}],v),M=new b.a(T.Management,[{inputs:[{internalType:"contract NC1155",name:"nc1155Address",type:"address"},{internalType:"contract NC721",name:"nc721Address",type:"address"},{internalType:"contract RNG",name:"rngAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"academyId",type:"uint256"}],name:"AcademyAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"academyId",type:"uint256"}],name:"AcademyRemoved",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"playerId",type:"uint256"}],name:"PlayerMinted",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint48",name:"duration",type:"uint48"}],name:"PlayerRented",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"playerId",type:"uint256"}],name:"PlayerVeteran",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"player",type:"address"}],name:"TeamRegistered",type:"event"},{inputs:[],name:"addAcademy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"userOne",type:"address"},{internalType:"address",name:"userTwo",type:"address"}],name:"afterTournamentRound",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"afterTraining",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_contractAddress",type:"address"}],name:"authorizeContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"playerId",type:"uint256"}],name:"checkForBuy",outputs:[],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"playerId",type:"uint256"}],name:"checkForSale",outputs:[],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"matchCount",type:"uint256"},{internalType:"uint48",name:"endTime",type:"uint48"}],name:"checkStarters",outputs:[],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"checkStarters",outputs:[],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_contractAddress",type:"address"}],name:"deauthorizeContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getAtkAndDef",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getDefaultFive",outputs:[{internalType:"uint256[5]",name:"",type:"uint256[5]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"playerId",type:"uint256"}],name:"getStats",outputs:[{internalType:"uint24[10]",name:"",type:"uint24[10]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getTeamOf",outputs:[{components:[{internalType:"bool",name:"initialized",type:"bool"},{internalType:"uint8",name:"morale",type:"uint8"},{internalType:"uint16",name:"wins",type:"uint16"},{internalType:"uint48",name:"lastChallenge",type:"uint48"},{internalType:"uint256[5]",name:"defaultFive",type:"uint256[5]"}],internalType:"struct Team",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"idToCoach",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"idToPlayer",outputs:[{internalType:"bool",name:"locked",type:"bool"},{internalType:"uint8",name:"status",type:"uint8"},{internalType:"uint16",name:"academyType",type:"uint16"},{internalType:"uint24",name:"potential",type:"uint24"},{internalType:"uint48",name:"rentFinish",type:"uint48"},{internalType:"uint48",name:"lastChallenge",type:"uint48"},{internalType:"uint48",name:"leftToExpire",type:"uint48"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"lockDefaultFive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"playerId",type:"uint256"}],name:"makeVeteran",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"nc1155Contract",outputs:[{internalType:"contract NC1155",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"nc721Contract",outputs:[{internalType:"contract NC721",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"openPack",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"registerTeam",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"academyId",type:"uint256"}],name:"removeAcademy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"playerId",type:"uint256"},{internalType:"uint48",name:"duration",type:"uint48"}],name:"rentPlayerFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"requestOpenPackRandomness",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rngContract",outputs:[{internalType:"contract RNG",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256[5]",name:"defaultFive",type:"uint256[5]"}],name:"setDefaultFive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"idx",type:"uint256"},{internalType:"uint256",name:"newPlayer",type:"uint256"}],name:"substituteLocked",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"seed",type:"uint256"}],name:"testCreatePlayer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"playerId",type:"uint256"}],name:"transferPlayerFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"unlockDefaultFive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"nthField",type:"uint256"},{internalType:"uint24",name:"atkAmount",type:"uint24"},{internalType:"uint24",name:"defAmount",type:"uint24"}],name:"upgradeAllPlayers",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"playerId",type:"uint256"}],name:"useUpgradeCard",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userToTeam",outputs:[{internalType:"bool",name:"initialized",type:"bool"},{internalType:"uint8",name:"morale",type:"uint8"},{internalType:"uint16",name:"wins",type:"uint16"},{internalType:"uint48",name:"lastChallenge",type:"uint48"}],stateMutability:"view",type:"function"}],v),C="rinkeby.etherscan.io/tx/",g=m.b.parseEther("10000"),F=function(){var e=Object(o.a)(y.a.mark((function e(t){var n,a,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.connect(v).mint(t,g);case 2:return n=e.sent,a=new CustomEvent("txnSent",{detail:{address:t,type:"COACH",amt:g,link:C+n.hash}}),document.dispatchEvent(a),e.next=7,n.wait();case 7:i=new CustomEvent("txnDone",{detail:{address:t,type:"COACH",amt:g,link:C+n.hash}}),document.dispatchEvent(i);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(y.a.mark((function e(t,n){var a,i,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.connect(v).mint(t,n,5,[]);case 2:return a=e.sent,i=new CustomEvent("txnSent",{detail:{address:t,type:"CARD "+n,amt:5,link:C+a.hash}}),document.dispatchEvent(i),e.next=7,a.wait();case 7:s=new CustomEvent("txnDone",{detail:{address:t,type:"CARD "+n,amt:5,link:C+a.hash}}),document.dispatchEvent(s);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(y.a.mark((function e(t){var n,a,i,s,p,r,u,o,d,l,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.matchCount,a=t.winnerPoolPercent,i=t.start,s=t.interval,p=t.entranceFee,r=t.prepaidFee,u=[n,100*a,i,s,m.b.parseEther(p.toString()),m.b.parseEther(r.toString())],e.next=4,w.connect(v).createDefaultTournament(u);case 4:return o=e.sent,d=new CustomEvent("txnSent",{detail:{address:"-",type:"TOURNAMENT",amt:"-",link:C+o.hash}}),document.dispatchEvent(d),e.next=9,h(o,"TournamentCreated");case 9:l=e.sent[0],c=new CustomEvent("txnDone",{detail:{address:"-",type:"TOURNAMENT ID : "+l.toString(),amt:5,link:C+o.hash}}),document.dispatchEvent(c);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.a)(y.a.mark((function e(t){var n,a,i,s,p;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Math.floor(Math.random()*Math.pow(10,8)),e.next=3,M.connect(v).testCreatePlayer(n.toString());case 3:return a=e.sent,i=new CustomEvent("txnSent",{detail:{address:"-",type:"CREATE PLAYER",amt:"-",link:C+a.hash}}),document.dispatchEvent(i),e.next=8,h(a,"PlayerMinted");case 8:return s=e.sent[0],e.next=11,O.connect(v).transferFrom(v.address,t,s);case 11:p=new CustomEvent("txnDone",{detail:{address:"-",type:"PLAYER ID: "+s.toString(),amt:"-",link:C+a.hash}}),document.dispatchEvent(p);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n(9),S=function e(t,n,a,i,s){Object(l.a)(this,e),this.done=void 0,this.to=void 0,this.type=void 0,this.amt=void 0,this.link=void 0,this.done=t,this.to=n,this.type=a,this.amt=i,this.link=s};var P=function(e){var t=Object(a.useState)(0),n=Object(d.a)(t,2),i=n[0],s=n[1];Object(a.useEffect)((function(){setTimeout(e.eject,1e4)}),[e.eject]),Object(a.useEffect)((function(){var e=setInterval((function(){i>=100||s((function(e){return e+5}))}),500);return function(){clearInterval(e)}}),[]);var p=e.notif;return Object(E.jsxs)("div",{children:[Object(E.jsxs)("h4",{children:["Txn ",p.done?"Done":"Sent"]}),Object(E.jsxs)("p",{children:["To: ",p.to]}),Object(E.jsxs)("p",{children:["Type: ",p.type]}),Object(E.jsxs)("p",{children:["Amount: ",p.amt]}),Object(E.jsx)("a",{href:p.link,children:"Details"}),Object(E.jsx)("div",{style:{marginTop:"20px",backgroundColor:"black",height:"5px",width:i/2+"%"}})]})},D=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(0),p=Object(d.a)(s,2),u=p[0],l=p[1],c=Object(a.useState)(0),b=Object(d.a)(c,2),T=b[0],f=b[1],v=Object(a.useState)(0),h=Object(d.a)(v,2),w=h[0],x=h[1],j=Object(a.useState)(0),O=Object(d.a)(j,2),M=O[0],C=O[1],g=Object(a.useState)(0),D=Object(d.a)(g,2),R=D[0],B=D[1],N=Object(a.useState)(0),_=Object(d.a)(N,2),L=_[0],H=_[1],z=Object(a.useState)(0),G=Object(d.a)(z,2),U=G[0],V=G[1],W=Object(a.useState)([]),q=Object(d.a)(W,2),J=q[0],K=q[1];function Y(e){console.log(e)}var Q=function(){var e=Object(o.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(n,10);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(o.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(n,u);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(o.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(n);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(o.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(n);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(o.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k({matchCount:T,winnerPoolPercent:w,start:M,interval:R,entranceFee:L,prepaidFee:U});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){console.log("popping queue"),K(J.slice(0,-1))};return Object(a.useEffect)((function(){document.addEventListener("txnSent",(function(e){e.stopImmediatePropagation();var t=e.detail;K([].concat(Object(r.a)(J),[new S(!1,t.address,t.type,t.amt.toString(),t.link)])),Y("txnSent"),console.log("txnSent",e)})),document.addEventListener("txnDone",(function(e){e.stopImmediatePropagation();var t=e.detail;K([].concat(Object(r.a)(J),[new S(!0,t.address,t.type,"COACH"===t.type?m.b.formatEther(t.amt):t.amt.toString(),t.link)])),Y("txnDone")}))}),[K,J]),Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)("h1",{children:"Coach Faucet"}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{htmlFor:"addr",children:"Address"}),Object(E.jsx)("input",{name:"addr",id:"addr",placeholder:"Enter address",type:"text",value:n,onChange:function(e){return i(e.target.value)}})]}),Object(E.jsx)("hr",{}),Object(E.jsx)("div",{children:Object(E.jsx)("button",{onClick:Z,children:"Get COACH"})}),Object(E.jsx)("hr",{}),Object(E.jsx)("div",{children:Object(E.jsx)("button",{onClick:$,children:"Get Player"})}),Object(E.jsx)("hr",{}),Object(E.jsx)("div",{children:Object(E.jsx)("button",{onClick:Q,children:"Get Player Pack"})}),Object(E.jsx)("hr",{}),Object(E.jsxs)("div",{children:[Object(E.jsxs)("span",{children:[Object(E.jsx)("label",{htmlFor:"type",children:"Card ID"}),Object(E.jsx)("input",{type:"number",name:"type",min:0,max:9,step:1,value:u,onChange:function(e){return l(parseInt(e.target.value))},id:"type"})]}),Object(E.jsx)("button",{onClick:X,children:"Get Card"})]}),Object(E.jsx)("hr",{}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{htmlFor:"matchc",children:"Match Count"}),Object(E.jsx)("input",{type:"number",value:T,onChange:function(e){f(parseInt(e.target.value))},name:"matchc",id:"matchc"}),Object(E.jsx)("br",{}),Object(E.jsx)("label",{htmlFor:"winnerp",children:"Winner's percent on pool"}),Object(E.jsx)("input",{type:"number",value:w,onChange:function(e){x(parseInt(e.target.value))},name:"winnerp",id:"winnerp"}),Object(E.jsx)("br",{}),Object(E.jsx)("label",{htmlFor:"startd",children:"Start delay in seconds"}),Object(E.jsx)("input",{type:"number",value:M,onChange:function(e){C(parseInt(e.target.value))},id:"startd",name:"startd"}),Object(E.jsx)("br",{}),Object(E.jsx)("label",{htmlFor:"intervald",children:"Seconds between two matches"}),Object(E.jsx)("input",{type:"number",value:R,onChange:function(e){B(parseInt(e.target.value))},id:"intervald",name:"intervald"}),Object(E.jsx)("br",{}),Object(E.jsx)("label",{htmlFor:"entranceFee",children:"Entrance Fee"}),Object(E.jsx)("input",{type:"number",value:L,onChange:function(e){H(parseInt(e.target.value))},id:"entranceFee",name:"entranceFee"}),Object(E.jsx)("br",{}),Object(E.jsx)("label",{htmlFor:"prepaidFee",children:"Prepaid Fee"}),Object(E.jsx)("input",{type:"number",value:U,onChange:function(e){V(parseInt(e.target.value))},id:"prepaidFee",name:"prepaidFee"}),Object(E.jsx)("br",{}),Object(E.jsx)("button",{onClick:ee,children:"Create Tournament"})]}),J.map((function(e){return Object(E.jsx)(P,{eject:te,notif:e})}))]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,p=t.getTTFB;n(e),a(e),i(e),s(e),p(e)}))};p.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(D,{})}),document.getElementById("root")),R()}},[[99,1,2]]]);
//# sourceMappingURL=main.c0eacd9d.chunk.js.map