import React from 'react'
import Incidents from './components/Incidents.jsx'
import ChartPanel from './components/ChartPanel.jsx'

export default function App(){
  return (
    <div style={{fontFamily:'Inter, system-ui, sans-serif', padding:24, maxWidth:1200, margin:'0 auto'}}>
      <h1 style={{marginBottom:12}}>Banking Application Support Dashboard</h1>
      <p style={{marginTop:0, color:'#555'}}>Demo prototype: latency chart + recent incidents.</p>
      <div style={{display:'flex', gap:24, flexWrap:'wrap'}}>
        <ChartPanel />
        <Incidents />
      </div>
      <footer style={{marginTop:32, fontSize:12, color:'#666'}}>Demo only • Vite + React • Chart.js</footer>
    </div>
  )
}