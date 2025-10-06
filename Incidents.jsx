import React from 'react'
const incidents = [
  {id:1, title:'Auth API error', status:'Resolved', time:'2023-10-01 08:22'},
  {id:2, title:'Delayed batch job', status:'Investigating', time:'2023-10-02 09:10'},
  {id:3, title:'UI timeout on Transfers', status:'Monitoring', time:'2023-10-02 14:20'}
]

export default function Incidents(){
  return (
    <div style={{width:360, border:'1px solid #eee', borderRadius:12, padding:16}}>
      <h3 style={{marginTop:0}}>Recent Incidents</h3>
      <ul style={{padding:0, margin:0}}>
        {incidents.map(i => (
          <li key={i.id} style={{listStyle:'none', margin:'8px 0', padding:10, border:'1px solid #f0f0f0', borderRadius:8}}>
            <strong>{i.title}</strong>
            <div style={{color:'#666', fontSize:12}}>{i.status} • {i.time}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}