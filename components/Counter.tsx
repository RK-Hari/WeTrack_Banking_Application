'use client';
import CountUp from 'react-countup';
const counter = ({amount}:{amount : number}) => {
  return (
    <div>
      <CountUp 
      duration={1}
      decimals={2}
      decimal="."
      prefix="$"
      end={amount}/>
    </div>
  )
}

export default counter
