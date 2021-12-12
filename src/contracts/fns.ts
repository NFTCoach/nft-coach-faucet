import { Wallet, Contract, providers, utils } from "ethers"
import { COACHABI, ManagementABI, NC1155ABI, TournamentABI } from "./abis"
import addresses from "./addresses"
import * as dotenv from "dotenv"

dotenv.config()
console.log(process.env)
const unk = (t: any) => t as unknown as any

const provider = new providers.JsonRpcProvider(
  "https://rinkeby.infura.io/v3/5f6507414db54d61b6cfe765b8b231c1"
)

const signer = new Wallet(
  "1b0470d16a2f334f6104c97f79e91b91a6528865058e685f4b6e33a1bb3a7552",
  provider
)

const getArgs = async (txn: any, event: any) => {
  const receipt = await txn.wait()

  return receipt.events?.filter((x: any) => x.event === event)?.[0]?.args
}

const Tournament = new Contract(addresses.Tournaments, TournamentABI, signer)
const Coach = new Contract(addresses.COACH, COACHABI, signer)
const NC1155 = new Contract(addresses.NC1155, NC1155ABI, signer)
const Management = new Contract(addresses.Management, ManagementABI, signer)

const EXPLORER = "rinkeby.etherscan.io/tx/"
const COACH_AMT = utils.parseEther("10000")
const CARD_AMT = 5

export const mintCoach = async (address: string) => {
  const txn = await Coach.connect(signer).mint(address, COACH_AMT)
  const txnEvent = new CustomEvent("txnSent", {
    detail: {
      address,
      type: "COACH",
      amt: COACH_AMT,
      link: EXPLORER + txn.hash,
    },
  })
  document.dispatchEvent(txnEvent)

  await txn.wait()
  const doneEvent = new CustomEvent("txnDone", {
    detail: {
      address,
      type: "COACH",
      amt: COACH_AMT,
      link: EXPLORER + txn.hash,
    },
  })
  document.dispatchEvent(doneEvent)
}

export const mintCard = async (address: string, id: number) => {
  const txn = await NC1155.connect(signer).mint(address, id, CARD_AMT, [])
  const txnEvent = new CustomEvent("txnSent", {
    detail: {
      address,
      type: "CARD " + id,
      amt: CARD_AMT,
      link: EXPLORER + txn.hash,
    },
  })
  document.dispatchEvent(txnEvent)

  await txn.wait()
  const doneEvent = new CustomEvent("txnDone", {
    detail: {
      address,
      type: "CARD " + id,
      amt: CARD_AMT,
      link: EXPLORER + txn.hash,
    },
  })
  document.dispatchEvent(doneEvent)
}

export const createTournament = async (details: any) => {
  const {
    matchCount,
    winnerPoolPercent,
    start,
    interval,
    entranceFee,
    prepaidFee,
  } = details

  const tournamentDetails = [
    matchCount,
    winnerPoolPercent * 100,
    start,
    interval,
    utils.parseEther(entranceFee.toString()),
    utils.parseEther(prepaidFee.toString()),
  ]

  const txn = await Tournament.connect(signer).createDefaultTournament(
    tournamentDetails
  )
  const txnEvent = new CustomEvent("txnSent", {
    detail: {
      address: "-",
      type: "TOURNAMENT",
      amt: "-",
      link: EXPLORER + txn.hash,
    },
  })
  document.dispatchEvent(txnEvent)

  const tournamentId = (await getArgs(txn, "TournamentCreated"))[0]

  const doneEvent = new CustomEvent("txnDone", {
    detail: {
      address: "-",
      type: "TOURNAMENT ID : " + tournamentId.toString(),
      amt: CARD_AMT,
      link: EXPLORER + txn.hash,
    },
  })
  document.dispatchEvent(doneEvent)
}

export const createPlayer = async () => {
  const seed = Math.floor(Math.random() * 10 ** 8)

  const txn = await Management.connect(signer).testCreatePlayer(seed.toString())
  const txnEvent = new CustomEvent("txnSent", {
    detail: {
      address: "-",
      type: "CREATE PLAYER",
      amt: "-",
      link: EXPLORER + txn.hash,
    },
  })
  document.dispatchEvent(txnEvent)

  const playerId = (await getArgs(txn, "PlayerMinted"))[0]

  const doneEvent = new CustomEvent("txnDone", {
    detail: {
      address: "-",
      type: "PLAYER ID: " + playerId.toString(),
      amt: "-",
      link: EXPLORER + txn.hash,
    },
  })
  document.dispatchEvent(doneEvent)
}
