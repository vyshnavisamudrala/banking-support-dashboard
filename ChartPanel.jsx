import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js'
Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip)

export default function ChartPanel(){
  const data = {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets:[{
      label:'API Latency (ms)',
      data:[120,110,95,130,100,90,105],
      tension:0.3,
      fill:false
    }]
  }
  const options = { responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom'}} }
  return (
    <div style={{width:600, height:320, border:'1px solid #eee', borderRadius:12, padding:16}}>
      <h3 style={{margin:'0 0 8px'}}>Latency</h3>
      <div style={{height:260}}>
        <Line data={data} options={options} />
      </div>
    </div>
  )
}