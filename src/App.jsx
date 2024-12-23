import { useState } from 'react'
import './App.css'
import {generateMnemonic} from 'bip39'
import { SolanaWallet } from './components/SolanaWallet'

function App() {
  const [mnemonic, setMnemonic] = useState("")

  return (
    
      <div>
       <div><button onClick={newMn}>Create Seed Phrase </button></div>
      
       <div>{mnemonic}</div>

       <SolanaWallet mnemonic={mnemonic} />
      </div>
    
  )

  async function newMn(){ 
    const mn = await generateMnemonic()
    setMnemonic(mn)
  }
}



export default App
