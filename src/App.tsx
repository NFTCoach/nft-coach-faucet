import { useEffect, useState } from "react"
import "./App.css"
import {
  mintCard,
  mintCoach,
  createTournament,
  createPlayer,
  getTournaments,
} from "./contracts/fns"
import { utils } from "ethers"

const unk = (t: any) => t as unknown as any

class Tournament {
  id: string
  started: boolean
  constructor(obj: any) {
    this.id = obj.id
    this.started = obj.started
  }
}

class Request {
  done: boolean
  to: string
  type: string
  amt: string
  link: string

  constructor(
    done: boolean,
    to: string,
    type: string,
    amt: string,
    link: string
  ) {
    this.done = done
    this.to = to
    this.type = type
    this.amt = amt
    this.link = link
  }
}

function App() {
  const [address, setAddress] = useState<string>("")
  const [cardType, setCardType] = useState<number>(0)

  const [updateTournaments, setUpdateTournaments] = useState<boolean>(false)
  const [tournaments, setTournaments] = useState<Tournament[]>([])

  const [matchCount, setMatchCount] = useState<number>(0)
  const [winnerPoolPercent, setWinnerPoolPercent] = useState<number>(0)
  const [start, setStart] = useState<number>(0)
  const [interval, setIntervalTime] = useState<number>(0)
  const [entranceFee, setEntranceFee] = useState<number>(0)
  const [prepaidFee, setPrepaidFee] = useState<number>(0)

  const [notifQueue, setNotifQueue] = useState<Request[]>([])

  function doStuff(x: string) {
    console.log(x)
  }

  const getPlayerPack = async () => {
    await mintCard(address, 10)
  }

  const getCard = async () => {
    await mintCard(address, cardType)
  }

  const getCoach = async () => {
    await mintCoach(address)
  }

  const getPlayer = async () => {
    await createPlayer(address)
  }

  const handleCreateTournament = async () => {
    await createTournament({
      matchCount,
      winnerPoolPercent,
      start,
      interval,
      entranceFee,
      prepaidFee,
    })
  }

  const popQueue = () => {
    console.log("popping queue")
    const tmp = notifQueue
    tmp.pop()
    setNotifQueue(tmp)
  }

  useEffect(() => {
    document.addEventListener("txnSent", (e) => {
      e.stopImmediatePropagation()
      const details: any = unk(e).detail
      setNotifQueue((prev) => [
        ...prev,
        new Request(
          false,
          details.address,
          details.type,
          details.amt.toString(),
          details.link
        ),
      ])
      doStuff("txnSent")
      console.log("txnSent", e)
    })

    document.addEventListener("txnDone", (e) => {
      e.stopImmediatePropagation()
      const details: any = unk(e).detail
      setNotifQueue([
        ...notifQueue,
        new Request(
          true,
          details.address,
          details.type,
          details.type === "COACH"
            ? utils.formatEther(details.amt)
            : details.amt.toString(),
          details.link
        ),
      ])

      doStuff("txnDone")
    })
  }, [setNotifQueue, notifQueue])

  useEffect(() => {
    if (!updateTournaments) return

    getTournaments()
      .then((tournaments) => tournaments.map((t) => new Tournament(t)))
      .then((ts) => {
        setTournaments(ts)
        setUpdateTournaments(false)
      })
  }, [updateTournaments])

  return (
    <div className="App">
      <h1>Coach Faucet</h1>

      <div>
        <label htmlFor="addr">Address</label>
        <input
          name="addr"
          id="addr"
          placeholder="Enter address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <hr />

      <div>
        <button onClick={getCoach}>Get COACH</button>
      </div>
      <hr />

      <div>
        <button onClick={getPlayer}>Get Player</button>
      </div>

      <hr />
      <div>
        <button onClick={getPlayerPack}>Get Player Pack</button>
      </div>

      <hr />
      <div>
        <span>
          <label htmlFor="type">Card ID</label>
          <input
            type="number"
            name="type"
            min={0}
            max={9}
            step={1}
            value={cardType}
            onChange={(e) => setCardType(parseInt(e.target.value))}
            id="type"
          />
        </span>
        <button onClick={getCard}>Get Card</button>
      </div>

      <hr />

      <div>
        <label htmlFor="matchc">Match Count</label>
        <input
          type="number"
          min={1}
          max={4}
          value={matchCount}
          onChange={(e) => {
            setMatchCount(parseInt(e.target.value))
          }}
          name="matchc"
          id="matchc"
        />
        <br />

        <label htmlFor="winnerp">Winner's percent on pool</label>
        <input
          type="number"
          value={winnerPoolPercent}
          onChange={(e) => {
            setWinnerPoolPercent(parseInt(e.target.value))
          }}
          name="winnerp"
          id="winnerp"
        />

        <br />
        <label htmlFor="startd">Start delay in seconds</label>
        <input
          type="number"
          value={start}
          onChange={(e) => {
            setStart(parseInt(e.target.value))
          }}
          id="startd"
          name="startd"
        />

        <br />
        <label htmlFor="intervald">Seconds between two matches</label>
        <input
          type="number"
          value={interval}
          onChange={(e) => {
            setIntervalTime(parseInt(e.target.value))
          }}
          id="intervald"
          name="intervald"
        />

        <br />
        <label htmlFor="entranceFee">Entrance Fee</label>
        <input
          type="number"
          value={entranceFee}
          onChange={(e) => {
            setEntranceFee(parseInt(e.target.value))
          }}
          id="entranceFee"
          name="entranceFee"
        />
        <br />
        <label htmlFor="prepaidFee">Prepaid Fee</label>
        <input
          type="number"
          value={prepaidFee}
          onChange={(e) => {
            setPrepaidFee(parseInt(e.target.value))
          }}
          id="prepaidFee"
          name="prepaidFee"
        />
        <br />

        <button onClick={handleCreateTournament}>Create Tournament</button>
      </div>

      {notifQueue.map((notif) => {
        return <Notif eject={popQueue} notif={notif} key={notif.link} />
      })}

      <hr />

      <button
        onClick={() => {
          setUpdateTournaments(true)
        }}
      >
        Refresh Tournaments
      </button>
      {tournaments.map((t) => (
        <Trnm t={t} />
      ))}
    </div>
  )
}

const Notif = (props: any) => {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    setTimeout(props.eject, 10000)
  }, [props.eject])

  useEffect(() => {
    const invl = setInterval(() => {
      if (progress >= 100) return
      setProgress((p) => p + 5)
    }, 500)

    return () => {
      clearInterval(invl)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const notif: Request = props.notif

  return (
    <div>
      <h4>Txn {notif.done ? "Done" : "Sent"}</h4>
      <p>To: {notif.to}</p>
      <p>Type: {notif.type}</p>
      <p>Amount: {notif.amt}</p>
      <a href={notif.link}>Details</a>

      <div
        style={{
          marginTop: "20px",
          backgroundColor: "black",
          height: "5px",
          width: progress / 2 + "%",
        }}
      ></div>
    </div>
  )
}

const Trnm = (props: { t: Tournament }) => {
  const { t } = props

  return (
    <div>
      <p>ID: {t.id}</p>
      <p>{t.started ? "Started" : "Not Started"}</p>
    </div>
  )
}

export default App
